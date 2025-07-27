'use server';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { revalidatePath } from 'next/cache';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    createdAt: any; 
}

interface NewProjectData {
    title: string;
    description: string;
    category: string;
    image: string;
}

export async function getPortfolioItems(): Promise<Project[]> {
    try {
        const q = query(collection(db, "portfolio"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return [];
        }
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
    } catch (error) {
        console.error("Error fetching portfolio items:", error);
        return [];
    }
}

export async function addPortfolioItem(data: NewProjectData) {
    console.log("Attempting to add portfolio item with data:", data);
    
    if (!data.image || !data.image.startsWith('data:image')) {
        const errorMsg = 'Invalid image data URL format.';
        console.error(errorMsg);
        return { success: false, error: errorMsg };
    }

    try {
        console.log("1. Uploading image to Firebase Storage for project:", data.title);
        const storageRef = ref(storage, `portfolio/${Date.now()}-${data.title.replace(/\s+/g, '-')}`);
        
        const uploadResult = await uploadString(storageRef, data.image, 'data_url');
        const imageUrl = await getDownloadURL(uploadResult.ref);
        console.log("2. Image uploaded successfully. URL:", imageUrl);

        const projectData = {
            title: data.title,
            description: data.description,
            category: data.category,
            imageUrl: imageUrl,
            createdAt: serverTimestamp()
        };

        console.log("3. Adding project data to Firestore:", projectData);
        const docRef = await addDoc(collection(db, "portfolio"), projectData);
        console.log("4. Project added to Firestore with ID:", docRef.id);
        
        revalidatePath('/admin/portfolio');
        revalidatePath('/portfolio');
        console.log("5. Paths revalidated.");
        
        return { success: true, id: docRef.id };
    } catch (error: any) {
        console.error("Error in addPortfolioItem:", error);
        return { success: false, error: error.message || 'An unexpected error occurred.' };
    }
}

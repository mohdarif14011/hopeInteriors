
'use server';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { revalidatePath } from 'next/cache';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    createdAt: Date;
}

export async function getPortfolioItems(): Promise<Project[]> {
    const querySnapshot = await getDocs(collection(db, "portfolio"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
}

export async function addPortfolioItem(data: { title: string; description: string; category: string; image: string }) {
    console.log("Attempting to add portfolio item with data at:", new Date().toISOString());
    try {
        console.log("1. Uploading image to Firebase Storage...");
        const storageRef = ref(storage, `portfolio/${Date.now()}_${data.title}`);
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
        await addDoc(collection(db, "portfolio"), projectData);
        console.log("4. Project data added to Firestore successfully.");
        
        revalidatePath('/admin/portfolio');
        console.log("5. Path revalidated.");
        return { success: true };
    } catch (error: any) {
        console.error("Error in addPortfolioItem:", error);
        return { success: false, error: error.message };
    }
}

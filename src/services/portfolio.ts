
'use server';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
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
    imageUrl: string;
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

    try {
        const projectData = {
            title: data.title,
            description: data.description,
            category: data.category,
            imageUrl: data.imageUrl,
            createdAt: serverTimestamp()
        };

        console.log("1. Adding project data to Firestore:", projectData);
        const docRef = await addDoc(collection(db, "portfolio"), projectData);
        console.log("2. Project added to Firestore with ID:", docRef.id);
        
        revalidatePath('/admin/portfolio');
        revalidatePath('/portfolio');
        console.log("3. Paths revalidated.");
        
        return { success: true, id: docRef.id };
    } catch (error: any) {
        console.error("Error in addPortfolioItem:", error);
        return { success: false, error: error.message || 'An unexpected error occurred.' };
    }
}

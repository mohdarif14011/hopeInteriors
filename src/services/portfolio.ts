
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
    try {
        // Upload image to Firebase Storage
        const storageRef = ref(storage, `portfolio/${Date.now()}_${data.title}`);
        const uploadResult = await uploadString(storageRef, data.image, 'data_url');
        const imageUrl = await getDownloadURL(uploadResult.ref);

        // Add project data to Firestore
        await addDoc(collection(db, "portfolio"), {
            title: data.title,
            description: data.description,
            category: data.category,
            imageUrl: imageUrl,
            createdAt: serverTimestamp()
        });
        
        revalidatePath('/admin/portfolio');
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

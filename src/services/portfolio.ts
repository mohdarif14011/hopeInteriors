
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, getDocs, serverTimestamp, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    createdAt?: any;
}

export interface NewProject {
    title: string;
    description: string;
    category: string;
    image: File;
}

const portfolioCollection = collection(db, 'portfolio');

// Function to get all portfolio items
export const getPortfolioItems = async (): Promise<Project[]> => {
    const snapshot = await getDocs(portfolioCollection);
    return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        category: doc.data().category,
        imageUrl: doc.data().imageUrl,
        createdAt: doc.data().createdAt,
    }));
};

// Function to add a new portfolio item
export const addPortfolioItem = async (project: NewProject): Promise<{ success: boolean; id?: string, error?: string }> => {
    try {
        // 1. Upload image to Firebase Storage
        const imageRef = ref(storage, `portfolio/${Date.now()}_${project.image.name}`);
        const uploadResult = await uploadBytes(imageRef, project.image);
        const imageUrl = await getDownloadURL(uploadResult.ref);

        // 2. Add project data to Firestore
        const docRef = await addDoc(portfolioCollection, {
            title: project.title,
            description: project.description,
            category: project.category,
            imageUrl: imageUrl,
            createdAt: serverTimestamp()
        });
        
        return { success: true, id: docRef.id };
    } catch (error: any) {
        console.error("Error adding portfolio item: ", error);
        return { success: false, error: error.message };
    }
};

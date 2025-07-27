
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, getDocs, serverTimestamp, QueryDocumentSnapshot, DocumentData, doc, getDoc } from 'firebase/firestore';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    coverImageUrl: string;
    imageUrls: string[];
    createdAt?: any;
}

export interface NewProject {
    title: string;
    description: string;
    category: string;
    coverImageUrl: string;
    imageUrls: string[];
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
        coverImageUrl: doc.data().coverImageUrl,
        imageUrls: doc.data().imageUrls || [],
        createdAt: doc.data().createdAt,
    }));
};

// Function to get a single portfolio item by ID
export const getPortfolioItem = async (id: string): Promise<Project | null> => {
    const docRef = doc(db, 'portfolio', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return {
            id: docSnap.id,
            title: data.title,
            description: data.description,
            category: data.category,
            coverImageUrl: data.coverImageUrl,
            imageUrls: data.imageUrls || [],
            createdAt: data.createdAt,
        };
    } else {
        return null;
    }
}


// Function to add a new portfolio item
export const addPortfolioItem = async (project: NewProject): Promise<{ success: boolean; id?: string, error?: string }> => {
    try {
        // Add project data to Firestore
        const docRef = await addDoc(portfolioCollection, {
            ...project,
            createdAt: serverTimestamp()
        });
        
        return { success: true, id: docRef.id };
    } catch (error: any) {
        console.error("Error adding portfolio item: ", error);
        return { success: false, error: error.message };
    }
};

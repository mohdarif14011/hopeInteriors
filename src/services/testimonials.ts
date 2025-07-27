
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, serverTimestamp, QueryDocumentSnapshot, DocumentData, doc, getDoc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';

export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    title: string;
    comment: string;
    avatarUrl: string;
    createdAt?: any;
}

export interface NewTestimonial {
    name: string;
    location: string;
    rating: number;
    title: string;
    comment: string;
    avatarUrl: string;
}

const testimonialsCollection = collection(db, 'testimonials');

export const getTestimonials = async (): Promise<Testimonial[]> => {
    const q = query(testimonialsCollection, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
        id: doc.id,
        name: doc.data().name,
        location: doc.data().location,
        rating: doc.data().rating,
        title: doc.data().title,
        comment: doc.data().comment,
        avatarUrl: doc.data().avatarUrl,
        createdAt: doc.data().createdAt,
    }));
};

export const getTestimonial = async (id: string): Promise<Testimonial | null> => {
    const docRef = doc(db, 'testimonials', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return {
            id: docSnap.id,
            name: data.name,
            location: data.location,
            rating: data.rating,
            title: data.title,
            comment: data.comment,
            avatarUrl: data.avatarUrl,
            createdAt: data.createdAt,
        };
    } else {
        return null;
    }
}

export const addTestimonial = async (testimonial: NewTestimonial): Promise<{ success: boolean; id?: string, error?: string }> => {
    try {
        const docRef = await addDoc(testimonialsCollection, {
            ...testimonial,
            createdAt: serverTimestamp()
        });
        return { success: true, id: docRef.id };
    } catch (error: any) {
        console.error("Error adding testimonial: ", error);
        return { success: false, error: error.message };
    }
};

export const updateTestimonial = async (id: string, testimonial: Partial<NewTestimonial>): Promise<{ success: boolean; error?: string }> => {
    try {
        const docRef = doc(db, 'testimonials', id);
        await updateDoc(docRef, testimonial);
        return { success: true };
    } catch (error: any) {
        console.error("Error updating testimonial: ", error);
        return { success: false, error: error.message };
    }
};

export const deleteTestimonial = async (id: string): Promise<{ success: boolean; error?: string }> => {
    try {
        const docRef = doc(db, 'testimonials', id);
        await deleteDoc(docRef);
        return { success: true };
    } catch (error: any) {
        console.error("Error deleting testimonial: ", error);
        return { success: false, error: error.message };
    }
};

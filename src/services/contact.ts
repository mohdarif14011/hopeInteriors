
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface ContactMessage {
    name: string;
    email: string;
    service: string;
    message: string;
}

const contactsCollection = collection(db, 'contacts');

export const addContactMessage = async (message: ContactMessage): Promise<{ success: boolean; id?: string, error?: string }> => {
    try {
        const docRef = await addDoc(contactsCollection, {
            ...message,
            createdAt: serverTimestamp()
        });
        return { success: true, id: docRef.id };
    } catch (error: any) {
        console.error("Error adding contact message: ", error);
        return { success: false, error: error.message };
    }
};

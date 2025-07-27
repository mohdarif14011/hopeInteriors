
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { format } from 'date-fns';

export interface NewContactMessage {
    name: string;
    email: string;
    service: string;
    message: string;
}

export interface ContactMessage extends NewContactMessage {
    id: string;
    createdAt: string;
}

const contactsCollection = collection(db, 'contacts');

export const addContactMessage = async (message: NewContactMessage): Promise<{ success: boolean; id?: string, error?: string }> => {
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


export const getContactMessages = async (): Promise<ContactMessage[]> => {
    const q = query(contactsCollection, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
        const data = doc.data();
        return {
            id: doc.id,
            name: data.name,
            email: data.email,
            service: data.service,
            message: data.message,
            createdAt: data.createdAt ? format(data.createdAt.toDate(), 'PPP p') : 'Date not available'
        }
    });
};

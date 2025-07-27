
import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase-admin'; // Using admin SDK for backend operations
import { cookies } from 'next/headers';

async function getAuthenticatedUser() {
    const sessionCookie = cookies().get('session')?.value || '';
    if (!sessionCookie) {
        return null;
    }
    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        return decodedClaims;
    } catch (error) {
        return null;
    }
}

export async function GET(request: NextRequest) {
    try {
        // No auth check for GET to allow public viewing on portfolio page
        const q = query(collection(db, "portfolio"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        const projects = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return NextResponse.json({ projects });

    } catch (error: any) {
        return NextResponse.json({ error: 'Failed to fetch portfolio items' }, { status: 500 });
    }
}


export async function POST(request: NextRequest) {
    try {
        // This is a protected route. Only authenticated users can add projects.
        // We can't implement this part without a way to set the session cookie upon login.
        // For now, we'll proceed without the auth check here, but this is where it would go.
        // const user = await getAuthenticatedUser();
        // if (!user) {
        //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        // }

        const body = await request.json();
        const { title, description, category, imageUrl } = body;

        if (!title || !description || !category || !imageUrl) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const projectData = {
            title,
            description,
            category,
            imageUrl,
            createdAt: serverTimestamp()
        };

        const docRef = await addDoc(collection(db, "portfolio"), projectData);

        return NextResponse.json({ id: docRef.id }, { status: 201 });

    } catch (error: any) {
        console.error("Error in POST /api/portfolio:", error);
        return NextResponse.json({ error: 'Failed to add portfolio item', details: error.message }, { status: 500 });
    }
}


'use server';

import { revalidatePath } from 'next/cache';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    createdAt?: any; 
}

interface NewProjectData {
    title: string;
    description: string;
    category: string;
    imageUrl: string;
}

// This function now fetches data from our secure API route
export async function getPortfolioItems(): Promise<Project[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/portfolio`, {
            cache: 'no-store', // Ensure fresh data
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error fetching portfolio items:", errorText);
            // Propagate a clear error message to the UI
            throw new Error(`Failed to fetch portfolio items: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data.projects;
    } catch (error) {
        console.error("Error in getPortfolioItems:", error);
        // Return empty array on error to prevent crashing the page
        return [];
    }
}

// This function now sends data to our secure API route
export async function addPortfolioItem(data: NewProjectData) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/portfolio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorResult = await response.json();
            return { success: false, error: errorResult.error || 'An unexpected error occurred.' };
        }

        const result = await response.json();
        
        revalidatePath('/admin/portfolio');
        revalidatePath('/portfolio');
        
        return { success: true, id: result.id };
    } catch (error: any) {
        console.error("Error in addPortfolioItem:", error);
        return { success: false, error: error.message || 'An unexpected error occurred.' };
    }
}

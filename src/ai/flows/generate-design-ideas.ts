
'use server';
/**
 * @fileOverview AI flow for generating interior design ideas.
 *
 * - generateDesignIdeas - A function that handles the design idea generation process.
 * - GenerateDesignIdeasInput - The input type for the generateDesignIdeas function.
 * - GenerateDesignIdeasOutput - The return type for the generateDesignIdeas function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateDesignIdeasInputSchema = z.object({
  roomType: z.string().describe('The type of room the user wants design ideas for. e.g., "living room", "kitchen"'),
});
export type GenerateDesignIdeasInput = z.infer<typeof GenerateDesignIdeasInputSchema>;

const GenerateDesignIdeasOutputSchema = z.object({
  title: z.string().describe('A creative title for the design concept.'),
  description: z.string().describe('A detailed description of the design concept, including style, color palette, and key features.'),
  imageUrl: z.string().url().describe('A URL to an image representing the generated design concept.'),
});
export type GenerateDesignIdeasOutput = z.infer<typeof GenerateDesignIdeasOutputSchema>;


const designIdeaPrompt = ai.definePrompt({
    name: 'designIdeaPrompt',
    input: { schema: GenerateDesignIdeasInputSchema },
    output: { schema: GenerateDesignIdeasOutputSchema.pick({title: true, description: true}) },
    prompt: `You are a world-renowned interior designer with a flair for creative and evocative concepts.
    
    A user wants a design idea for the following: {{{roomType}}}

    Generate a creative title and a detailed, inspiring description for a design concept based on the user's request.
    Focus on the mood, style, color palette, materials, and key furniture pieces.
    `,
});

const designImagePrompt = ai.definePrompt({
    name: 'designImagePrompt',
    input: { schema: z.object({ designDescription: z.string() }) },
    prompt: `Generate a photorealistic, high-quality image of an interior design based on the following description.
    The image should look like it was taken by an architectural photographer. It should be well-lit, stylish, and inspiring.

    Description: {{{designDescription}}}
    `,
});


const generateDesignIdeasFlow = ai.defineFlow(
  {
    name: 'generateDesignIdeasFlow',
    inputSchema: GenerateDesignIdeasInputSchema,
    outputSchema: GenerateDesignIdeasOutputSchema,
  },
  async (input) => {
    
    const { output: textOutput } = await designIdeaPrompt(input);
    if (!textOutput) {
        throw new Error("Failed to generate design ideas text.");
    }
    
    const { media } = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: `A photorealistic image of an interior design concept: ${textOutput.title}. ${textOutput.description}`,
        config: {
            responseModalities: ['IMAGE'],
        },
    });

    if (!media.url) {
         throw new Error("Failed to generate design image.");
    }

    return {
      ...textOutput,
      imageUrl: media.url,
    };
  }
);


export async function generateDesignIdeas(input: GenerateDesignIdeasInput): Promise<GenerateDesignIdeasOutput> {
  return generateDesignIdeasFlow(input);
}

'use server';

/**
 * @fileOverview Optimizes portfolio content using generative AI for better presentation and SEO.
 *
 * - optimizePortfolioContent - A function that takes project descriptions and tech stacks, then suggests improvements.
 * - OptimizePortfolioContentInput - The input type for the optimizePortfolioContent function.
 * - OptimizePortfolioContentOutput - The return type for the optimizePortfolioContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizePortfolioContentInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The current description of the project.'),
  techStack: z.string().describe('The tech stack used in the project.'),
});
export type OptimizePortfolioContentInput = z.infer<
  typeof OptimizePortfolioContentInputSchema
>;

const OptimizePortfolioContentOutputSchema = z.object({
  optimizedDescription: z
    .string()
    .describe('The improved description of the project.'),
  optimizedTechStack: z
    .string()
    .describe('The improved tech stack for the project.'),
  seoKeywords: z
    .string()
    .describe('Suggested SEO keywords for the project.'),
});
export type OptimizePortfolioContentOutput = z.infer<
  typeof OptimizePortfolioContentOutputSchema
>;

export async function optimizePortfolioContent(
  input: OptimizePortfolioContentInput
): Promise<OptimizePortfolioContentOutput> {
  return optimizePortfolioContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizePortfolioContentPrompt',
  input: {schema: OptimizePortfolioContentInputSchema},
  output: {schema: OptimizePortfolioContentOutputSchema},
  prompt: `You are an expert in portfolio optimization and SEO.

  You will analyze the project description and tech stack, then suggest improvements for better presentation and SEO.
  Also include suggested SEO keywords

  Project Description: {{{projectDescription}}}
  Tech Stack: {{{techStack}}}`,
});

const optimizePortfolioContentFlow = ai.defineFlow(
  {
    name: 'optimizePortfolioContentFlow',
    inputSchema: OptimizePortfolioContentInputSchema,
    outputSchema: OptimizePortfolioContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

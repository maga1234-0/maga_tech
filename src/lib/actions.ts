'use server';

import { optimizePortfolioContent, OptimizePortfolioContentInput } from "@/ai/flows/optimize-portfolio-content";

export async function getOptimizedContent(input: OptimizePortfolioContentInput) {
  try {
    const result = await optimizePortfolioContent(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error optimizing portfolio content:", error);
    return { success: false, error: "Failed to optimize content. Please try again." };
  }
}

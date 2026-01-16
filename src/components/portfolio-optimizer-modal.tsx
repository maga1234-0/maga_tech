"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getOptimizedContent } from "@/lib/actions";
import type { OptimizePortfolioContentOutput } from "@/ai/flows/optimize-portfolio-content";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";

type PortfolioOptimizerModalProps = {
  projectDescription: string;
  techStack: string;
};

export function PortfolioOptimizerModal({
  projectDescription,
  techStack,
}: PortfolioOptimizerModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [optimizedData, setOptimizedData] =
    useState<OptimizePortfolioContentOutput | null>(null);
  const { toast } = useToast();

  const handleOptimize = async () => {
    setIsLoading(true);
    setOptimizedData(null);
    const result = await getOptimizedContent({ projectDescription, techStack });
    setIsLoading(false);

    if (result.success && result.data) {
      setOptimizedData(result.data);
    } else {
      toast({
        variant: "destructive",
        title: "Optimization Failed",
        description: result.error,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Sparkles className="mr-2 h-4 w-4" /> Optimize
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline">
            <Wand2 className="text-primary"/>
            Portfolio Content Optimizer
          </DialogTitle>
          <DialogDescription>
            Use AI to improve your project's description, tech stack
            presentation, and SEO keywords.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-6">
            <div className="grid gap-4 py-4">
            {!optimizedData && !isLoading && (
                <div className="text-center p-8 border-dashed border-2 rounded-lg flex flex-col items-center justify-center min-h-[200px]">
                    <p className="text-muted-foreground">Click the button below to get AI-powered suggestions.</p>
                </div>
            )}
            {isLoading && (
                <div className="flex items-center justify-center p-8 min-h-[200px]">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-4">Optimizing content...</p>
                </div>
            )}
            {optimizedData && (
                <div className="space-y-6">
                <div>
                    <h4 className="font-semibold mb-2">Optimized Description</h4>
                    <Textarea
                    readOnly
                    value={optimizedData.optimizedDescription}
                    className="h-32 bg-secondary/50"
                    />
                </div>
                <Separator />
                <div>
                    <h4 className="font-semibold mb-2">Optimized Tech Stack</h4>
                    <p className="text-sm p-3 rounded-md bg-secondary/50">{optimizedData.optimizedTechStack}</p>
                </div>
                <Separator />
                <div>
                    <h4 className="font-semibold mb-2">SEO Keywords</h4>
                    <p className="text-sm p-3 rounded-md bg-secondary/50">{optimizedData.seoKeywords}</p>
                </div>
                </div>
            )}
            </div>
        </ScrollArea>
        <DialogFooter>
          <Button
            onClick={handleOptimize}
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Working...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Optimize with AI
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

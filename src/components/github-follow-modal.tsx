"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type GitHubFollowModalProps = {
  children: React.ReactNode;
  githubUrl: string;
};

export function GitHubFollowModal({ children, githubUrl }: GitHubFollowModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { toast } = useToast();

  const handleFollow = () => {
    if (!inputValue.trim()) {
      toast({
        variant: "destructive",
        title: "Input Required",
        description: "Please enter your email or GitHub account.",
      });
      return;
    }
    // In a real application, you might send this data to a server.
    // For this portfolio, we'll just log it and proceed.
    console.log(`User provided: ${inputValue}`);
    
    toast({
        title: 'Thank you for following!',
        description: "Redirecting you to GitHub...",
    });

    // Close the modal and open the GitHub link in a new tab.
    setIsOpen(false);
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline">
            <Github />
            Follow on GitHub
          </DialogTitle>
          <DialogDescription>
            Your follow is greatly appreciated! Please enter your email or GitHub account below before continuing.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email-github">Email or GitHub Account</Label>
                <Input
                    id="email-github"
                    placeholder="your-email@example.com"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleFollow();
                        }
                    }}
                />
            </div>
        </div>
        <Button onClick={handleFollow} type="submit" className="w-full">
          <Github className="mr-2 h-4 w-4" /> Follow & Visit Repository
        </Button>
      </DialogContent>
    </Dialog>
  );
}

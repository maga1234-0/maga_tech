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
import { useFirestore, addDocumentNonBlocking } from "@/firebase";
import { collection } from "firebase/firestore";

type GitHubFollowModalProps = {
  children: React.ReactNode;
  githubUrl: string;
};

export function GitHubFollowModal({ children, githubUrl }: GitHubFollowModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { toast } = useToast();
  const firestore = useFirestore();

  const handleFollow = () => {
    if (!inputValue.trim()) {
      toast({
        variant: "destructive",
        title: "Input Required",
        description: "Please enter your GitHub username.",
      });
      return;
    }
    
    // Save the follower to Firestore
    const followersCollection = collection(firestore, 'github_followers');
    addDocumentNonBlocking(followersCollection, {
      identifier: inputValue,
      createdAt: new Date(),
    });
    
    toast({
        title: 'Thank you!',
        description: "Redirecting you to GitHub to complete the follow...",
    });

    // Close the modal and open the GitHub link in a new tab.
    setIsOpen(false);
    setInputValue('');
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
            Your follow is greatly appreciated! Enter your GitHub username below to continue to the repository.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="github-username">GitHub Username</Label>
                <Input
                    id="github-username"
                    placeholder="your-username"
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
          <Github className="mr-2 h-4 w-4" /> Continue to GitHub
        </Button>
      </DialogContent>
    </Dialog>
  );
}

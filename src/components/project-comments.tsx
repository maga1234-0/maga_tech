'use client';

import { useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, addDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import type { Comment } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

type ProjectCommentsProps = {
  projectId: string;
};

const ProjectComments = ({ projectId }: ProjectCommentsProps) => {
  const firestore = useFirestore();
  const { toast } = useToast();
  
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const commentsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'projects', projectId, 'comments'), orderBy('createdAt', 'desc'));
  }, [firestore, projectId]);

  const { data: comments, isLoading } = useCollection<Comment>(commentsQuery);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) {
      toast({
        variant: 'destructive',
        title: 'Missing information',
        description: 'Please provide your name and a comment.',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    const commentsCollection = collection(firestore, 'projects', projectId, 'comments');
    
    addDocumentNonBlocking(commentsCollection, {
      projectId,
      author,
      text,
      createdAt: new Date(),
    });

    toast({
      title: 'Comment posted!',
      description: 'Thank you for your feedback.',
    });
    
    setAuthor('');
    setText('');
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Leave a Comment</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="author">Your Name</Label>
            <Input 
              id="author" 
              placeholder="John Doe" 
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment">Comment</Label>
            <Textarea 
              id="comment" 
              placeholder="Great project!" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Comment'}
          </Button>
        </form>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Comments</h3>
        {isLoading && <p>Loading comments...</p>}
        {!isLoading && comments?.length === 0 && <p className="text-muted-foreground">No comments yet. Be the first!</p>}
        <div className="space-y-4 max-h-64 overflow-y-auto pr-4">
          {comments?.map((comment) => (
            <Card key={comment.id} className="bg-card/50">
              <CardContent className="p-4 flex gap-3">
                <Avatar>
                    <AvatarFallback>{comment.author.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">{comment.author}</p>
                        <p className="text-xs text-muted-foreground">
                        {comment.createdAt ? formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true }) : ''}
                        </p>
                    </div>
                    <p className="text-foreground/80 mt-1">{comment.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComments;

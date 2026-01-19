'use client';

import { useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, errorEmitter, FirestorePermissionError } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import type { Comment } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

type ProjectCommentsProps = {
  projectId: string;
};

export function ProjectComments({ projectId }: ProjectCommentsProps) {
  const firestore = useFirestore();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const commentsQuery = useMemoFirebase(() => {
    if (!firestore || !projectId) return null;
    return query(
        collection(firestore, `project_comments/${projectId}/comments`),
        orderBy('createdAt', 'desc')
    );
  }, [firestore, projectId]);

  const { data: comments, isLoading } = useCollection<Comment>(commentsQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast({
        variant: 'destructive',
        title: 'Oh no!',
        description: 'Please fill out both name and message.',
      });
      return;
    }
    setIsSubmitting(true);
    
    const commentsCollection = collection(firestore, `project_comments/${projectId}/comments`);
    const newComment = {
        name,
        message,
        createdAt: serverTimestamp(),
    };

    addDoc(commentsCollection, newComment)
    .then(() => {
        setName('');
        setMessage('');
        toast({
            title: 'Success!',
            description: 'Your comment has been posted.',
        });
    })
    .catch((error) => {
        console.error('Error adding comment: ', error);
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Could not post your comment. Please try again.',
        });
        const contextualError = new FirestorePermissionError({
            path: `project_comments/${projectId}/comments`,
            operation: 'create',
            requestResourceData: { name, message },
        });
        errorEmitter.emit('permission-error', contextualError);
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              required
            />
            <Textarea
              placeholder="Write a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
              required
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Submitting...' : 'Submit Comment'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Comments</h3>
        {isLoading && <p>Loading comments...</p>}
        {!isLoading && comments?.length === 0 && <p>No comments yet. Be the first!</p>}
        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {comments?.map((comment) => (
            <div key={comment.id} className="flex gap-3">
                <Avatar>
                    <AvatarFallback>{comment.name ? comment.name.charAt(0).toUpperCase() : 'A'}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">{comment.name}</p>
                        <p className="text-xs text-muted-foreground">
                        {comment.createdAt ? formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true }) : ''}
                        </p>
                    </div>
                    <p className="text-sm text-foreground/80">{comment.message}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

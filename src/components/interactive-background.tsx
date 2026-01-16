"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleMouseMove = (event: MouseEvent) => {
            if (window.innerWidth < 768) {
                setMousePosition({ x: -1000, y: -1000 });
                return;
            }
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
            <div
                className="absolute inset-0 transition-all duration-300 ease-out"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.1), transparent 80%)`,
                }}
            />
            
            <div className="relative w-full h-full">
                <motion.div
                    className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50"
                    animate={{
                        x: [0, 100, 0, -100, 0],
                        y: [0, 50, 100, 50, 0],
                        scale: [1, 1.1, 1, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50"
                    animate={{
                        x: [0, -100, 0, 100, 0],
                        y: [0, -50, -100, -50, 0],
                        scale: [1, 0.9, 1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: 5,
                    }}
                />
                 <motion.div
                    className="absolute bottom-[30%] left-[25%] w-64 h-64 bg-secondary/10 rounded-full filter blur-2xl opacity-40"
                    animate={{
                        x: [0, 50, 0, -50, 0],
                        y: [0, 100, 50, 100, 0],
                        scale: [1, 1.2, 0.8, 1.1, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: 10,
                    }}
                />
            </div>
        </div>
    );
};

export default InteractiveBackground;

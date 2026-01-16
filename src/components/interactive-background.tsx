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
            <div className="absolute inset-0">
                <motion.div
                    className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 120,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        background:
                            'conic-gradient(from 0deg, transparent 0%, hsl(var(--primary)/0.1) 10%, transparent 20%)',
                    }}
                />
                <motion.div
                    className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 90,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        background:
                            'conic-gradient(from 180deg, transparent 0%, hsl(var(--accent)/0.1) 15%, transparent 25%)',
                    }}
                />
            </div>
        </div>
    );
};

export default InteractiveBackground;

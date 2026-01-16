"use client";

import React, { useState, useEffect, useMemo } from 'react';
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

    const shapes = useMemo(() => {
        if (!isClient) return [];
        return Array.from({ length: 15 }).map((_, i) => {
            const size = Math.random() * 60 + 20;
            const duration = Math.random() * 20 + 25;
            const delay = Math.random() * 10;
        
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: size,
                  height: size,
                  top: `${Math.random() * 100}vh`,
                  left: `${Math.random() * 100}vw`,
                  backgroundColor: i % 3 === 0 ? "hsl(var(--primary) / 0.05)" : i % 3 === 1 ? "hsl(var(--accent) / 0.05)" : "hsl(var(--secondary) / 0.05)",
                  boxShadow: `0 0 ${size}px ${i % 2 === 0 ? 'hsl(var(--primary) / 0.1)' : 'hsl(var(--accent) / 0.1)'}`,
                }}
                animate={{
                  x: [0, Math.random() * 200 - 100, 0],
                  y: [0, Math.random() * 200 - 100, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, Math.random() * 180 - 90, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay,
                }}
              />
            );
          });
    }, [isClient]);

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
      {shapes}
    </div>
  );
};

export default InteractiveBackground;

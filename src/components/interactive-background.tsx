'use client';

import React, { useRef, useEffect, useState } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
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

    useEffect(() => {
        if (!isClient) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const particles: { x: number; y: number; baseX: number; baseY: number; density: number }[] = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                baseX: Math.random() * canvas.width,
                baseY: Math.random() * canvas.height,
                density: Math.random() * 30 + 1,
            });
        }

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
            const [h, s, l] = primaryColor.trim().split(' ').map(parseFloat);
            const lineColor = `hsla(${h}, ${s}%, ${l}%, 0.15)`;
            const particleColor = `hsla(${h}, ${s}%, ${l}%, 0.4)`;

            for (let i = 0; i < particleCount; i++) {
                let distanceToMouse = Math.sqrt(
                    (particles[i].x - mousePosition.x) ** 2 + (particles[i].y - mousePosition.y) ** 2
                );
                if (distanceToMouse < 200) {
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mousePosition.x, mousePosition.y);
                    ctx.stroke();
                }

                for (let j = i; j < particleCount; j++) {
                    let distance = Math.sqrt(
                        (particles[i].x - particles[j].x) ** 2 + (particles[i].y - particles[j].y) ** 2
                    );
                    if (distance < 120) {
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                particles[i].x += (Math.random() - 0.5) * 0.5;
                particles[i].y += (Math.random() - 0.5) * 0.5;

                if (particles[i].x > canvas.width || particles[i].x < 0) {
                    particles[i].x = Math.random() * canvas.width;
                }
                if (particles[i].y > canvas.height || particles[i].y < 0) {
                    particles[i].y = Math.random() * canvas.height;
                }

                ctx.fillStyle = particleColor;
                ctx.beginPath();
                ctx.arc(particles[i].x, particles[i].y, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isClient, mousePosition]);

    if (!isClient) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default InteractiveBackground;

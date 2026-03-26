"use client";

import React from "react";
import { motion } from "motion/react";

interface HeroAnnotationProps {
    children: React.ReactNode;
    text: string;
    className?: string;
}

export const HeroAnnotation: React.FC<HeroAnnotationProps> = ({
    children,
    text,
    className,
}) => {
    return (
        <div className={`relative inline-block ${className ?? ""}`}>
            {children}

            {/* Matte/Texture Effect Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply opacity-5">
                <div className="w-full h-full bg-noise-pattern" />
            </div>

            {/* Caption Annotation */}
            <div className="absolute -top-3 -left-2 md:-left-4 z-20 pointer-events-none select-none">
                <motion.div
                    initial={{ opacity: 0, x: -4, y: 4 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start"
                >
                    {/* Caption Label - Editorial Style */}
                    <span
                        className="mb-1 text-xs md:text-sm leading-none font-bold
                                   uppercase tracking-[0.2em] whitespace-nowrap
                                   text-foreground/60"
                        style={{ fontFamily: "var(--font-inconsolata), monospace" }}
                    >
                        {text}
                    </span>

                    {/* Subtle Connector */}
                    <svg
                        width="40"
                        height="20"
                        viewBox="0 0 40 20"
                        fill="none"
                        className="ml-1 text-foreground/40"
                    >
                        <motion.path
                            d="M2 2 L 2 12 L 20 18"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            strokeLinecap="square"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 1.0, duration: 1.0 }}
                        />
                    </svg>
                </motion.div>
            </div>

            {/* Subtle paper-like shadow/edge */}
            <div className="absolute inset-0 border border-foreground/5 shadow-[2px_2px_10px_rgba(0,0,0,0.03)] -z-10 rounded-[1px]" />
        </div>
    );
};

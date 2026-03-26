"use client";

import React from "react";
import { motion } from "motion/react";

interface HeroScannerProps {
    children: React.ReactNode;
}

export const HeroScanner: React.FC<HeroScannerProps> = ({ children }) => {
    return (
        <div className="relative inline-block group">
            {/* The main image/content */}
            {children}

            {/* Scanning HUD Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none font-[family-name:var(--font-inconsolata)] overflow-visible">

                {/* Main Bounding Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute top-[20%] left-[8%] w-[40%] h-[55%] border-[1px] border-foreground/50"
                >
                    {/* Corner accents */}
                    <div className="absolute -top-[1.5px] -left-[1.5px] w-1.5 h-1.5 bg-foreground" />
                    <div className="absolute -top-[1.5px] -right-[1.5px] w-1.5 h-1.5 bg-foreground" />
                    <div className="absolute -bottom-[1.5px] -left-[1.5px] w-1.5 h-1.5 bg-foreground" />
                    <div className="absolute -bottom-[1.5px] -right-[1.5px] w-1.5 h-1.5 bg-foreground" />

                    {/* Label Connector Line */}
                    <div className="absolute top-1/2 left-full w-8 h-[1px] bg-foreground/30" />

                    {/* Labels Container - Stacked boxes */}
                    <div className="absolute top-[calc(50%-18px)] left-[calc(100%+32px)] flex flex-col gap-1 items-start">
                        <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-foreground text-background text-[10px] md:text-[11px] font-bold px-2 py-0.5 whitespace-nowrap uppercase tracking-tight"
                        >
                            Role: Full-Stack Developer
                        </motion.div>
                        <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-foreground text-background text-[10px] md:text-[11px] font-bold px-2 py-0.5 whitespace-nowrap uppercase tracking-tight"
                        >
                            Status: Available for hire
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

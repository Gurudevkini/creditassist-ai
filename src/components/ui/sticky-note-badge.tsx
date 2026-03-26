import React from "react";
import { cn } from "@/lib/utils";

type StickyNoteColor = "yellow" | "pink" | "blue" | "green" | "purple";

interface StickyNoteBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    color?: StickyNoteColor;
    rotate?: number;
}

const colorStyles: Record<StickyNoteColor, string> = {
    yellow: "bg-[#ffeb3b] text-black",
    pink: "bg-[#ffd1dc] text-black",
    blue: "bg-[#00b0ff] text-black",
    green: "bg-[#00e676] text-black",
    purple: "bg-[#aa00ff] text-white",
};

export function StickyNoteBadge({
    children,
    color = "yellow",
    rotate = -2,
    className,
    style,
    ...props
}: StickyNoteBadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center justify-center px-4 py-2",
                "font-bold uppercase text-sm tracking-widest leading-none",
                "shadow-[4px_4px_0_rgba(0,0,0,1)]",
                "transition-all duration-300 ease-in-out",
                "cursor-default select-none",
                colorStyles[color],
                className
            )}
            style={{
                transform: `rotate(${rotate}deg)`,
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
}

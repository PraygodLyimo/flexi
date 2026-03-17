"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

export const InteractiveHoverButton = React.forwardRef<
    HTMLButtonElement,
    InteractiveHoverButtonProps
>(({ text = "Button", className, children, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "group relative w-auto min-w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-bold uppercase tracking-[3px]",
                className,
            )}
            style={{ fontFamily: 'var(--font-montserrat)' }}
            {...props}
        >
            <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                {children}
            </span>
            <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                <span>{children}</span>
                <ArrowRight />
            </div>
            <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#947846]"></div>
        </button>
    );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

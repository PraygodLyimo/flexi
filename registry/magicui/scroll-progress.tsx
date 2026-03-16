"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
    className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 50,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className={cn(
                "fixed inset-x-0 top-0 z-50 h-1.5 origin-left bg-gradient-to-r from-[#947846] via-[#c89b5e] to-[#f7e6cc] shadow-[0_0_15px_rgba(148,120,70,0.8)] rounded-r-full",
                className,
            )}
            style={{
                scaleX,
            }}
        />
    );
}

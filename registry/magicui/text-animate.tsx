"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";
import { ElementType, useMemo } from "react";

type AnimationType =
    | "blurIn"
    | "blurInUp"
    | "blurInDown"
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scaleUp"
    | "scaleDown";

type AnimationSegment = "text" | "word" | "character" | "line";

interface TextAnimateProps extends MotionProps {
    as?: ElementType;
    children: string;
    className?: string;
    segmentClassName?: string;
    animation?: AnimationType;
    by?: AnimationSegment;
    startDelay?: number;
    delay?: number;
    duration?: number;
}

const animations: Record<AnimationType, Variants> = {
    blurIn: {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    },
    blurInUp: {
        hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
        visible: { filter: "blur(0px)", y: 0, opacity: 1 },
    },
    blurInDown: {
        hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
        visible: { filter: "blur(0px)", y: 0, opacity: 1 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideUp: {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    },
    slideDown: {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    },
    slideLeft: {
        hidden: { x: 20, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },
    slideRight: {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },
    scaleUp: {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    },
    scaleDown: {
        hidden: { scale: 1.5, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    },
};

export function TextAnimate({
    as: Component = "p",
    children,
    className,
    segmentClassName,
    animation = "blurIn",
    by = "word",
    startDelay = 0,
    delay = 0,
    duration = 0.3,
    ...props
}: TextAnimateProps) {
    const MotionComponent = useMemo(() => {
        if (typeof Component === "string" && (motion as any)[Component]) {
            return (motion as any)[Component];
        }
        return motion(Component);
    }, [Component]);

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: delay,
                delayChildren: startDelay,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: animations[animation].hidden,
        visible: {
            ...animations[animation].visible,
            transition: {
                duration,
                ease: "easeOut",
            },
        },
    };

    if (by === "character") {
        const characters = children.split("");
        return (
            <MotionComponent
                className={cn("flex", className)}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                {...props}
            >
                {characters.map((char, i) => (
                    <motion.span
                        key={i}
                        variants={itemVariants}
                        className={cn("inline-block whitespace-pre", segmentClassName)}
                    >
                        {char}
                    </motion.span>
                ))}
            </MotionComponent>
        );
    }

    if (by === "word") {
        const words = children.split(" ");
        return (
            <MotionComponent
                className={cn("flex flex-wrap gap-x-[0.25em]", className)}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                {...props}
            >
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        variants={itemVariants}
                        className={cn("inline-block whitespace-pre", segmentClassName)}
                    >
                        {word}
                    </motion.span>
                ))}
            </MotionComponent>
        );
    }

    if (by === "line") {
        const lines = children.split("\n");
        return (
            <MotionComponent
                className={cn("flex flex-col", className)}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                {...props}
            >
                {lines.map((line, i) => (
                    <motion.span
                        key={i}
                        variants={itemVariants}
                        className={cn("inline-block whitespace-pre", segmentClassName)}
                    >
                        {line}
                    </motion.span>
                ))}
            </MotionComponent>
        );
    }

    return (
        <MotionComponent
            initial="hidden"
            animate="visible"
            transition={{
                duration,
                delay: startDelay,
                ease: "easeOut",
            }}
            variants={animations[animation]}
            className={cn(className)}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}

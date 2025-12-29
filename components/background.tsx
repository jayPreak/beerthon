"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Background() {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 opacity-20"
            >
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-600 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-yellow-900/20 rounded-full blur-[150px]" />
            </motion.div>

            {/* Neon Grid Layer */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, #eab308 1px, transparent 1px), linear-gradient(to bottom, #eab308 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
}

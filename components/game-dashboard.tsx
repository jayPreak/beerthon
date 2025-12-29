"use client";

import { motion } from "framer-motion";

interface GameDashboardProps {
    players: string[];
}

export function GameDashboard({ players }: GameDashboardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md"
        >
            <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase">
                    Game <span className="text-yellow-400">Live</span>
                </h1>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl flex flex-col items-center justify-center min-h-[300px]">
                <h2 className="text-3xl font-black text-white mb-4">Hello World</h2>
                <p className="text-gray-400">
                    Welcome to the arena, {players.join(", ")}!
                </p>
                <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl w-full">
                    <p className="text-yellow-500 font-bold text-center">
                        GAME INITIALIZED
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

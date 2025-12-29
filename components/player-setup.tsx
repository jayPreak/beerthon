"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronRight, Users, Plus, Trash2, User } from "lucide-react";

interface PlayerSetupProps {
    onNext: (players: string[]) => void;
}

export function PlayerSetup({ onNext }: PlayerSetupProps) {
    const [playerNames, setPlayerNames] = useState<string[]>([""]);

    const playerCount = playerNames.length.toString();

    const handleCountChange = (value: string) => {
        if (value === "more") return;
        const count = parseInt(value);
        if (isNaN(count)) return;

        setPlayerNames(prev => {
            if (count > prev.length) {
                return [...prev, ...Array(count - prev.length).fill("")];
            } else {
                return prev.slice(0, count);
            }
        });
    };

    const addPlayer = () => {
        setPlayerNames(prev => [...prev, ""]);
    };

    const removePlayer = (index: number) => {
        if (playerNames.length <= 1) return;
        setPlayerNames(prev => prev.filter((_, i) => i !== index));
    };

    const updatePlayerName = (index: number, name: string) => {
        setPlayerNames(prev => {
            const newList = [...prev];
            newList[index] = name;
            return newList;
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md"
        >
            <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-white">
                    SETUP <span className="text-yellow-400">GAME</span>
                </h1>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl space-y-8">
                <div className="space-y-4 text-left">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <Users size={16} className="text-yellow-500" />
                        Number of Players
                    </label>
                    <div className="relative group">
                        <select
                            value={playerCount > "8" ? "more" : playerCount}
                            onChange={(e) => handleCountChange(e.target.value)}
                            className="w-full bg-black/50 border-2 border-gray-800 text-white h-14 px-6 rounded-2xl appearance-none focus:outline-none focus:border-yellow-500 transition-all cursor-pointer text-lg font-medium group-hover:border-gray-700"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num} className="bg-gray-900 text-white">
                                    {num} {num === 1 ? "Player" : "Players"}
                                </option>
                            ))}
                            {parseInt(playerCount) > 8 && (
                                <option value={playerCount} className="bg-gray-900 text-white">
                                    {playerCount} Players
                                </option>
                            )}
                            <option value="more" className="bg-gray-900 text-white">Custom...</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500 group-hover:scale-110 transition-transform">
                            <ChevronRight size={24} className="rotate-90" />
                        </div>
                    </div>
                </div>

                <div className="space-y-4 text-left">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <User size={16} className="text-yellow-500" />
                            Player Names
                        </label>
                        <button
                            onClick={addPlayer}
                            className="text-yellow-500 hover:text-yellow-400 p-1 transition-colors group/add"
                        >
                            <Plus size={24} className="group-hover/add:scale-110 transition-transform" />
                        </button>
                    </div>

                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        <AnimatePresence initial={false}>
                            {playerNames.map((name, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="flex gap-2"
                                >
                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            placeholder={`Player ${index + 1} Name`}
                                            value={name}
                                            onChange={(e) => updatePlayerName(index, e.target.value)}
                                            className="w-full bg-black/30 border border-gray-800 text-white h-12 px-4 rounded-xl focus:outline-none focus:border-yellow-500/50 transition-all"
                                        />
                                    </div>
                                    {playerNames.length > 1 && (
                                        <button
                                            onClick={() => removePlayer(index)}
                                            className="bg-red-500/10 hover:bg-red-500/20 text-red-500 p-3 rounded-xl transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <Button
                    size="lg"
                    className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-black h-16 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.2)] group transition-all"
                    disabled={playerNames.some(name => name.trim() === "")}
                    onClick={() => onNext(playerNames)}
                >
                    NEXT
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-sm text-gray-500"
            >
                Must be 21+ to enter the Beerthon arena.
            </motion.p>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(234, 179, 8, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(234, 179, 8, 0.4);
                }
            `}</style>
        </motion.div>
    );
}

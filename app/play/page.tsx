"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PlayerSetup } from "@/components/player-setup";
import { GameDashboard } from "@/components/game-dashboard";

type GameStep = "setup" | "active";

export default function PlayPage() {
    const [step, setStep] = useState<GameStep>("setup");
    const [players, setPlayers] = useState<string[]>([]);

    const handleStartGame = (playerNames: string[]) => {
        setPlayers(playerNames);
        setStep("active");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] p-4 md:p-6 text-center">
            <AnimatePresence mode="wait">
                {step === "setup" ? (
                    <PlayerSetup key="setup" onNext={handleStartGame} />
                ) : (
                    <GameDashboard key="game" players={players} />
                )}
            </AnimatePresence>
        </div>
    );
}

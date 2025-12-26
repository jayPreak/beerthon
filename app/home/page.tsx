"use client";

import { NextPage } from "next";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Beer, Trophy, Users, Calendar, ArrowRight } from "lucide-react";
import { useRef } from "react";

const Home: NextPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    return (
        <div ref={containerRef} className="relative min-h-[300vh] bg-black text-white selection:bg-yellow-500/30 font-sans overflow-x-hidden">
            {/* Animated Neon Background */}
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

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center p-6 text-center z-10">
                <motion.div
                    style={{ opacity: textOpacity, scale: textScale }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-7xl md:text-9xl font-black tracking-tighter mb-4"
                        initial={{ filter: "drop-shadow(0 0 0px #fff)" }}
                        animate={{
                            filter: [
                                "drop-shadow(0 0 8px #eab308ff)",
                                "drop-shadow(0 0 15px #eab308ff)",
                                "drop-shadow(0 0 8px #eab308ff)"
                            ]
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        BEER<span className="text-yellow-400">THON</span>
                    </motion.h1>
                    <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 font-light">
                        42 beers in a row. Competitive. Drinking.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg" className="bg-yellow-600 hover:bg-yellow-600 text-white font-bold h-12 px-8 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                            REGISTER NOW
                        </Button>
                        <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-500/10 h-12 px-8 rounded-full">
                            LEADERBOARDS
                        </Button>
                    </div>
                </motion.div>

                {/* Floating Beer Icon */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute bottom-20 text-yellow-500/50"
                >
                    <Beer size={48} />
                </motion.div>
            </section>

            {/* Features/Stats Section */}
            <section className="relative py-24 px-6 z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-md">
                            <CardHeader>
                                <Users className="text-yellow-400 mb-2" size={32} />
                                <CardTitle className="text-white text-2xl">5,000+ Alcoholics</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400">
                                Join a community of legendary drinkers from across the globe.
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-md border-t-yellow-500/50">
                            <CardHeader>
                                <Trophy className="text-yellow-400 mb-2" size={32} />
                                <CardTitle className="text-white text-2xl">The Golden Mug</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400">
                                Finish to claim the prestigious Golden Mug and eternal glory.
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-md">
                            <CardHeader>
                                <Calendar className="text-yellow-400 mb-2" size={32} />
                                <CardTitle className="text-white text-2xl">December 31st</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400">
                                Mark your calendars for the most chaotic Wednesday of your lives.
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Rules Section */}
            <section className="relative py-24 px-6 z-10 bg-gradient-to-b from-transparent to-gray-900/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6">THE SACRED RULES</h2>
                    <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full shadow-[0_0_10px_#eab308]" />
                </div>

                <div className="max-w-3xl mx-auto space-y-12">
                    {[
                        { title: "The 42-Beer Gauntlet", description: "You must consume exactly 42 beers. No pacing, just pure commitment." },
                        { title: "No Spilling", description: "Every drop of liquid gold must be consumed. Spilling results in a disqualification." },
                        { title: "Peak Comfort", description: "Loose clothing and comfortable seating are recommended. No running allowed." },
                        { title: "The Final Sip", description: "The final beer must be finished to claim eternal glory. Honor the foam." }
                    ].map((rule, i) => (
                        <motion.div
                            key={i}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex items-start gap-6 border-l-2 border-yellow-500/30 pl-8"
                        >
                            <span className="text-5xl font-black text-yellow-500/20">0{i + 1}</span>
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-yellow-400">{rule.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{rule.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative h-screen flex items-center justify-center p-6 z-10">
                <motion.div
                    whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
                    className="text-center p-12 rounded-[40px] bg-yellow-500/5 border border-yellow-500/20 backdrop-blur-xl max-w-2xl"
                >
                    <h2 className="text-5xl font-black mb-6 italic tracking-tighter">READY TO GET BLITZED?</h2>
                    <p className="text-gray-400 mb-10 text-xl">The training starts now. Hydrate today, Beerthon tomorrow.</p>
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-black h-14 px-12 text-lg rounded-full group">
                        JOIN THE WAITLIST
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-12 border-t border-gray-800 text-center text-gray-500">
                <p>© 2025 BEERTHON HEAVYWEIGHT ORG. PLEASE DRINK RESPONSIBLY.</p>
            </footer>
        </div>
    );
};

export default Home;
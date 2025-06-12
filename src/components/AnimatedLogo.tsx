"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

interface AnimatedLogoProps {
    onPositionChange?: (isOverTitle: boolean) => void;
}

export default function AnimatedLogo({ onPositionChange }: AnimatedLogoProps) {
    return (
        <div className="relative w-32 h-32 flex items-center justify-center mx-auto">
            <motion.div
                className="absolute w-full h-full flex items-center justify-center"
                initial={{ x: "100vw", y: 0 }}
                animate={{ x: 0, y: 0 }}
                transition={{
                    duration: 2.5,
                    ease: [0.16, 1, 0.3, 1],
                    y: {
                        duration: 0.8,
                        repeat: 2,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }
                }}
                onUpdate={(latest: { x: number }) => {
                    // Trigger when shark is in the middle of its path
                    console.log('Shark position:', latest.x);
                    // Adjust the range to be more lenient
                    if (latest.x < 100 && latest.x > -100) {
                        console.log('Shark is over title');
                        onPositionChange?.(true);
                    } else {
                        console.log('Shark is not over title');
                        onPositionChange?.(false);
                    }
                }}
            >
                <motion.div
                    className="flex items-center justify-center"
                    animate={{
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <Image
                        src="/logo.png"
                        alt="WebShark Logo"
                        width={128}
                        height={128}
                        className="object-contain brightness-0 invert w-full h-full"
                        priority
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
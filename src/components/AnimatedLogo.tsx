"use client";

import Image from 'next/image';
import { useTheme } from "next-themes";

interface AnimatedLogoProps {
    onPositionChange?: (isOverTitle: boolean) => void;
}

export default function AnimatedLogo({ onPositionChange }: AnimatedLogoProps) {
    const { theme } = useTheme();

    return (
        <div className="relative w-40 h-40 flex items-center justify-center mx-auto">
            <div className="absolute w-full h-full flex items-center justify-center animate-slide-in">
                <div className="flex items-center justify-center animate-pulse-subtle">
                    <Image
                        src="/logo.png"
                        alt="Keradon Logo"
                        width={160}
                        height={160}
                        className="object-contain transition-colors duration-200 dark:invert"
                        style={{ width: 'auto', height: 'auto' }}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
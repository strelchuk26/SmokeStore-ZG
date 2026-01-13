"use client";

import { useTelegram } from "@/lib/TelegramProvider";

export type HapticType = "light" | "medium" | "heavy" | "rigid" | "soft";

export const useHapticFeedback = () => {
    const { webApp } = useTelegram();

    const HapticImpact = (type: HapticType = "medium") => {
        webApp?.HapticFeedback?.impactOccurred(type);
    };

    return { HapticImpact };
}
import { useState } from "react";

export const useOnceAnimation = (key: string) => {
    const [shouldAnimate] = useState(() => {
        if (typeof window === "undefined") return false;

        const played = sessionStorage.getItem(key);
        if (played) return false;

        sessionStorage.setItem(key, "true");
        return true;
    });

    return shouldAnimate;
};
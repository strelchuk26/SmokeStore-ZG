"use client";

import { useHapticFeedback } from "@/hooks/useHapticFeedback";
import { House, ShoppingCart, ClipboardList, UserRound } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    const { HapticImpact } = useHapticFeedback();

    return (
        <>
            <div
                className="flex p-4 w-full fixed bottom-0 justify-around items-center bg-white/10 border-gray-200
                backdrop-blur-md border-opacity-20 z-50"
            >
                <Link href="/" onClick={() => {
                    HapticImpact("soft");
                }}>
                    <div className="flex flex-col items-center">
                        <House />
                        <p className="text-[12px]">Home</p>
                    </div>
                </Link>
                <Link href="/cart" onClick={() => {
                    HapticImpact("soft");
                }}>
                    <div className="flex flex-col items-center">
                        <ShoppingCart />
                        <p className="text-[12px]">My Cart</p>
                    </div>
                </Link>
                <div className="flex flex-col items-center">
                    <ClipboardList />
                    <p className="text-[12px]">Orders</p>
                </div>
                <div className="flex flex-col items-center">
                    <UserRound />
                    <p className="text-[12px]">Profile</p>
                </div>
            </div>
        </>
    );
};

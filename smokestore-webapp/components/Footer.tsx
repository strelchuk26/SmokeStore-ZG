"use client";

import { House, ShoppingCart, ClipboardList, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { FooterItem } from "./FooterItem";

export const Footer = () => {    
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <footer>
            <div
                className="flex p-4 w-full fixed bottom-0 justify-around items-center bg-white/10 border-gray-200
                backdrop-blur-md border-opacity-20 z-50"
            >
                <FooterItem href="/" icon={House} label="Home" active={isActive("/")} />
                <FooterItem href="/cart" icon={ShoppingCart} label="Cart" active={isActive("/cart")} />
                <FooterItem href="/orders" icon={ClipboardList} label="Orders" active={isActive("/orders")} />
                <FooterItem href="/profile" icon={UserRound} label="Profile" active={isActive("/profile")} />
            </div>
        </footer>
    );
};

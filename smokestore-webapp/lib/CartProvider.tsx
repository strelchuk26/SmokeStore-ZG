"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    subtitle: string;
    image: string;
    quantity: number;
};

interface CartContextType {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    increase: (id: string) => void;
    decrease: (id: string) => void;
    remove: (id: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "smokestore_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>(() => {
        if (typeof window === "undefined") return [];
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addToCart = (product: Omit<CartItem, "quantity">) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === product.id);

            if (existing) {
                return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const increase = (id: string) => {
        setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)));
    };

    const decrease = (id: string) => {
        setItems((prev) =>
            prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i)).filter((i) => i.quantity > 0)
        );
    };

    const remove = (id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    };

    return (
        <CartContext.Provider value={{ items, addToCart, increase, decrease, remove }}>{children}</CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
}

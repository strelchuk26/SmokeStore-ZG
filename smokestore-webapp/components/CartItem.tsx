"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";
import { useCart } from "@/lib/CartProvider";
import { useState } from "react";
import { useTelegram } from "@/lib/TelegramProvider";
import { toast } from "sonner";

export interface CartItemProps {
    id: string;
    name: string;
    price: number;
    subtitle: string;
    image: string;
    quantity: number;
}

export const CartItem = ({ id, name, price, subtitle, image, quantity = 1 }: CartItemProps) => {
    const { increase, decrease, remove } = useCart();
    const [localQuantity, setLocalQuantity] = useState(quantity);
    const { HapticImpact } = useHapticFeedback();
    const { webApp } = useTelegram();

    const handlePlusClick = () => {
        increase(id);
        setLocalQuantity(localQuantity + 1);
        HapticImpact("soft");
    };

    const handleMinusClick = () => {
        if (quantity > 1) {
            decrease(id);
            setLocalQuantity(localQuantity - 1);
            HapticImpact("light");
        } else {
            webApp?.showConfirm("Are you sure you want to remove this item from cart?", (isConfirmed) => {
                if (isConfirmed) {
                    remove(id);
                    setLocalQuantity(0);
                    HapticImpact("rigid");
                    toast.info(`${name} removed from cart`);
                }
            });
        }
    };

    return (
        <div className="flex gap-4 mx-4 my-2 bg-white rounded-lg p-4 shadow-md">
            <div>
                <Image width={96} height={96} src={image} alt={name} className="rounded-lg" />
            </div>
            <div className="flex flex-col flex-1">
                <h2 className="font-medium">{name}</h2>
                <p className="text-gray-400 text-sm">{subtitle}</p>
                <div className="flex mt-auto justify-between items-center">
                    <span className="font-medium text-sm">{`${localQuantity} x ${price} zł`}</span>
                    <span className="font-bold">{`${localQuantity * price} zł`}</span>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center">
                <button
                    onClick={() => handlePlusClick()}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white active:scale-95 duration-150"
                >
                    <Plus size={16} />
                </button>
                <div className="flex justify-center">
                    <span>{localQuantity}</span>
                </div>
                <button
                    onClick={() => handleMinusClick()}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white active:scale-95 duration-150"
                >
                    <Minus size={16} />
                </button>
            </div>
        </div>
    );
};

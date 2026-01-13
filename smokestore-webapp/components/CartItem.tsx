"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";

interface CartItemProps {
    id: string;
    name: string;
    price: number;
    subtitle: string;
    image: string;
    quantity: number;
}

export const CartItem = ({ id, name, price, subtitle, image, quantity = 1 }: CartItemProps) => {
    const [quantityState, setQuantityState] = useState(quantity);
    const { HapticImpact } = useHapticFeedback();

    const handlePlusClick = () => {
        setQuantityState(quantityState + 1);
        HapticImpact("soft");
    };

    const handleMinusClick = () => {
        if (quantityState > 1) {
            setQuantityState(quantityState - 1);
            HapticImpact("light");
        } else {
            HapticImpact("rigid");
            alert("Minimum quantity is 1");
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
                <p className="font-bold mt-auto">{price} zł</p>
            </div>
            <div className="flex flex-col justify-between items-center">
                <button
                    onClick={() => handlePlusClick()}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white active:scale-95"
                >
                    <Plus size={16} />
                </button>
                <div className="flex justify-center">
                    <span>{quantityState}</span>
                </div>
                <button
                    onClick={() => handleMinusClick()}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white active:scale-95"
                >
                    <Minus size={16} />
                </button>
            </div>
        </div>
    );
};

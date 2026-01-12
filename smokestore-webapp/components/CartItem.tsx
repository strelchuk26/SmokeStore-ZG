"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Minus } from "lucide-react";

interface CartItemProps {
    id: string;
    name: string;
    price: number;
    subtitle: string;
    image: string;
}

export const CartItem = ({ id, name, price, subtitle, image }: CartItemProps) => {
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
            <div className="flex flex-col justify-center">
                <Button className="" variant="default">
                    <Minus size={16} />
                </Button>
            </div>
        </div>
    );
};

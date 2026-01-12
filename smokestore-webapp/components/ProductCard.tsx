"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import Link from "next/link";

type ProductCardProps = {
    id: string;
    name: string;
    price: number;
    subtitle: string;
    image: string;
    onAddToCart: (id: string) => void;
};

export function ProductCard({ id, name, price, subtitle, image, onAddToCart }: ProductCardProps) {
    return (
        <Link href={`/product/${id}`} className="block w-[160px] rounded-2xl bg-white p-3 shadow-xl">
            <div className="relative h-28 w-full">
                <Image src={image} alt={name} fill className="object-contain" />
            </div>

            <div className="mt-2">
                <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
                <p className="text-xs text-gray-400">{subtitle}</p>
            </div>

            <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-sm">{price} zł</span>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onAddToCart(id);
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white active:scale-95"
                >
                    <Plus size={16} />
                </button>
            </div>
        </Link>
    );
}

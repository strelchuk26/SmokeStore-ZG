"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "@/app/products";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";
import { useCart } from "@/lib/CartProvider";
import { CartItemProps } from "@/components/CartItem";

export default function ProductPage() {
    const { id } = useParams();
    const { HapticImpact } = useHapticFeedback();
    const product = products.find((p) => p.id === id);
    const { addToCart } = useCart();

    return (
        <div className="flex flex-col px-4 py-4 bg-white">
            <Image className="self-center" width={200} height={200} src="/vozol.png" alt={`${id}`} />
            <h1 className="text-2xl font-bold mt-4">{product?.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product?.subtitle}</p>
            <p className="text-xl font-semibold mt-4">{product?.price} zł</p>
            <button onClick={() => {
                HapticImpact();
                addToCart(product as CartItemProps);
            }} className="rounded-full bg-purple-600 mt-2 px-4 py-2.5 font-semibold text-white transition-colors active:scale-95 duration-250">
                Add to Cart
            </button>
        </div>
    );
}

"use client";

import { useCart } from "@/lib/CartProvider";

export default function CheckoutClient({ orderId }: { orderId: string }) {
    const { items, totalSum } = useCart();

    return (
        <div className="flex flex-col">
            {items.map(item => (
                <div key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price * item.quantity} zł</span>
                </div>
            ))}

            <div className="font-bold flex-end">
                Total: {totalSum} zł
            </div>

            <button className="w-full rounded-xl bg-purple-600 text-white py-3">
                Pay
            </button>
        </div>
    );
}

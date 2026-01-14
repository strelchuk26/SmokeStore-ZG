"use client";

import { CartItem } from "@/components/CartItem";
import { useCart } from "@/lib/CartProvider";

export default function Home() {
    const { items } = useCart();

    return (
        <div className="wrapper flex flex-col mx-auto max-w-[430px] mb-18">
            <div className="flex justify-between items-center mx-4">
                <h1 className="font-bold">My Cart</h1>
                {/* <span className="font-bold">{items.reduce((sum, item) => sum + item.price * item.quantity, 0)} zł</span> */}
            </div>
            {items.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    subtitle={item.subtitle}
                    image={item.image}
                    quantity={item.quantity}
                />
            ))}
        </div>
    );
}

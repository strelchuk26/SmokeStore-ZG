"use client";

import { CartItem } from "@/components/CartItem";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";
import { useCart } from "@/lib/CartProvider";
import { useRouter } from "next/navigation";

export default function Home() {
    const { items, totalSum } = useCart();
    const { HapticImpact } = useHapticFeedback();
    const router = useRouter();

    const handleCheckoutClick = () => {
        HapticImpact("soft");
        if (!items.length) {
            alert("Cart is empty");
            return;
        }

        router.push(`/checkout/${Date.now()}`);
    };

    return (
        <div className="wrapper flex flex-col mx-auto max-w-[430px] pb-32">
            <div className="flex justify-between items-center mx-4">
                <h1 className="font-bold">My Cart</h1>
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
            <div className="fixed bottom-20 right-4 z-50">
                <div className="flex items-center bg-white/20 backdrop-blur rounded-full pl-4 shadow-lg">
                    <div>
                        <p className="text-10px mr-2">
                            Total: <span className="font-bold">{totalSum}</span> zł
                        </p>
                    </div>
                    <button
                        onClick={handleCheckoutClick}
                        className="rounded-full bg-purple-600 px-4 py-2.5 font-semibold text-white shadow-xl active:scale-95 duration-150"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

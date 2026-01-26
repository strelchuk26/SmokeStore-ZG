"use client";

import { CartItem } from "@/components/CartItem";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";
import { useCart } from "@/lib/CartProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SwipeToDeleteItem } from "./SwipeToDeleteItem";

export default function Home() {
    const { items, totalSum, remove } = useCart();
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
            {items.length === 0 ? (
                <div className="h-[60vh] flex justify-center items-center">
                    <p className="text-2xl font-thin">Cart is empty :(</p>
                </div>
            ) : (
                <AnimatePresence>
                    {items.map((item) => (
                        <SwipeToDeleteItem
                            key={item.id}
                            id={item.id}
                            onDelete={() => remove(item.id)}
                        >
                            <CartItem {...item} />
                        </SwipeToDeleteItem>
                    ))}
                </AnimatePresence>
            )}
            <motion.div
                layout
                transition={{ layout: { duration: 0.25, ease: "easeOut" } }}
                className="fixed bottom-20 right-4 z-50"
            >
                <div className="flex items-center bg-white/20 backdrop-blur rounded-full pl-4 shadow-lg">
                    <motion.div layout transition={{ layout: { duration: 0.25, ease: "easeOut" } }}>
                        <motion.p layout className="text-10px mr-2 my-2.5">
                            Total: <span className="font-bold">{totalSum}</span> zł
                        </motion.p>
                    </motion.div>
                    {items.length == 0 ? (
                        <button
                            onClick={handleCheckoutClick}
                            className="rounded-full bg-purple-900 px-4 py-2.5 font-semibold text-gray-200 transition-colors active:scale-95 duration-250"
                        >
                            Checkout
                        </button>
                    ) : (
                        <button
                            onClick={handleCheckoutClick}
                            className="rounded-full bg-purple-600 px-4 py-2.5 font-semibold text-white transition-colors active:scale-95 duration-250"
                        >
                            Checkout
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

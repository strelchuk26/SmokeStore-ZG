"use client";

import { ProductCard } from "@/components/ProductCard";
import { products } from "./products";
import { useTelegram } from "@/lib/TelegramProvider";
import { useEffect } from "react";
import { useCart } from "@/lib/CartProvider";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useOnceAnimation } from "@/hooks/useOnceAnimation";

// import { Button } from "@/components/ui/button";
// import { TestTubeDiagonal } from "lucide-react";

export default function Home() {
    const { webApp } = useTelegram();
    const { addToCart } = useCart();
    const animate = useOnceAnimation("home_products");
    const greetingText = `Hello, ${webApp?.initDataUnsafe?.user?.first_name || "User"}!`;

    useEffect(() => {
        if (webApp) {
            webApp.MainButton.hide();
            webApp.SecondaryButton.hide();
            webApp.disableVerticalSwipes();
            webApp.expand();
        }
    }, [webApp]);

    return (
        <div className="wrapper flex flex-col mx-auto max-w-[430px]">
            <div className="mx-4">
                {greetingText.split("").map((letter, index) => (
                    <motion.span
                        className="text-2xl font-thin"
                        key={index}
                        initial={animate ? { opacity: 0 } : { opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>

            {/* <div className="m-4">
                <h2 className="font-bold">Categories</h2>
                <div className="flex mt-2 gap-4 scroll-smooth overflow-auto">
                    <Button variant="outline" className="h-16 w-25 flex-col gap-0 items-center justify-center">
                        <TestTubeDiagonal />
                        Liquids
                    </Button>
                    <Button variant="outline" className="h-16 w-25 flex-col gap-0 items-center justify-center">
                        <TestTubeDiagonal />
                        Disposables
                    </Button>
                    <Button variant="outline" className="h-16 w-25 flex-col gap-0 items-center justify-center">
                        <TestTubeDiagonal />
                        Pods
                    </Button>
                    <Button variant="outline" className="h-16 w-25 flex-col gap-0 items-center justify-center">
                        <TestTubeDiagonal />
                        Other
                    </Button>
                </div>
            </div> */}
            <p className="ml-4 font-bold">Popular choice</p>
            <div className="grid grid-cols-2 gap-4 p-4 justify-items-center mb-16">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={animate ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.1, ease: "easeIn" } }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            subtitle={product.subtitle}
                            image={product.image}
                            onAddToCart={() => {
                                addToCart({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    subtitle: product.subtitle,
                                    image: product.image,
                                });
                                toast.success(`${product.name} added to cart`);
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

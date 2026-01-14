"use client";

import { ProductCard } from "@/components/ProductCard";
import { products } from "./products";
import { useTelegram } from "@/lib/TelegramProvider";
import { useEffect } from "react";
import { useCart } from "@/lib/CartProvider";
// import { Button } from "@/components/ui/button";
// import { TestTubeDiagonal } from "lucide-react";

export default function Home() {
    const { webApp } = useTelegram();
    const { addToCart } = useCart();

    useEffect(() => {
        if (webApp) {
            webApp.MainButton.hide();
            webApp.SecondaryButton.hide();
            webApp.expand();
        }
    }, [webApp]);

    return (
        <div className="wrapper flex flex-col mx-auto max-w-[430px]">
            <div>
                <h1 className="mx-4 text-2xl font-bold">
                    Hello, {webApp?.initDataUnsafe?.user?.first_name || "User"}!
                </h1>
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
                {products.map((product) => (
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
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

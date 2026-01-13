"use client";

import { CartItem } from "@/components/CartItem";
import { products } from "../products";
import { useState } from "react";

export default function Home() {
    const [cartSum, setCartSum] = useState(100);

    return (
        <div className="wrapper flex flex-col mx-auto max-w-[430px] mb-18">
            <div className="flex justify-between items-center mx-4">
                <h1 className="font-bold">Cart</h1>
                <span className="font-bold">{cartSum} zł</span>
            </div>
            {products.map((product) => (
                <CartItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    subtitle={product.subtitle}
                    image={product.image}
                    count={1}
                />
            ))}
        </div>
    );
}

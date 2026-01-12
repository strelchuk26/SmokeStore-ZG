import React from "react";

interface CartItemProps {
    id: string;
    name: string;
    price: number;
    subtitle: string;
    image: string;
}

export const CartItem = ({ id, name, price, subtitle, image}: CartItemProps) => {
    return <div>CartItem</div>;
};

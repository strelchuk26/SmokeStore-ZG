import CheckoutClient from "./CheckoutClient";

interface CheckoutPageProps {
    params: {
        id: string;
    };
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
    const { id } = params;

    return (
        <div className="max-w-[430px] mx-auto p-4">
            <h1 className="text-xl font-bold mb-2">Checkout</h1>
            <CheckoutClient orderId={id} />
        </div>
    );
}

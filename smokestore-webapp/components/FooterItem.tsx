import { useHapticFeedback } from "@/hooks/useHapticFeedback";
import { useCart } from "@/lib/CartProvider";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface FooterItemProps {
    href: string;
    icon: LucideIcon;
    label: string;
    active?: boolean;
}

export const FooterItem = ({ href, icon: Icon, label, active }: FooterItemProps) => {
    const { HapticImpact } = useHapticFeedback();
    const { items } = useCart();

    const colorClass = active ? "text-gray-500" : "text-black";

    return href == "/cart" ? (
        <Link href={href} onClick={() => HapticImpact(active ? "rigid" : "soft")}>
            <div className="flex flex-col justify-center items-center active:scale-95 duration-150">
                <div className="flex gap-0.5 items-center">
                    <Icon className={colorClass} />
                    <span className={`font-semimedium text-sm ${colorClass}`}>{items.length}</span>
                </div>
                <p className={`text-[12px] ${colorClass}`}>{label}</p>
            </div>
        </Link>
    ) : (
        <Link href={href} onClick={() => HapticImpact(active ? "rigid" : "soft")}>
            <div className="flex flex-col items-center active:scale-95 duration-150">
                <Icon className={colorClass} />
                <p className={`text-[12px] ${colorClass}`}>{label}</p>
            </div>
        </Link>
    );
};

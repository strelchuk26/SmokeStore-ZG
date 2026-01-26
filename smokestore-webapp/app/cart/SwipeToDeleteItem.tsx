"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";
import { useCart } from "@/lib/CartProvider";
import { Trash2 } from "lucide-react";

export const SwipeToDeleteItem = ({
    id,
    children,
    onDelete,
}: {
    id: string;
    children: React.ReactNode;
    onDelete: () => void;
}) => {
    const x = useMotionValue(0);
    const { HapticImpact } = useHapticFeedback();
    const { remove } = useCart();
    const scaleTrash = useTransform(x, [-100, 0], [1.5, 0.7]);

    return (
        <motion.div
            layout
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden"
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 flex items-center justify-end pr-6">
                <motion.div style={{ scale: scaleTrash }}>
                    <Trash2 className="text-black" onClick={() => remove(id)} />
                </motion.div>
            </div>

            <motion.div
                drag="x"
                dragConstraints={{ left: -50, right: 0 }}
                dragElastic={0.5}
                style={{ x }}
                onDragEnd={(_, info) => {
                    const shouldDelete = info.velocity.x < -650;

                    if (shouldDelete) {
                        HapticImpact("rigid");
                        onDelete();
                    } else {
                        x.set(0);
                    }
                }}
                className="relative z-10 bg-transparent"
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

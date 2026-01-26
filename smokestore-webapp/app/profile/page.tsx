"use client";

import { useTelegram } from "@/lib/TelegramProvider";
import Image from "next/image";

export default function Home() {
    const { webApp } = useTelegram();
    const user = webApp?.initDataUnsafe?.user;

    return (
        <div>
            <div className="flex items-center gap-4 p-4">
                <Image
                    className="rounded-full"
                    src={user?.photo_url || "/default-avatar.png"}
                    width={96}
                    height={96}
                    alt="user_avatar"
                />
                <div>
                    <h2 className="text-xl">{`${user?.first_name} ${user?.last_name}`}</h2>
                    <p>@{user?.username}</p>
                </div>
            </div>
        </div>
    );
}

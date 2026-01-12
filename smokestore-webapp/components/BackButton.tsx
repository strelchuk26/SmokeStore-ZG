"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="rounded-lg px-4 py-2 text-sm font-medium bg-purple-600 text-white"
    >
      ← Back
    </button>
  );
}

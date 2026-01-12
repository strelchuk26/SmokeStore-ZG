"use client";

import { BackButton } from "@/components/BackButton";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Product page</h1>
      <p className="text-sm text-muted-foreground">ID: {id}</p>
      <BackButton />
    </div>
  );
}
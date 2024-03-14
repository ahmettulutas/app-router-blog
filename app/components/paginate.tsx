"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Paginate = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("page");
  const handleChange = (current: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(current));
    router.push(`${pathname}?${params}`);
  };
  return (
    <div className="m-auto my-4 flex gap-2">
      <button
        className="px-2 border border-gray-400 rounded-full"
        onClick={() => {
          Number(current) > 1
            ? handleChange(Number(current) - 1)
            : handleChange(Number(current));
        }}
      >
        -
      </button>
      <button
        className="px-2 border border-gray-400 rounded-full"
        onClick={() => handleChange(Number(current) + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Paginate;

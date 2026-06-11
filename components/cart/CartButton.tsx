"use client";

import { useCart } from "@/lib/cart/CartContext";

export function CartButton() {
  const { count, openCart } = useCart();
  return (
    <button
      onClick={openCart}
      aria-label={`Coș (${count})`}
      className="relative text-steel transition-colors hover:text-platinum"
    >
      <BagIcon className="h-[19px] w-[19px]" />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-platinum px-1 text-[0.6rem] font-medium text-ink">
          {count}
        </span>
      )}
    </button>
  );
}

function BagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
      <path d="M9 8a3 3 0 0 1 6 0" strokeLinecap="round" />
    </svg>
  );
}

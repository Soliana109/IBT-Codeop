"use client";

import Link from "next/link";
import { useState } from "react";
import { FavButton } from "@/components/ProductCard";
import { useStore } from "@/components/Store";

export default function AddToBag({ product }) {
  const { add } = useStore();
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);
  const out = product.stock === 0;

  function onAdd() {
    add(product, qty);
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  }

  return (
    <div className="buy">
      <div className="qty" aria-label="Quantity">
        <button onClick={() => setQty((n) => Math.max(1, n - 1))} aria-label="Decrease quantity">
          &minus;
        </button>
        <span>{qty}</span>
        <button onClick={() => setQty((n) => n + 1)} aria-label="Increase quantity">
          +
        </button>
      </div>
      <button className="btn" onClick={onAdd} disabled={out} aria-live="polite">
        {out ? "Sold out" : done ? "Added to bag" : "Add to bag"}
      </button>
      <span className="fav-wrap">
        <FavButton id={product.id} label={product.title} />
      </span>
      {done && (
        <Link className="view-bag" href="/cart">
          View bag &rarr;
        </Link>
      )}
    </div>
  );
}

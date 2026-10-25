"use client";

import Link from "next/link";
import { useState } from "react";
import Img from "@/components/Img";
import { useStore } from "@/components/Store";
import { FREE_DELIVERY, fmt } from "@/lib/api";

export default function CartPage() {
  const { list, total, setQty, clear, ready } = useStore();
  const [placed, setPlaced] = useState(false);
  const left = Math.max(0, FREE_DELIVERY - total);
  const pct = Math.min(100, Math.round((total / FREE_DELIVERY) * 100));

  return (
    <div className="wrap block">
      <div className="head">
        <div>
          <h1 className="h-page">Your bag</h1>
        </div>
      </div>

      {placed && (
        <div className="state ok" role="status">
          Thank you! This is a demo store, so no order was placed and nothing was charged.
        </div>
      )}

      {!placed && ready && list.length === 0 && (
        <div className="state">
          Your bag is empty. <Link href="/#shop">Find something you love</Link>.
        </div>
      )}

      {list.length > 0 && (
        <div className="cart">
          <ul className="lines">
            {list.map((i) => (
              <li className="line" key={i.id}>
                <Link className="line-img tile" href={`/product/${i.id}`}>
                  <Img src={i.thumb} alt="" />
                </Link>
                <div className="line-info">
                  <Link href={`/product/${i.id}`}>
                    <b>{i.title}</b>
                  </Link>
                  <span className="muted">{fmt(i.price)} each</span>
                  <div className="qty">
                    <button onClick={() => setQty(i.id, i.qty - 1)} aria-label={`Decrease ${i.title}`}>
                      &minus;
                    </button>
                    <span>{i.qty}</span>
                    <button onClick={() => setQty(i.id, i.qty + 1)} aria-label={`Increase ${i.title}`}>
                      +
                    </button>
                  </div>
                </div>
                <span className="price">{fmt(i.qty * i.price)}</span>
              </li>
            ))}
          </ul>

          <aside className="summary">
            <h2 className="h-sub">Order summary</h2>
            <div className="ship">
              <div className="bar-track" aria-hidden="true">
                <span style={{ width: `${pct}%` }} />
              </div>
              <p className="muted">
                {left === 0 ? "You've unlocked free delivery." : `Add ${fmt(left)} more for free delivery.`}
              </p>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{fmt(total)}</span>
            </div>
            <button
              className="btn"
              onClick={() => {
                clear();
                setPlaced(true);
              }}
            >
              Checkout (demo)
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}

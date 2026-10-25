"use client";

import Link from "next/link";
import { useState } from "react";
import Img from "@/components/Img";
import { useStore } from "@/components/Store";
import { fmt } from "@/lib/api";

export function Stars({ rating, count }) {
  return (
    <span className="stars" aria-label={`Rated ${rating.toFixed(1)} out of 5`}>
      <span aria-hidden="true">&#9733;</span> {rating.toFixed(1)}
      {count != null && <span className="muted"> ({count})</span>}
    </span>
  );
}

export function badgeFor(p) {
  if (p.onSale && p.discount >= 10) return `Save ${p.discount}%`;
  if (p.stock !== null && p.stock <= 5) return "Low stock";
  if (p.rating >= 4.8) return "Top rated";
  return "";
}

export function FavButton({ id, label }) {
  const { isFav, toggleFav, ready } = useStore();
  const on = ready && isFav(id);
  return (
    <button className={`fav${on ? " on" : ""}`} onClick={() => toggleFav(id)} aria-pressed={on} aria-label={`${on ? "Remove from" : "Save"} ${label} ${on ? "favourites" : "to favourites"}`}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.8 5 6.2 5c2 0 3.6 1.1 4.4 2.6h.8C12.2 6.1 13.8 5 15.8 5c3.4 0 5.3 3.4 3.8 6.8C19.5 16.4 12 21 12 21z" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function ProductCard({ p, eager = false }) {
  const { add } = useStore();
  const [added, setAdded] = useState(false);
  const badge = badgeFor(p);

  function onAdd() {
    add(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article className="card">
      <div className="card-top">
        <Link className="tile" href={`/product/${p.id}`} aria-label={`View ${p.title}`}>
          <Img src={p.thumb} alt={p.title} eager={eager} />
        </Link>
        {badge && <span className="badge">{badge}</span>}
        <FavButton id={p.id} label={p.title} />
      </div>
      <div className="card-body">
        <span className="tag">{p.cat}</span>
        <h3>
          <Link href={`/product/${p.id}`}>{p.title}</Link>
        </h3>
        <Stars rating={p.rating} count={p.reviews.length || null} />
        <div className="card-foot">
          <span className="price">
            {fmt(p.sale)}
            {p.onSale && <s>{fmt(p.list)}</s>}
          </span>
          <button className="add" onClick={onAdd} aria-live="polite">
            {added ? "Added" : "Add to bag"}
          </button>
        </div>
      </div>
    </article>
  );
}

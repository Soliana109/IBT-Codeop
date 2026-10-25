"use client";

import Link from "next/link";
import { useStore } from "@/components/Store";

export default function Header() {
  const { count, favs, ready } = useStore();
  const c = ready ? count : 0;
  const f = ready ? favs.length : 0;

  return (
    <header className="bar">
      <div className="wrap bar-row">
        <Link className="brand" href="/" aria-label="Soli's Mart home">
          <b>Soli&apos;s Mart</b>
          <small>Rooted in good food</small>
        </Link>
        <nav aria-label="Main">
          <Link href="/">Home</Link>
          <Link href="/#shop">Shop all</Link>
          <Link href="/#story">Our story</Link>
          <Link href="/#newsletter">Journal</Link>
        </nav>
        <div className="actions">
          <Link className="icon-btn" href="/?favorites=1#shop" aria-label={`Favourites, ${f} saved`}>
            Saved <span className="count">{f}</span>
          </Link>
          <Link className="icon-btn" href="/cart" aria-label={`Bag, ${c} items`}>
            Bag <span className="count">{c}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

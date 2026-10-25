"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useStore } from "@/components/Store";

const SORTS = [
  { key: "featured", label: "Featured" },
  { key: "low", label: "Price: low to high" },
  { key: "high", label: "Price: high to low" },
  { key: "rating", label: "Top rated" },
];

export default function Shop({ products, tabs }) {
  const params = useSearchParams();
  const favOnly = params.get("favorites") === "1";
  const { favs, ready } = useStore();
  const [tab, setTab] = useState("All");
  const [sort, setSort] = useState("featured");

  const list = useMemo(() => {
    let out = products.filter((p) => (tab === "All" || p.cat === tab) && (!favOnly || favs.includes(p.id)));
    if (sort === "low") out = [...out].sort((a, b) => a.sale - b.sale);
    if (sort === "high") out = [...out].sort((a, b) => b.sale - a.sale);
    if (sort === "rating") out = [...out].sort((a, b) => b.rating - a.rating);
    return out;
  }, [products, tab, sort, favOnly, favs]);

  return (
    <>
      <div className="shop-tools">
        <div className="tabs" role="group" aria-label="Categories">
          {["All", ...tabs].map((t) => (
            <button key={t} className="tab" aria-pressed={t === tab} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        <label className="sort" htmlFor="sort">
          Sort by
          <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            {SORTS.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="count-line" aria-live="polite">
        {favOnly ? "Showing your saved finds. " : ""}
        Showing {list.length} thoughtfully chosen {list.length === 1 ? "find" : "finds"}.
        {favOnly && (
          <>
            {" "}
            <Link href="/#shop">Show everything</Link>
          </>
        )}
      </p>

      {list.length ? (
        <div className="grid">
          {list.map((p, i) => (
            <ProductCard key={p.id} p={p} eager={i < 4} />
          ))}
        </div>
      ) : (
        <div className="state">
          {favOnly && ready
            ? "You haven't saved anything yet. Tap the heart on a product to keep it here."
            : "Nothing matches that filter."}
        </div>
      )}
    </>
  );
}

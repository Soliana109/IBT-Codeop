"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const StoreContext = createContext(null);
const CART_KEY = "solis-mart-bag";
const FAV_KEY = "solis-mart-favs";

function load(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return v == null ? fallback : v;
  } catch (e) {
    return fallback;
  }
}

export function StoreProvider({ children }) {
  const [items, setItems] = useState({});
  const [favs, setFavs] = useState([]);
  const [ready, setReady] = useState(false);

  // Read saved data after mount so server and client markup match.
  useEffect(() => {
    setItems(load(CART_KEY, {}));
    setFavs(load(FAV_KEY, []));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
      localStorage.setItem(FAV_KEY, JSON.stringify(favs));
    } catch (e) {}
  }, [items, favs, ready]);

  const value = useMemo(() => {
    const list = Object.values(items);
    return {
      ready,
      list,
      count: list.reduce((n, i) => n + i.qty, 0),
      total: list.reduce((n, i) => n + i.qty * i.price, 0),
      favs,
      isFav: (id) => favs.includes(id),
      toggleFav(id) {
        setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
      },
      add(p, qty = 1) {
        setItems((prev) => {
          const cur = prev[p.id];
          return { ...prev, [p.id]: { id: p.id, title: p.title, thumb: p.thumb, price: p.sale, qty: (cur ? cur.qty : 0) + qty } };
        });
      },
      setQty(id, qty) {
        setItems((prev) => {
          const next = { ...prev };
          if (qty <= 0) delete next[id];
          else next[id] = { ...next[id], qty };
          return next;
        });
      },
      clear() {
        setItems({});
      },
    };
  }, [items, favs, ready]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

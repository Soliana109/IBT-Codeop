// DummyJSON public shop API (no key). Docs: https://dummyjson.com/docs/products
const BASE = "https://dummyjson.com";
const DAY = 60 * 60 * 24;

// Shop tabs, mapped to DummyJSON category slugs.
export const CATEGORIES = [
  { slug: "groceries", label: "Pantry" },
  { slug: "kitchen-accessories", label: "Kitchen" },
  { slug: "home-decoration", label: "Home" },
];

// DummyJSON prices are in US dollars. Birr prices are a sample conversion; change RATE to suit.
export const RATE = 150;
export const FREE_DELIVERY = 2500;

export function toBirr(usd) {
  return Math.max(5, Math.round(((Number(usd) || 0) * RATE) / 5) * 5);
}
export function fmt(n) {
  return `${Number(n).toLocaleString("en-US")} ETB`;
}

async function getJSON(path) {
  const res = await fetch(`${BASE}${path}`, { next: { revalidate: DAY } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`DummyJSON responded ${res.status} for ${path}`);
  return res.json();
}

// Turn a raw API product into the shape the UI uses. Every field has a safe fallback.
export function normalize(p, fallbackSlug = "") {
  const slug = p.category || fallbackSlug;
  const cat = (CATEGORIES.find((c) => c.slug === slug) || {}).label || "Market";
  const discount = Number(p.discountPercentage) || 0;
  const list = toBirr(p.price);
  const sale = Math.min(list, toBirr((Number(p.price) || 0) * (1 - discount / 100)));
  const images = Array.isArray(p.images) && p.images.length ? p.images : p.thumbnail ? [p.thumbnail] : [];
  return {
    id: String(p.id),
    title: p.title || "Untitled",
    desc: p.description || "",
    slug,
    cat,
    list,
    sale,
    onSale: sale < list,
    discount: Math.round(discount),
    rating: Number(p.rating) || 0,
    reviews: Array.isArray(p.reviews) ? p.reviews : [],
    stock: typeof p.stock === "number" ? p.stock : null,
    status: p.availabilityStatus || "",
    tags: Array.isArray(p.tags) ? p.tags : [],
    brand: p.brand || "",
    thumb: p.thumbnail || images[0] || "",
    images,
    shipping: p.shippingInformation || "",
    returns: p.returnPolicy || "",
    warranty: p.warrantyInformation || "",
  };
}

// Every product in the three shop categories, interleaved so neighbours differ.
export async function getProducts() {
  const settled = await Promise.allSettled(
    CATEGORIES.map((c) =>
      getJSON(`/products/category/${c.slug}?limit=100`).then((d) =>
        ((d && d.products) || []).map((p) => normalize(p, c.slug))
      )
    )
  );
  const lists = settled.filter((s) => s.status === "fulfilled" && s.value.length).map((s) => s.value);
  if (!lists.length) throw new Error("Could not load products from DummyJSON");

  const out = [];
  for (let i = 0; lists.some((l) => i < l.length); i++) {
    for (const l of lists) if (l[i]) out.push(l[i]);
  }
  return out;
}

export async function getProduct(id) {
  if (!/^\d+$/.test(String(id))) return null;
  const data = await getJSON(`/products/${id}`);
  return data && data.id ? normalize(data) : null;
}

export async function getRelated(product, limit = 4) {
  const data = await getJSON(`/products/category/${product.slug}?limit=100`);
  return ((data && data.products) || [])
    .filter((p) => String(p.id) !== product.id)
    .slice(0, limit)
    .map((p) => normalize(p, product.slug));
}

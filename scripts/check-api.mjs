// Run with: npm run check-api
// Calls the same DummyJSON endpoints the site uses and checks the fields and images the UI needs.
const BASE = "https://dummyjson.com";
const SLUGS = ["groceries", "kitchen-accessories", "home-decoration"];
let failed = 0;

function report(ok, msg) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`);
  if (!ok) failed++;
}

async function json(path) {
  const res = await fetch(BASE + path);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

try {
  const cats = await json("/products/category-list");
  for (const s of SLUGS) report(cats.includes(s), `category "${s}" exists`);
} catch (e) {
  report(false, `category list: ${e.message}`);
}

let sample = null;
for (const s of SLUGS) {
  try {
    const d = await json(`/products/category/${s}?limit=100`);
    const n = (d.products || []).length;
    report(n > 0, `/products/category/${s} returned ${n} products`);
    sample = sample || d.products[0];
  } catch (e) {
    report(false, `/products/category/${s}: ${e.message}`);
  }
}

if (sample) {
  const need = ["id", "title", "description", "category", "price", "discountPercentage", "rating", "stock", "thumbnail", "images"];
  const missing = need.filter((k) => sample[k] === undefined);
  report(!missing.length, missing.length ? `sample product is missing: ${missing.join(", ")}` : "sample product has every field the UI uses");
  try {
    const one = await json(`/products/${sample.id}`);
    report(String(one.id) === String(sample.id), `/products/${sample.id} returned the product`);
  } catch (e) {
    report(false, `/products/${sample.id}: ${e.message}`);
  }
  try {
    const res = await fetch(sample.thumbnail, { method: "HEAD" });
    const type = res.headers.get("content-type") || "";
    report(res.ok && type.startsWith("image/"), `thumbnail loads (${res.status} ${type})`);
  } catch (e) {
    report(false, `thumbnail: ${e.message}`);
  }
}

console.log(failed ? `\n${failed} check(s) failed.` : "\nThe API is working.");
process.exit(failed ? 1 : 0);

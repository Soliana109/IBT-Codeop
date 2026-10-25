import Link from "next/link";
import { notFound } from "next/navigation";
import AddToBag from "@/components/AddToBag";
import Gallery from "@/components/Gallery";
import ProductCard, { Stars } from "@/components/ProductCard";
import { fmt, getProduct, getRelated } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const p = await getProduct(params.id);
  return { title: p ? p.title : "Product not found" };
}

export default async function ProductPage({ params }) {
  const p = await getProduct(params.id);
  if (!p) notFound();
  const related = await getRelated(p).catch(() => []);

  const facts = [
    ["Brand", p.brand],
    ["Availability", p.status || (p.stock !== null ? `${p.stock} in stock` : "")],
    ["Delivery", p.shipping],
    ["Returns", p.returns],
    ["Warranty", p.warranty],
  ].filter(([, v]) => v);

  return (
    <div className="wrap">
      <Link className="back" href="/#shop">
        &larr; Back to the collection
      </Link>

      <article className="detail">
        <Gallery images={p.images} title={p.title} />
        <div className="detail-body">
          <span className="eyebrow">{p.cat}</span>
          <h1>{p.title}</h1>
          <Stars rating={p.rating} count={p.reviews.length || null} />
          <p className="price big">
            {fmt(p.sale)}
            {p.onSale && (
              <>
                <s>{fmt(p.list)}</s>
                <span className="save">Save {p.discount}%</span>
              </>
            )}
          </p>
          {p.desc && <p className="lead">{p.desc}</p>}
          <AddToBag product={{ id: p.id, title: p.title, thumb: p.thumb, sale: p.sale, stock: p.stock }} />
          {facts.length > 0 && (
            <dl className="facts">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {p.tags.length > 0 && (
            <p className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </p>
          )}
        </div>
      </article>

      {p.reviews.length > 0 && (
        <section className="block" aria-labelledby="rev-h">
          <h2 id="rev-h">What people say</h2>
          <ul className="reviews">
            {p.reviews.map((r, i) => (
              <li key={i}>
                <Stars rating={Number(r.rating) || 0} />
                <p>{r.comment}</p>
                <span className="muted">{r.reviewerName}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {related.length > 0 && (
        <section className="block" aria-labelledby="rel-h">
          <h2 id="rel-h">You might also like</h2>
          <div className="grid">
            {related.map((r) => (
              <ProductCard key={r.id} p={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

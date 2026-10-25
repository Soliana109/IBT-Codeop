import Link from "next/link";
import { Suspense } from "react";
import Img from "@/components/Img";
import Newsletter from "@/components/Newsletter";
import Shop from "@/components/Shop";
import { CATEGORIES, getProducts } from "@/lib/api";

// Rendered on request (never at build time), so a build never depends on the API being reachable.
// The API responses themselves are cached for 24 hours.
export const dynamic = "force-dynamic";

const FAQ = [
  ["Where do the products come from?", "Product are sourced from every corner of the world."],
  ["How long does delivery take?", "Three to five business days, depending on your location."],
  ["Can I buy something as a gift?", "Ofcourse!"],
  ["How do I get in touch?", "You can contact us using the email provided."],
];

export default async function Home() {
  const products = await getProducts();
  const hero = CATEGORIES.map((c) => products.find((p) => p.slug === c.slug)).filter(Boolean);

  return (
    <>
      <section className="wrap hero">
        <div className="hero-copy">
          <span className="eyebrow">The good life, at home</span>
          <h1>
            Find your kind of <em>delicious.</em>
          </h1>
          <p>Pantry staples, kitchen tools and home finds, picked for people who love to cook, share and linger at the table.</p>
          <div className="hero-cta">
            <Link className="btn" href="/#shop">
              Explore the collection
            </Link>
            <Link className="btn alt" href="/#story">
              Our story
            </Link>
          </div>
          <p className="small-line">Small makers. Big appetite.</p>
        </div>
        <div className="hero-art">
          {hero.map((p, i) => (
            <Link key={p.id} href={`/product/${p.id}`} className={`hero-tile ht${i}`} aria-label={p.title}>
              <Img src={p.thumb} alt={p.title} eager />
              <span>{p.cat}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="values">
        <div className="wrap values-row">
          {[
            ["Thoughtfully chosen", "Every find earns its place on the shelf."],
            ["Made by real people", "Rated and reviewed by the people who use it."],
            ["Carefully delivered", "Packed with care so it arrives just right."],
            ["Always a little special", "Small touches that make a table feel like home."],
          ].map(([t, d]) => (
            <div key={t}>
              <b>{t}</b>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap block" id="shop" aria-labelledby="shop-h">
        <div className="head">
          <div>
            <span className="eyebrow">The good stuff</span>
            <h2 id="shop-h">A collection to fall for</h2>
          </div>
          <Link className="link" href="/#story">
            Get to know us &rarr;
          </Link>
        </div>
        <Suspense fallback={<div className="state">Loading the collection&hellip;</div>}>
          <Shop products={products} tabs={CATEGORIES.map((c) => c.label)} />
        </Suspense>
      </section>

      <section className="banner" aria-label="Coming soon">
        <div className="wrap">
          <span className="eyebrow">More good things, coming soon</span>
          <p>A slower kind of good.</p>
        </div>
      </section>

      <section className="wrap story" id="story">
        <div>
          <span className="eyebrow">Our little corner of the world</span>
          <h2>
            More than things. <em>A feeling.</em>
          </h2>
          <p className="lead">
            Soli&apos;s Mart began with a simple idea: the best meals are the ones that bring people together. We gather the
            tools, the staples and the little extras that make that easier.
          </p>
          <Link className="btn" href="/#shop">
            Find your something
          </Link>
        </div>
        <blockquote>
          &ldquo;Good food is a reason to sit a little longer.&rdquo;
          <cite>A thought we carry with us</cite>
        </blockquote>
      </section>

      <section className="news" id="newsletter">
        <div className="wrap news-in">
          <div>
            <span className="eyebrow">A good note, now and then</span>
            <h2>A little joy in your inbox</h2>
          </div>
          <Newsletter />
        </div>
      </section>

      <section className="wrap block" id="faq" aria-labelledby="faq-h">
        <span className="eyebrow">Good to know</span>
        <h2 id="faq-h">Questions, answered</h2>
        <div className="faq">
          {FAQ.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

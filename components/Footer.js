import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot-grid">
        <div>
          <b className="foot-brand">Soli&apos;s Mart</b>
          <p className="muted">Rooted in good food.</p>
          <p className="muted">
            Product data and pictures come from the{" "}
           
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/#shop">Shop all</Link>
          <Link href="/#shop">Pantry</Link>
          <Link href="/#shop">Kitchen</Link>
          <Link href="/#shop">Home</Link>
        </div>
        <div>
          <h3>We&apos;re here</h3>
          <Link href="/#faq">FAQs</Link>
          <Link href="/#story">Our story</Link>
          <Link href="/#newsletter">Journal</Link>
        </div>
      </div>
      <div className="wrap foot-end">
        <span>&copy; 2026 Soli&apos;s Mart.</span>
      </div>
    </footer>
  );
}

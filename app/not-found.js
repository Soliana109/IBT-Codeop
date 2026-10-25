import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap">
      <div className="state big-state">
        <h1 className="h-page">That shelf is empty.</h1>
        <p>We couldn&apos;t find the page you asked for.</p>
        <Link className="btn" href="/#shop">
          Back to the collection
        </Link>
      </div>
    </div>
  );
}

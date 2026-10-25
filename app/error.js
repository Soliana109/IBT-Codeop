"use client";

export default function Error({ reset }) {
  return (
    <div className="wrap">
      <div className="state big-state">
        <h1 className="h-page">The market is taking a short break.</h1>
        <p>We couldn&apos;t load products from the DummyJSON API. Check your connection and try again.</p>
        <button className="btn" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}

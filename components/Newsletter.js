"use client";

import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    setDone(true);
  }

  return (
    <form className="news-form" onSubmit={onSubmit}>
      <label htmlFor="email" className="sr">
        Email address
      </label>
      <input id="email" className="f" type="email" required placeholder="Your email address" autoComplete="email" />
      <button className="btn" type="submit">
        Count me in
      </button>
      <p className="muted" role="status">
        {done ? "Thanks! This is a demo, so nothing was saved." : "No spam. Just the good stuff."}
      </p>
    </form>
  );
}

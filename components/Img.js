"use client";

import { useState } from "react";

// Plain <img> so the browser loads the picture straight from the API's CDN.
// If it ever fails, a labelled tile shows instead of a broken icon.
export default function Img({ src, alt, eager = false, className = "" }) {
  const [failed, setFailed] = useState(!src);
  if (failed) {
    return (
      <div className={`img-fail ${className}`} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={512}
      height={512}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

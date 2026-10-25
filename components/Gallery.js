"use client";

import { useState } from "react";
import Img from "@/components/Img";

export default function Gallery({ images, title }) {
  const [i, setI] = useState(0);
  const shown = images.slice(0, 5);
  return (
    <div className="gallery">
      <div className="tile big">
        <Img key={shown[i]} src={shown[i]} alt={title} eager />
      </div>
      {shown.length > 1 && (
        <div className="thumbs" role="group" aria-label="More pictures">
          {shown.map((src, n) => (
            <button key={src} className={`thumb${n === i ? " on" : ""}`} onClick={() => setI(n)} aria-label={`Picture ${n + 1}`} aria-pressed={n === i}>
              <Img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

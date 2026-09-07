import React from "react";

export default function CategoryChips({ categories, selectedCategory, onSelect }) {
  const chips = ["All", "Ethiopian", "Western"];

  return (
    <div className="chips">
      {chips.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`chip${selectedCategory === cat ? " chip--active" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

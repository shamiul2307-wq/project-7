

"use client";

const items = [
  "🥔 আলু",
  "🧅 পেঁয়াজ",
  "🍚 চাল",
  "🍅 টমেটো",
  "🌶️ কাঁচা মরিচ",
  "🥬 সবজি",
];

export default function PriceTicker() {
  return (
    <div className="overflow-hidden bg-green-900 py-3 text-white">
      <div className="ticker-track flex w-max gap-8">
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap text-sm font-medium"
          >
            {item} <span className="text-green-300">•</span> আজকের বাজারদর
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Renders a lead score (0-100) as 5 signal bars of increasing height —
 * deliberately evoking a phone/wifi signal-strength icon, since the whole
 * product is about finding businesses with no online "signal" and scoring
 * how strong an opportunity they are. Used in Lead Finder, Dashboard, and
 * Generated Websites so the score reads instantly without a number.
 */
export default function SignalScore({ score = 0, showLabel = true }) {
  const bars = 5;
  const litBars = Math.ceil((score / 100) * bars);

  const color =
    score >= 80 ? "bg-signal" : score >= 50 ? "bg-brass" : "bg-ash";

  return (
    <div className="flex items-end gap-2">
      <div className="flex items-end gap-[3px] h-4">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className={`w-1.5 rounded-sm transition-colors ${
              i < litBars ? color : "bg-ink-600"
            }`}
            style={{ height: `${((i + 1) / bars) * 100}%` }}
          />
        ))}
      </div>
      {showLabel && (
        <span className="font-mono text-xs text-ash">{score}</span>
      )}
    </div>
  );
}

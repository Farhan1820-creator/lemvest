// components/CtaCardDecoration.tsx
"use client";

/**
 * Corner stairstep-square decoration used in the CTA banner card.
 * "corner" flips the layout (top-left vs bottom-right) and swaps
 * the stroke color + accent gradient to match the Figma reference.
 */
export function CtaCardDecoration({
  corner,
  className = "",
}: {
  corner: "top-left" | "bottom-right";
  className?: string;
}) {
  const isTopLeft = corner === "top-left";
  const gradFrom = isTopLeft ? "#2D5894" : "#55A5B7";
  const gradTo = isTopLeft ? "#254A8D" : "#60B9C1";
  const gradId = `cta-corner-grad-${corner}`;

  // Base geometry drawn for the bottom-right orientation (stairstep going
  // down-right, biggest square outlined, smaller filled square nested).
  // top-left is the same shape mirrored via a 180deg rotation wrapper.
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      style={isTopLeft ? { transform: "rotate(180deg)" } : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="1" y1="1" x2="0" y2="1">
          <stop offset="0%" stopColor={gradFrom} />
          <stop offset="100%" stopColor={gradTo} />
        </linearGradient>
      </defs>


         </svg>
  );
}
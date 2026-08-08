// components/FaqCardBackground.tsx

/**
 * Exact Figma export: dark card background with two blurred green
 * glow ellipses. viewBox is the original 640x206 — scales to any
 * container size via width="100%" height="100%" + preserveAspectRatio.
 */
export function FaqCardBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 206"
      preserveAspectRatio="none"
      fill="none"
      className={className}
    >
      <g clipPath="url(#faq-card-clip)">
        <rect width="640" height="206" rx="20" fill="var(--muted-background)" />
        <g filter="url(#faq-card-blur-1)">
          <ellipse
            cx="66.2038"
            cy="15.5294"
            rx="93.5186"
            ry="171.872"
            transform="rotate(60 66.2038 15.5294)"
            fill="#6AFFBD"
            fillOpacity="0.4"
          />
        </g>
        <g filter="url(#faq-card-blur-2)">
          <ellipse
            cx="546.143"
            cy="175.373"
            rx="115.29"
            ry="211.885"
            transform="rotate(60 546.143 175.373)"
            fill="#6AFFBD"
            fillOpacity="0.4"
          />
        </g>
      </g>
      <defs>
        <filter
          id="faq-card-blur-1"
          x="-233.855"
          y="-246.557"
          width="600.118"
          height="524.172"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="72"
            result="effect1_foregroundBlur"
          />
        </filter>
        <filter
          id="faq-card-blur-2"
          x="119.753"
          y="-204.204"
          width="852.781"
          height="759.155"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="117"
            result="effect1_foregroundBlur"
          />
        </filter>
        <clipPath id="faq-card-clip">
          <rect width="640" height="206" rx="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
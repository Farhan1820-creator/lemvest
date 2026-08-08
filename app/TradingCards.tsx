import Image from "next/image";
import type { TradingCardData } from "@/app/TradingData";

const heightBySize: Record<TradingCardData["size"], string> = {
  lg:   "h-[300px] sm:h-[340px] md:h-[360px] xl:h-[400px]",
  md:   "h-[260px] sm:h-[290px] md:h-[360px] xl:h-[346px]",
  wide: "h-[300px] sm:h-[340px] md:h-[360px] xl:h-[445.33px]",
};

const textHeightBySize: Record<TradingCardData["size"], string> = {
  lg: "h-[92px] xl:h-[96px]",
  md: "h-[92px] xl:h-[96px]",
  wide: "h-[92px] xl:h-[96px]",
};

// Recalculated so image (aspect-4/3) + gap + text block + padding
// actually fits at every breakpoint instead of overflowing
const sliderHeight = "h-[400px] sm:h-[420px] md:h-[360px] lg:h-[402px] xl:h-[402px]";
const sliderTextHeight = "h-[92px] xl:h-[96px]";

export default function TradingCard({
  card,
  fixedHeight = false,
}: {
  card: TradingCardData;
  fixedHeight?: boolean;
}) {
  const isWide = card.size === "wide";
  const heightClass = fixedHeight ? sliderHeight : heightBySize[card.size];
  const textHeightClass = fixedHeight ? sliderTextHeight : textHeightBySize[card.size];

  return (
    <div
      className={`w-full rounded-[16px] xl:rounded-[14.81px] bg-muted-background p-[16px] xl:p-[14.81px] flex flex-col items-start overflow-hidden ${heightClass}`}
    >
      <div
        className={`relative w-full rounded-xl overflow-hidden mb-4 ${
          fixedHeight ? "aspect-[4/3] shrink-0" : "flex-1"
        }`}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className={isWide ? "object-contain" : "object-cover"}
        />
      </div>

      <div className={`w-full shrink-0 ${textHeightClass}`}>
        <h3 className="font-primary text-[20px] xl:text-[24px] leading-[24px] xl:leading-[20px] tracking-[-2%] font-medium text-foreground mb-2">
          {card.title}
        </h3>
        <p className="font-secondary text-[13px] xl:text-[14px] leading-[131%] tracking-[-3%] text-muted dark:text-muted-foreground">
          {card.description}
        </p>
      </div>
    </div>
  );
}
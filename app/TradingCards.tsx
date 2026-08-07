import Image from "next/image";
import type { TradingCardData } from "@/lib/tradingCards";

const heightBySize: Record<TradingCardData["size"], string> = {
  lg: "h-[300px] sm:h-[340px] md:h-[360px] xl:h-[402px]",
  md: "h-[260px] sm:h-[290px] md:h-[310px] xl:h-[346px]",
  wide: "h-[300px] sm:h-[340px] md:h-[380px] xl:h-[445.33px]",
};

// Uniform height used only inside the slider, same for every card
const sliderHeight = "h-[300px] sm:h-[340px] md:h-[360px] xl:h-[402px]";

export default function TradingCard({
  card,
  fixedHeight = false,
}: {
  card: TradingCardData;
  fixedHeight?: boolean;
}) {
  const isWide = card.size === "wide";
  const heightClass = fixedHeight ? sliderHeight : heightBySize[card.size];

  return (
    <div
      className={`w-full rounded-[16px] xl:rounded-[14.81px] bg-muted-background p-[16px] xl:p-[14.81px] flex flex-col items-start ${heightClass}`}
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
      <h3 className="font-primary text-[20px] xl:text-[24px] leading-[24px] xl:leading-[20px] tracking-[-2%] font-medium text-foreground mb-2">
        {card.title}
      </h3>
      <p className="font-secondary text-[13px] xl:text-[14px] leading-[131%] tracking-[-3%] text-muted dark:text-muted-foreground">
        {card.description}
      </p>
    </div>
  );
}
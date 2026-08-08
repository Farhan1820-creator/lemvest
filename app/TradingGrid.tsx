import TradingCard from "./TradingCards";
import type { TradingCardData } from "@/app/TradingData";

export default function TradingGrid({ cards }: { cards: TradingCardData[] }) {
  return (
    <div className="hidden dark:md:block">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.slice(0, 6).map((card) => (
          <TradingCard key={card.title} card={card} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <TradingCard card={cards[6]} />
        <TradingCard card={cards[7]} />
      </div>

      <div className="flex justify-center mt-10">
        <button className="inline-flex items-center justify-center bg-button-background text-background font-primary text-[16px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium px-5 py-[13px] xl:px-5 xl:py-[14px] rounded-lg tracking-[-3%] leading-none outline outline-background -outline-offset-[3px] shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]">
          Join Lemvest
        </button>
      </div>
    </div>
  );
}
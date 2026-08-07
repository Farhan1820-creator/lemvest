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
        <button className="inline-flex items-center justify-center rounded-lg bg-button-background px-6 py-3 font-primary text-[16px] font-medium text-background outline outline-background -outline-offset-[3px] shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]">
          Join Lemvest
        </button>
      </div>
    </div>
  );
}
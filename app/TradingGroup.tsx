import { tradingCards } from "@/app/TradingData";
import TradingGrid from "@/app/TradingGrid";
import TradingSlider from "@/app/TradingSlider";

export default function TradingGroup() {
  return (
    <section>
      <div className="max-width extra-padding relative py-14 md:py-16 lg:py-18 xl:py-20">
        <h2 className="font-primary text-[36px] md:text-[42px] lg:text-[48px] xl:text-[60px] leading-[42px] lg:leading-[46px] xl:leading-[56px] tracking-[-3%] font-medium text-muted-foreground text-center mb-10">
          Much more than just
          <br />
          <span className="text-foreground"> trading group </span>
        </h2>

        <TradingGrid cards={tradingCards} />
        <TradingSlider cards={tradingCards} />
      </div>
    </section>
  );
}
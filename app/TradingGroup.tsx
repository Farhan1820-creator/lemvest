"use client";

import { useState } from "react";
import Image from "next/image";

const cards = [
  {
    title: "MORNING ANALYSIS",
    description:
      "Every morning, five days a week, receive a clear analysis of the key assets, along with the various scenarios to watch out for.",
    image: "/tradinggroup/1.png",
  },
  {
    title: "EDUCATIONAL PORTAL",
    description:
      "Training, psychology, in-depth analysis, news, performance trackers... everything is in one place to help you improve.",
    image: "/tradinggroup/2.png",
  },
  {
    title: "TRADING LIVE",
    description:
      "Join live sessions with our traders to analyse the markets, study charts and discover investment ideas.",
    image: "/tradinggroup/3.png",
  },
  {
    title: "MARKET OPPORTUNITIES",
    description:
      "From Monday to Friday, receive detailed trading ideas with a consistently positive risk-reward ratio to help you manage each opportunity more effectively.",
    image: "/tradinggroup/4.png",
  },
  {
    title: "PRIVATE COACH",
    description:
      "Ask questions whenever you like and benefit from personalised support to help you progress with greater peace of mind.",
    image: "/tradinggroup/5.png",
  },
  {
    title: "ALL-LEVEL ACADEMY",
    description:
      "Discover hours of videos combining technique, strategy and psychology to help you build a solid foundation in trading.",
    image: "/tradinggroup/6.png",
  },
  {
    title: "ECONOMIC NEWS",
    description:
      "Stay up to date with major economic events every day to better understand the markets and anticipate their impact.",
    image: "/tradinggroup/7.png",
  },
  {
    title: "CALCULATOR",
    description:
      "Simulate each position before investing to optimise your money management and better manage the growth of your capital.",
    image: "/tradinggroup/8.png",
  },
];

function Card({
  card,
  wide = false,
}: {
  card: (typeof cards)[number];
  wide?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-muted-background p-4 flex flex-col h-full">
      <div
        className={`relative w-full rounded-xl overflow-hidden mb-4 ${
          wide ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className={wide ? "object-contain" : "object-cover"}
        />
      </div>
      <h3 className="font-primary text-sm font-medium tracking-wide text-foreground mb-2">
        {card.title}
      </h3>
      <p className="font-secondary text-sm text-muted dark:text-muted-foreground leading-relaxed">
        {card.description}
      </p>
    </div>
  );
}

export default function TradingGroup() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);

  return (
    <section>
      <div className="max-width extra-padding relative py-20">
        <h2 className="font-primary text-[36px] md:text-[42px] lg:text-[48px] xl:text-[60px] leading-[42px] lg:leading-[46px] xl:leading-[56px] tracking-[-3%] font-medium text-foreground text-center mb-10">
          Much more than just
          <br />a trading group
        </h2>

        {/* Desktop bento grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.slice(0, 6).map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-6 mt-6">
          <Card card={cards[6]} wide />
          <Card card={cards[7]} wide />
        </div>

        <div className="hidden md:flex justify-center mt-10">
          <button className="inline-flex items-center justify-center rounded-lg bg-button-background px-6 py-3 font-primary text-[16px] font-medium text-background outline outline-background -outline-offset-[3px] shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]">
            Join Lemvest
          </button>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {cards.map((card) => (
                <div key={card.title} className="w-full flex-shrink-0 px-1">
                  <Card card={card} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted-background text-foreground"
            >
              ‹
            </button>

            <div className="flex items-center gap-1.5">
              {cards.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-5 bg-button-background"
                      : "w-2 bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted-background text-foreground"
            >
              ›
            </button>
          </div>

<div className="flex w-full items-center justify-center">        
          <button className=" mt-6 inline-flex items-center justify-center rounded-lg bg-button-background px-6 py-3 font-primary text-[16px] font-medium text-black outline outline-black ">
            Join Lemvest
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
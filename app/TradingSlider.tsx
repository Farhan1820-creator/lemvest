"use client";

import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import TradingCard from "./TradingCards";
import type { TradingCardData } from "@/app/TradingData";

function getItemsPerView() {
  if (typeof window === "undefined") return 1;
  const w = window.innerWidth;
  if (w >= 1280) return 3;
  if (w >= 768) return 2;
  return 1;
}

// Gap must match the Tailwind gap classes below (24px default, 22.21px at xl+)
function getGap() {
  if (typeof window === "undefined") return 24;
  return window.innerWidth >= 1280 ? 22.21 : 24;
}

export default function TradingSlider({ cards }: { cards: TradingCardData[] }) {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [index, setIndex] = useState(1); // offset by itemsPerView for clones
  const [withTransition, setWithTransition] = useState(true);
  const [step, setStep] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = cards.length;

  const extended = [
    ...cards.slice(total - itemsPerView),
    ...cards,
    ...cards.slice(0, itemsPerView),
  ];

  useEffect(() => {
    const handleResize = () => {
      const next = getItemsPerView();
      setItemsPerView((prev) => {
        if (prev !== next) {
          setWithTransition(false);
          setIndex(next);
        }
        return next;
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const slideWidth = (track.firstElementChild as HTMLElement).getBoundingClientRect().width;
    const gapPx = parseFloat(getComputedStyle(track).columnGap || "0");
    setStep(slideWidth + gapPx);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [itemsPerView, measure]);

  useEffect(() => {
    if (!outerRef.current) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(outerRef.current);
    return () => ro.disconnect();
  }, [measure]);

  const next = useCallback(() => {
    setWithTransition(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    setWithTransition(true);
    setIndex((i) => i - 1);
  }, []);

  const handleTransitionEnd = () => {
    if (index >= total + itemsPerView) {
      setWithTransition(false);
      setIndex(itemsPerView);
    } else if (index <= itemsPerView - 1) {
      setWithTransition(false);
      setIndex(total + itemsPerView - 1);
    }
  };

  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition]);

  const activeDot = ((index - itemsPerView) % total + total) % total;
  const gap = getGap();

  return (
    <div className="dark:md:hidden">
      <div ref={outerRef} className="py-8" style={{ overflowX: "hidden", overflowY: "visible" }}>
        <div
          ref={trackRef}
          className={`flex items-end gap-[24px] xl:gap-[22.21px] ${
            withTransition ? "transition-transform duration-300 ease-out" : ""
          }`}
          style={{ transform: `translateX(-${index * step}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((card, i) => {
            const isCenter = itemsPerView === 3 && i === index + 1;
            return (
              <div
                key={`${card.title}-${i}`}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% - ${(itemsPerView - 1) * gap}px) / ${itemsPerView})`,
                }}
              >
                <div
                  className={`transition-transform duration-300 ease-out origin-bottom ${
                    isCenter ? "scale-105 relative z-10" : "scale-100"
                  }`}
                >
                  <TradingCard card={card} fixedHeight/>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 md:gap-4 mt-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-2 border-muted-background text-foreground hover:bg-button-background hover:border-button-background hover:text-background"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex items-center gap-1.5">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full transition-all ${
                i === activeDot ? "bg-button-background" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="w-12 h-12 flex items-center justify-center rounded-full text-foreground bg-transparent border-2 border-muted-background hover:bg-button-background hover:text-background hover:border-button-background"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="flex w-full items-center justify-center">
        <button className="mt-6 inline-flex items-center justify-center bg-button-background text-background font-primary text-[16px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium px-5 py-[13px] xl:px-5 xl:py-[14px] rounded-lg tracking-[-3%] leading-none outline outline-background -outline-offset-[3px] shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]">
          Join Lemvest
        </button>
      </div>
    </div>
  );
}
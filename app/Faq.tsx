"use client";

import { useState } from "react";
import { FaqCardBackground } from "@/app/FaqCardBackground";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What if I'm starting from scratch?",
    answer:
      "That's exactly why Lemvest exists. Thanks to our Educational Portal — with over 12 hours of video content — you can progress step by step from beginner to advanced levels.",
  },
  {
    question: "What are your investment ideas?",
    answer: "Add answer here.",
  },
  {
    question: "Can I use only Lemvest?",
    answer: "Add answer here.",
  },
  {
    question: "Can you become an ambassador without being a Lemvest member?",
    answer: "Add answer here.",
  },
  {
    question: "How soon can I see results?",
    answer: "Add answer here.",
  },
  {
    question: "What do I need to get started?",
    answer: "Add answer here.",
  },
  {
    question: "I don't have time to learn. What should I do?",
    answer: "Add answer here.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq">
      <div className="max-width extra-padding relative py-14 md:py-16 lg:py-18 xl:py-20">
        <h2 className="text-center font-primary text-[36px] md:text-[42px] lg:text-[48px] xl:text-[60px] leading-[42px] lg:leading-[46px] xl:leading-[60px] tracking-[-3%] font-medium mb-10 md:mb-16">
          <span className="text-muted-foreground">Frequently asked</span>
          <br />
          <span className="text-foreground">questions</span>
        </h2>

        <div className="flex flex-col gap-3 max-w-[640px] mx-auto">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="flex items-start gap-3 md:gap-4"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="shrink-0 w-14 h-12 md:w-12 md:h-12 rounded-xl bg-muted-background  flex items-center justify-center text-foreground text-[30px] font-light tracking-[-2%]  outline -outline-offset-[1px] outline-white/10"
                >
                  {isOpen ? "−" : "+"}
                </button>

                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex-1 text-left justify-center items-center bg-muted-background rounded-xl px-5 py-3.5 md:px-6 md:py-4"
                >
                  <span
                    className={`block font-primary text-[14px] tracking-[-2%] font-medium text-foreground dark:text-[#ffffff]  ${
                      isOpen ? "border-b-2 border-muted/70 dark:border-muted-foreground pb-2" : ""
                    }`}
                  >
                    {item.question}
                  </span>

                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 font-primary text-[14px] tracking-[-2%] font-[400] text-muted dark:text-[#bababa] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}

        {/* Contact card — background is now the exact Figma-exported
            gradient SVG (FaqCardBackground) instead of a Tailwind gradient.
            Card is made `relative overflow-hidden`, the SVG is an absolute
            fill layer behind everything (-z-10), and the original content
            wrapper/classes are untouched so text position stays identical. */}
        <div className="relative overflow-hidden mt-8 rounded-2xl px-6 py-8 md:px-10 md:py-5 flex flex-col items-start gap-5">
          <FaqCardBackground className="absolute inset-0 w-full h-full -z-10" />

          <p className="font-primary  text-[24px] tracking-[-1%]  text-foreground leading-snug">
            Can&apos;t find the answer to
            <br />
            your question?
            <br />
            Our team is here to help.
          </p>

          <button
            type="button"
            className="bg-button-background text-background font-primary text-[16px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium px-5 py-[13px] xl:px-5 xl:py-[14px] rounded-lg tracking-[-3%] leading-none outline -outline-offset-[3px] outline-background shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]"
          >
            Join Lemvest
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
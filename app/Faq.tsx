"use client";

import { useState } from "react";

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
    <section>
      <div className="max-width extra-padding relative py-20">
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
                  className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl bg-muted-background flex items-center justify-center text-foreground text-[16px] tracking-[-2%] font-medium outline -outline-offset-[1px] outline-white/10"
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
                    className={`block font-primary text-[14px] tracking-[-2%] font-medium text-foreground  ${
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
                      <p className="pt-3 font-primary text-[14px] tracking-[-2%] font-[400] text-muted dark:text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-6 rounded-2xl px-6 py-8 md:px-10 md:py-10 bg-gradient-to-br from-muted-background via-muted-background to-[#91fed1d5] dark:to-[#0a2e1f] flex flex-col items-start gap-5">
          <p className="font-primary  text-[24px] tracking-[-1%]  text-foreground leading-snug">
            Can&apos;t find the answer to
            <br />
            your question?
            <br />
            Our team is here to help.
          </p>

          <button
            type="button"
            className="bg-button-background tracking-[-3%] text-background font-primary text-[16px] font-medium px-6 py-3 rounded-lg outline -outline-offset-[3px] outline-background shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]"
          >
            Join Lemvest
          </button>
        </div>
      </div>
    </section>
  );
}
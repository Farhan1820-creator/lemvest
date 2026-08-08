// app/CtaBanner.tsx
import { CtaCardDecoration } from "@/app/CtaCardDecoration";

export default function CtaBanner() {
  return (
    <section>
      <div className="max-width extra-padding relative flex items-center justify-center py-14 md:py-16 lg:py-18 xl:py-20">
        {/* Card container: gradient replaces the PNG background.
            Sizing per breakpoint matches Figma (mobile 362x221, desktop 1069x417). */}
        <div
          className="
            relative 
            w-full h-[221px] rounded-[40px]
            md:h-[260px] md:w-[95%]
            lg:h-[300px] lg:w-[90%]
            xl:w-[1069px] xl:h-[368px] xl:rounded-[44px]
            flex items-center justify-center
            ring-8 
            ring-white/[0.04] 
            md:ring-white/[0.06]
          "
          style={{
            background:
              "linear-gradient(85.07deg, #1F3E88 0%, #65C2C5 100%)",
          }}
        >
          {/* Decorations: absolutely positioned, clipped by overflow-hidden above */}
          <CtaCardDecoration
            corner="top-left"
            className="hidden md:block absolute top-0 left-0 w-[140px] h-[140px] xl:w-[210px] xl:h-[210px] opacity-80"
          />
          <CtaCardDecoration
            corner="bottom-right"
            className="hidden md:block absolute bottom-0 right-0 w-[140px] h-[130px] xl:w-[210px] xl:h-[210px] opacity-80"
          />

<img src="/ctabanner/left.png" alt="" className="hidden md:block w-[130px] h-[130px] lg:w-[150px] lg:h-[150px] xl:w-auto xl:h-auto absolute z-2 top-0 left-0" />
<img src="/ctabanner/right.png" alt="" className="absolute hidden md:block w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] xl:w-auto xl:h-auto z-2 right-0 bottom-0" />
<img src="/ctabanner/gradient.png" alt="" className="absolute hidden md:block z-1 bottom-[-160px] w-full h-[420px] scale-[1.2]" />

          {/* Content overlay — position/size independently of the card now */}
          <div
            className="
              relative z-10 flex flex-col items-center justify-center text-center
              px-13 md:px-16 xl:px-6
              gap-4 md:gap-2 xl:gap-3
              
            "
          >
            <p className="font-primary font-[400] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] tracking-[-2%] leading-tight text-white">
              How many more opportunities are you going to let slip by ?
            </p>

            <div className="flex flex-col gap-6 md:gap-7 xl:gap-8 items-center justify-center">
              <p className="font-primary text-[20px] md:text-[20px] lg:text-[22px] xl:text-[30px] tracking-[-2%] leading-tight text-center font-[500] md:font-[700] text-white">
                Results come to those who decide to take action.
              </p>
              <button className="bg-button-background text-background font-primary text-[16px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium px-5 py-[13px] xl:px-5 xl:py-[14px] rounded-lg tracking-[-3%] leading-none shadow-[1px_-2px_0px_0px_#00000016_inset]">
                Join Lemvest
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
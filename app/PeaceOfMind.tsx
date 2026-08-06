import { ShieldCheck } from "lucide-react";

export default function PeaceOfMind() {
  return (
    <section>
      <div className="max-width extra-padding relative py-14 md:py-16 lg:py-18 xl:py-20 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row gap-2  max-w-full md:max-w-[90%] xl:max-w-[75%]">
          {/* Left green card */}
          <div className="flex-1 max-w-full md:max-w-[195px] lg:max-w-[220px] xl:max-w-[270px] bg-button-background rounded-2xl p-10 md:p-4 lg:p-2 xl:p-2 flex flex-col items-center justify-center text-center gap-2 lg:gap-3 xl:gap-4">
            <img src="/pom/shield-light.png" className=" dark:hidden w-8 h-9 text-background" strokeWidth={2}  />
            <img src="/pom/shield-dark.png" className="hidden dark:block w-8 h-9 text-background" strokeWidth={2}  />
            <h3 className="font-primary font-medium max-w-[70%] md:max-w-full text-[20px] md:text-[20px] lg:text-[22px] xl:text-[26px] text-background leading-[24px] tracking-[-3%]">
              Invest with Greater peace of mind
            </h3>
          </div>

          {/* Right dark card */}
          <div className="flex-1 flex-col bg-muted-background rounded-2xl p-6 md:p-4 lg:p-6 xl:p-6 flex items-center justify-between  gap-2 lg:gap-3 xl:gap-4 text-center font-primary font-[400] text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[23px]  tracking-[-2%]">
           <p className="max-w-full md:max-w-[80%] px-0 md:px-2 lg:px-3 xl:px-4">
              When you join Lemvest, you&apos;re eligible for a 5-day
              money-back guarantee.
            </p>
            <p className="max-w-full">   
              If you follow our advice correctly, participate in our live
              sessions,
              <br />
               or take our training courses, and you incur a loss on
              your initial investment,{" "}
                            <br />
              <span className="font-medium text-foreground">
                we&apos;ll reimburse you for that loss during your first 5
                days.
              </span>
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-center mt-8">
          <button className="bg-button-background text-background font-primary font-medium text-[16px] tracking-[-3%] px-6 py-3 rounded-lg outline outline-background -outline-offset-[3px] shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]">
            Join Lemvest
          </button>
        </div>
      </div>
    </section>
  );
}
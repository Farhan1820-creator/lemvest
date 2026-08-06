import Image from "next/image";

export default function CtaBanner() {
  return (
    <section>
      <div className="max-width extra-padding relative flex items-center justify-center py-20 ">
        <div className="relative   h-[240px]  md:h-[260px] md:w-[95%] lg:h-[260px] lg:w-[90%] xl:w-[1069px] xl:h-[380px]  bg-[url('/ctabanner/bg-mobile.png')] md:bg-[url('/ctabanner/bg.png')] bg-contain bg-no-repeat xl:bg-cover bg-center flex items-center justify-center">
<div className="absolute hidden md:flex bottom-[-160px] xl:bottom-[-230] w-[800px] h-[500px] lg:w-[900px] lg:h-[500px] xl:w-[1330px] xl:h-[700px]">
<img src="/ctabanner/gradient.png" alt="" 
className="absolute w-full h-full object-center -z-2 "/>
</div>
          {/* Content overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center  h-full text-center px-13 md:px-20 xl:px-6 gap-1 lg:gap-2 xl:gap-3">
            <p
              className="font-primary font-[400] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] tracking-[-2%] font-normal text-background dark:text-foreground leading-[100%"
            >
              How many more opportunities are you going to let slip by ?
            </p>
            <p
              className="font-primary text-[20px] md:text-[18px] lg:text-[20px] xl:text-[30px] tracking-[-2%] text-center font-[500] md:font-[700] text-background dark:text-foreground"
            >
              Results come to those who decide to take action.
            </p>
            <button
              className="bg-button-background mt-4 md:mt-3 xl:mt-5 text-background font-primary  text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium  px-5 py-[10px] xl:px-6 xl:py-3 rounded-lg tracking-[-3%] outline -outline-offset-[3px] outline-background shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]"
            >
              Join Lemvest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
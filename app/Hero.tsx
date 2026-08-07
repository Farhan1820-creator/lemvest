import Image from "next/image";
import { Calendar, TrendingUp, Radio, Sparkles, Pin } from "lucide-react";

const actionButtons = [
  { icon: Calendar, label: "Daily Opportunities" },
  { icon: Radio, label: "Live Sessions" },
  { icon: TrendingUp, label: "Strategies" },
  { icon: Sparkles, label: "AI Tools" },
];

const sideCards = [
  { icon: Calendar, label: "Daily Opportunities", position: "-left-[47px] 2xl:left-[62px] top-[70px]", rotate:"rotate-[-6deg]", pin:"rotate-[60deg]", pinPosition:"left-1/2"},
  { icon: TrendingUp, label: "Strategies", position: "-right-[50px] 2xl:right-[62px] top-[70px]", rotate:"rotate-[15deg]", pin:"rotate-[-10deg]", pinPosition:"left-[40%] -top-8 "},
  { icon: Radio, label: "Live Sessions", position: "-left-[47px] 2xl:left-[62px] top-[463px]", rotate:"rotate-[5deg]", pin:"rotate-[-10deg]", pinPosition:"left-[40%] -top-8" },
  { icon: Sparkles, label: "AI Tools", position: "-right-[50px] 2xl:right-[62px] top-[463px]", rotate:"rotate-[-8deg]", pin:"rotate-[70deg]", pinPosition:"left-[70%] -top-9"},
];

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-[95vh]  lg:h-[87vh] dark:lg:h-screen overflow-hidden  px-2 md:px-16 lg:px-30 z-2 ">
      {/* Background image - adjust top/height/opacity here as needed */}
<div className="absolute hidden dark:block bottom-[-60px] left-0 w-full h-full -z-10">
  <Image
    src="/hero/bg.png"
    alt=""
    fill
    priority
    className="object-cover object-top hidden lg:flex"
  />
  <Image
    src="/hero/bg-mobile.png"
    alt=""
    fill
    priority
    className="object-cover object-center hidden md:flex lg:hidden"
  />
  <Image
    src="/hero/bg-mobile1.png"
    alt=""
    fill
    priority
    className="object-cover object-center  md:hidden"
  />
</div>


      <div className="max-width relative">
        {/* Floating side cards */}
        {sideCards.map((card, i) => (
          <div
            key={i}
            className={`items-center justify-center hidden lg:flex absolute shadow-xl dark:shadow-none ${card.position} w-[175px] h-[158px] xl:w-[185px] xl:h-[163px] rounded-3xl bg-muted-background backdrop-blur-sm ${card.rotate} trackding-[-2%]`}
          >
            <img
            src="/hero/pin.svg"
              className={`absolute -top-6 ${card.pinPosition} left-1/2 -translate-x-1/2 ${card.pin} text-blue-400`}
            />
            <div className="flex flex-col items-center justify-center gap-2 p-5 rotate-[-3deg] ">
              <card.icon size={28} className="text-foreground" />
              <span className="font-primary font-normal text-[15px] xl:text-[16px] text-foreground">
                {card.label}
              </span>
            </div>
          </div>
        ))}

        {/* Center content */}
        <div className="flex flex-col items-center gap-8  pt-5 md:pt-10 lg:pt-20 ">
          <div className=" w-full md:w-[70%] lg:w-[60%] xl:w-[48%] 2xl:w-[40%] flex flex-col items-center gap-4 lg:gap-3 xl:gap-5 mx-auto">
          <h1 className="font-primary font-medium text-[36px] md:text-[45px] lg:text-[48px] xl:text-[60px] leading-[36px] md:leading-[45px] xl:leading-[56px] tracking-[-0.03em] text-center text-muted-foreground dark:text-[#515b5a]">
            You don&apos;t need to do more -{" "}
            <span className="text-foreground">You need a better system</span>
          </h1>

          <p className="font-primary font-medium text-[12px] md:text-[14px] lg:text-[16px] leading-none tracking-[-2%] text-center text-muted dark:text-[#b7c2c3] max-w-[96%] md:max-w-[90%]  lg:max-w-[96%]">
            Whatever your level of experience, Lemvest helps you to learn, improve and grow financially through a comprehensive trading ecosystem.
          </p>

          <button className="bg-button-background mt-3 text-background font-primary font-medium text-[16px]  leading-[100%] tracking-[-3%] capitalize px-5 py-[14px] md:px-[20px] md:py-[14px] rounded-lg hover:opacity-90 transition-opacity outline-1 outline-background -outline-offset-[2px] shadow-[1px_-1px_0px_0px_#0000001A_inset,2px_-2px_0px_0px_#00000040_inset] flex items-center justify-center">
            Join Lemvest
          </button>
</div>
          <div className="flex flex-col lg:flex-row  flex-wrap justify-center gap-3 w-full">
            {actionButtons.map((btn, i) => (
              <div
                key={i}
                className="flex items-center justify-center lg:justify-start text-center md:text-left gap-1.5 px-3 h-10 rounded-lg bg-muted-background border dark:bg-white/5 border-white/10 backdrop-blur-sm  py-2"
              >
                <btn.icon size={16} className="text-button-background dark:text-foreground  shrink-0" />
                <span className="font-primary font-medium text-[16px] leading-none tracking-[-0.01em] text-foreground truncate">
                  {btn.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
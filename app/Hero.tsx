import Image from "next/image";





export default function Hero() {
function DailyOpportunitiesIcon({ size = 24, className = "text-button-background dark:text-[#b0cac7]" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M16 2V6M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} />
      <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} />
      <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} />
    </svg>
  );
}

function LiveSessionsIcon({ size = 24, className = "text-button-background dark:text-[#b0cac7]" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.5 21.5L8.5 17.5M10.5 17.5L14.5 21.5M9.5 17.5V22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 11.875C2 9.81261 2 8.78141 3.02513 8.1407C4.05025 7.5 5.70017 7.5 9 7.5H10C13.2998 7.5 14.9497 7.5 15.9749 8.1407C17 8.78141 17 9.81261 17 11.875V13.125C17 15.1874 17 16.2186 15.9749 16.8593C14.9497 17.5 13.2998 17.5 10 17.5H9C5.70017 17.5 4.05025 17.5 3.02513 16.8593C2 16.2186 2 15.1874 2 13.125V11.875Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 10.2495L17.1259 10.174C19.2417 8.90435 20.2996 8.26954 21.1498 8.57605C22 8.88257 22 9.89876 22 11.9312V13.0685C22 15.1009 22 16.1171 21.1498 16.4236C20.2996 16.7301 19.2417 16.0953 17.1259 14.8257L17 14.7501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12.5 7.5C13.8807 7.5 15 6.38071 15 5C15 3.61929 13.8807 2.5 12.5 2.5C11.1193 2.5 10 3.61929 10 5C10 6.38071 11.1193 7.5 12.5 7.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7.5C8.65685 7.5 10 6.15685 10 4.5C10 2.84315 8.65685 1.5 7 1.5C5.34315 1.5 4 2.84315 4 4.5C4 6.15685 5.34315 7.5 7 7.5Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function StrategiesIcon({ size = 24, className = "text-button-background dark:text-[#b0cac7]" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 17L7 13C7.88256 12.1174 8.32385 11.6762 8.86543 11.6274C8.95496 11.6193 9.04504 11.6193 9.13457 11.6274C9.67615 11.6762 10.1174 12.1174 11 13C11.8826 13.8826 12.3238 14.3239 12.8654 14.3726C12.955 14.3807 13.045 14.3807 13.1346 14.3726C13.6762 14.3239 14.1174 13.8826 15 13L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.7234 12C20.7234 12 21.3457 7.899 20.7234 7.2766C20.101 6.6542 16 7.2766 16 7.2766" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AiToolsIcon({ size = 24, className = "text-button-background dark:text-[#b0cac7]" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 7H11C8.19108 7 6.78661 7 5.77772 7.67412C5.34096 7.96596 4.96596 8.34096 4.67412 8.77772C4 9.78661 4 11.1911 4 14C4 16.8089 4 18.2134 4.67412 19.2223C4.96596 19.659 5.34096 20.034 5.77772 20.3259C6.78661 21 8.19108 21 11 21H13C15.8089 21 17.2134 21 18.2223 20.3259C18.659 20.034 19.034 19.659 19.3259 19.2223C20 18.2134 20 16.8089 20 14C20 11.1911 20 9.78661 19.3259 8.77772C19.034 8.34096 18.659 7.96596 18.2223 7.67412C17.2134 7 15.8089 7 13 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 14H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 11V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7C12 5.11438 12 4.17157 11.4142 3.58579C10.8284 3 9.88562 3 8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


const actionButtons = [
  { icon: DailyOpportunitiesIcon, label: "Daily Opportunities" },
  { icon: LiveSessionsIcon, label: "Live Sessions" },
  { icon: StrategiesIcon, label: "Strategies" },
  { icon: AiToolsIcon, label: "AI Tools" },
];

const sideCards = [
  { icon: DailyOpportunitiesIcon, label: "Daily Opportunities", position: "-left-[47px] 2xl:left-[62px] top-[70px]", rotate: "rotate-[-6deg]", pin: "rotate-[60deg]", pinPosition: "left-1/2" },
  { icon: StrategiesIcon, label: "Strategies", position: "-right-[50px] 2xl:right-[62px] top-[70px]", rotate: "rotate-[15deg]", pin: "rotate-[-10deg]", pinPosition: "left-[40%] -top-8" },
  { icon: LiveSessionsIcon, label: "Live Sessions", position: "-left-[47px] 2xl:left-[62px] top-[463px]", rotate: "rotate-[5deg]", pin: "rotate-[-10deg]", pinPosition: "left-[40%] -top-8" },
  { icon: AiToolsIcon, label: "AI Tools", position: "-right-[50px] 2xl:right-[62px] top-[463px]", rotate: "rotate-[-8deg]", pin: "rotate-[70deg]", pinPosition: "left-[70%] -top-9" },
];

  return (
    <section className="relative w-full h-[90vh] md:h-[95vh]  lg:h-[87vh] dark:lg:h-screen overflow-hidden  px-2 md:px-16 lg:px-30 z-2 ">
      {/* Background image - adjust top/height/opacity here as needed */}
<div className="absolute hidden dark:block bottom-[-95px] md:bottom-[-60px] left-0 w-full h-full -z-10">
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
            className={`items-center justify-center hidden lg:flex absolute shadow-xl dark:shadow-none ${card.position} w-[175px] h-[158px] xl:w-[185px] xl:h-[163px] rounded-3xl bg-muted-background backdrop-blur-sm ${card.rotate} tracking-[-2%]`}
          >
            <img
            src="/hero/pin.svg"
              className={`absolute -top-6 ${card.pinPosition} left-1/2 -translate-x-1/2 ${card.pin} text-blue-400`}
            />
            <div className="flex flex-col items-center justify-center gap-2 p-5 rotate-[-1deg] ">
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
          <div className="flex flex-col lg:flex-row  flex-wrap justify-center gap-2 w-full">
            {actionButtons.map((btn, i) => (
              <div
                key={i}
              className="flex items-center justify-center lg:justify-start text-center md:text-left gap-1  px-4  h-10 rounded-lg bg-muted-background border dark:bg-white/5 border-white/10 backdrop-blur-sm  py-2"
              >
                <btn.icon size={24} className="text-button-background dark:text-foreground  shrink-0" />
                <span className="font-primary font-normal text-[14px] leading-none tracking-[-1%] text-foreground ">
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
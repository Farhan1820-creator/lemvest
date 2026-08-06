import {
  GraduationCap,
  LineChart,
  Lock,
  Bell,
  BookOpen,
  MonitorPlay,
} from "lucide-react";

const items = [
  { title: "Trading Education", icon: GraduationCap, highlighted: false },
  { title: "Daily Market Briefing", icon: LineChart, highlighted: true },
  { title: "24/7 Private Support", icon: Lock, highlighted: false },
  { title: "Alerts With Positive RR", icon: Bell, highlighted: false },
  { title: "Educational Portal", icon: BookOpen, highlighted: false },
  { title: "Daily Live Trading", icon: MonitorPlay, highlighted: false },
];

export default function FreeButPrecious() {
  return (
    <section>
      <div className="max-width extra-padding relative py-20">
        <h2 className="font-primary text-[36px] md:text-[42px] lg:text-[48px] xl:text-[60px] leading-[42px] lg:leading-[46px] xl:leading-[56px] font-medium text-foreground text-center mb-10">
          Free but precious
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
          {items.map(({ title, icon: Icon, highlighted }) => (
            <div
              key={title}
              className={`flex flex-col md:flex-row items-start md:items-center justify-center gap-3 xl:gap-4 rounded-2xl p-3 md:p-4 xl:p-6  outline outline-1 py-6  md:py-12 lg:py-14 xl:py-20 ${
                highlighted
                  ? "bg-button-background outline-transparent"
                  : "bg-muted-background dark:bg-transparent outline-muted-background"
              }`}
            >
              <div
                className={`size-8 md:size-9 xl:size-10 w-10 h-10 flex items-center justify-center rounded-lg ${
                  highlighted ? "bg-background" : "bg-button-background"
                }`}
              >
                <Icon
                  
                  className={highlighted ? "text-button-background" : "text-background"}
                />
              </div>
              <span
                className={`font-primary text-[14px] md:text-[18px] lg:text-[18px] xl:text-[24px] tracking-[-2%] font-medium ${
                  highlighted ? "text-background" : "text-foreground"
                }`}
              >
                {title}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="inline-flex items-center justify-center  bg-button-background  font-primary  font-medium text-background text-[16px] tracking-[-3%] px-6 py-3 rounded-lg outline outline-background -outline-offset-[3px] shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset] ">
            Join Lemvest
          </button>
        </div>
      </div>
    </section>
  );
}
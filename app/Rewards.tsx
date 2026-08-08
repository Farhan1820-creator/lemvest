const levels = [
  { level: "Ambassador", affiliates: "1 – 24", commission: "$150" },
  { level: "Elite", affiliates: "25 – 99", commission: "$200" },
  { level: "Partner", affiliates: "100+", commission: "$300" },
];

const bonusRewards = [
  { referrals: "25 Referrals", amount: "$1,000" },
  { referrals: "50 Referrals", amount: "$3,000" },
  { referrals: "100 Referrals", amount: "$10,000" },
];

const notes = [
  "All payments are made weekly in USDT.",
  "The program is also for Lemvest.",
];

export default function Rewards() {
  return (
    <section>
      <div className="max-width extra-padding relative py-14 md:py-16 lg:py-18 xl:py-20">
        <h2 className="text-center font-primary text-[36px] md:text-[42px] lg:text-[48px] xl:text-[60px] leading-[42px] lg:leading-[46px] xl:leading-[60px] tracking-[-2%] font-medium mb-10 md:mb-16">
          <span className="text-muted-foreground">Share Lemvest,</span>
          <br />
          <span className="text-foreground">get rewarded</span>
        </h2>

        <div className="rounded-2xl border-2 border-muted-foreground/30 p-3 xl:p-6 flex flex-col md:flex-row gap-10 md:gap-8">
          {/* Left side - desktop only visible here, mobile moves below */}
          <div className="hidden md:flex flex-col justify-center items-center text-center gap-3 lg:gap-4 xl:gap-5 md:w-[33%] shrink-0">
            <p className="font-primary text-[20px] lg:text-[22px] xl:text-[24px] font-medium text-foreground leading-[30.4px] tracking-[-3%]">
              A 3-LEVEL
              <br />
              REWARD SYSTEM
            </p>
            <button
              type="button"
              className="bg-button-background text-background font-primary text-[16px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium px-5 py-[13px] xl:px-5 xl:py-[14px] rounded-lg tracking-[-3%] leading-none outline -outline-offset-[3px] outline-background shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]"
            >
              Join Lemvest
            </button>
          </div>

          {/* Right side - table */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-muted-background dark:bg-white text-black rounded-lg px-4 py-7 md:py-3 lg:px-3 lg:py-4 xl:py-8 flex items-center justify-center text-center font-primary text-[14px] xl:text-[16px]  font-medium md:uppercase leading-[16px] md:leading-[20px] tracking-[-2%] md:tracking-[1.5%] xl: tracking-[-2%] mb-2">
                Level
              </div>
              <div className="bg-[#17428C] text-white rounded-lg px-4 py-7  md:py-3 lg:px-3 lg:py-4 xl:py-8 flex items-center justify-center text-center font-primary text-[14px] xl:text-[16px] font-medium md:uppercase leading-[16px] md:leading-[20px] tracking-[-1%] xl:tracking-[-2%] mb-2">
                Affiliates
              </div>
              <div className="bg-muted-background dark:bg-white text-black rounded-lg px-4 py-7 md:py-3 lg:px-3 lg:py-4 xl:py-8 flex items-center justify-center text-center font-primary text-[14px] xl:text-[16px] font-medium md:uppercase leading-[16px] md:leading-[20px] tracking-[-1%] xl:tracking-[-2%] mb-2">
                Commission
                <br className="md:hidden" /> per sale
              </div>
            </div>

            {/* Level rows */}
            {levels.map((row) => (
              <div key={row.level} className="grid grid-cols-3 gap-3">
                <div className="bg-muted-background rounded-lg px-3 py-7 md:px-4 md:py-4 lg:py-5 xl:py-7 flex items-center justify-center text-center font-secondary text-[16px] leading-[130%] tracking-[-3%] text-muted dark:text-muted-foreground">
                  {row.level}
                </div>
                <div className="bg-muted-background rounded-lg px-3 py-7 md:px-4 md:py-4 lg:py-5 xl:py-7 flex items-center justify-center text-center font-secondary text-[16px] leading-[130%] tracking-[-3%] text-muted dark:text-muted-foreground">
                  {row.affiliates}
                </div>
                <div className="bg-muted-background rounded-lg px-3 py-7 md:px-4 md:py-4 lg:py-5 xl:py-7 flex items-center justify-center text-center font-secondary text-[16px] leading-[130%] tracking-[-3%] text-muted dark:text-muted-foreground">
                  {row.commission}
                </div>
              </div>
            ))}

            {/* Bonus rewards label */}
            <div className="flex items-center gap-3 mt-2 mb-2">
              <span className="font-secondary text-[12px] lg:text-[14px] xl:text-[16px] leading-[130%] tracking-[-3%] text-muted dark:text-muted-foreground uppercase  whitespace-nowrap">
                Bonus Rewards
              </span>
              <span className="flex-1 border-t border-dashed border-muted-foreground/30" />
            </div>

            {/* Bonus reward cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {bonusRewards.map((item) => (
                <div
                  key={item.referrals}
                  className="bg-muted-background rounded-lg px-5 py-5 flex flex-col gap-1"
                >
                  <span className="font-secondary text-[12px] lg:text-[14px] xl:text-[16px] leading-[130%] tracking-[-3%] text-muted dark:text-[#bababa]">
                    {item.referrals}
                  </span>
                  <span className="font-primary text-[18px] lg:text-[20px] xl:text-[24px] leading-[20px] tracking-[-2%] font-medium text-foreground">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 lg:mt-4 xl:mt-8 pt-4  ">
              {notes.map((note) => (
                <div
                  key={note}
                  className="bg-muted-background rounded-xl px-5 py-4 flex items-center justify-center text-center"
                >
                  <span className="font-secondary text-[12px] lg:text-[14px] xl:text-[16px] leadimg-[130%] tracking-[-3%] text-muted dark:text-[#bababa] w-[90%] lg:w-[80%] xl:w-[75%]">
                    {note}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
          {/* Left side content repeated for mobile, shown below table */}
          <div className="flex md:hidden flex-col items-center text-center gap-5 mt-14">
            <p className="font-primary text-2xl font-medium text-foreground leading-snug">
              A 3-LEVEL
              <br />
              REWARD SYSTEM
            </p>
            <button
              type="button"
              className="bg-[#17428C] text-white font-primary text-[16px] tracking-[-3%] font-medium px-5 py-3 rounded-lg -outline-offset-[3px] outline-black shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]"
            >
              Join Lemvest
            </button>
          </div>
      </div>
    </section>
  );
}
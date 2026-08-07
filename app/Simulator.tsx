const statRows = [
  { label: "Average Win Per Trade", value: "+200 $", color: "text-foreground" },
  { label: "Average Loss Per Trade", value: "-100 $", color: "text-red-500" },
  { label: "Profit Factor", value: "3.71", color: "text-orange-500" },
  { label: "Win Rate", value: "65%", color: "text-foreground" },
  { label: "Risk / Reward", value: "1 : 2", color: "text-foreground" },
];

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-muted dark:text-muted-foreground shrink-0">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 11v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function TrendUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-background  shrink-0">
      <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-background  shrink-0">
      <path d="M3 7l6 6 4-4 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 17h7v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-background  shrink-0">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
      <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TrendUpIconGreen() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-background dark:text-[#6affbd]  shrink-0">
      <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Direct drop-in of the Figma-exported chart SVG.
 * idSuffix keeps gradient/clipPath ids unique per instance,
 * since this component renders once for desktop and once for mobile.
 */
function CapitalEvolutionChart({ idSuffix }: { idSuffix: string }) {
  const clipId = `chartClip-${idSuffix}`;
  const gradId = `chartGrad-${idSuffix}`;

  return (
    <svg
      viewBox="0 0 291 184"
      fill="none"
      preserveAspectRatio="none"
      className="w-full h-full block"
    >
      <g clipPath={`url(#${clipId})`}>
        <path d="M28.2305 144.941H287.434" stroke="#EDEEF1" strokeDasharray="2 4" />
        <path d="M25.6641 168L287.434 168" stroke="#EDEEF1" />
        <path d="M28.2305 111.741H287.434" stroke="#EDEEF1" strokeDasharray="2 4" />
        <path d="M28.2305 78.5413H287.434" stroke="#EDEEF1" strokeDasharray="2 4" />
        <path d="M28.2305 12.1411H287.434" stroke="#EDEEF1" strokeDasharray="2 4" />
        <path d="M44 8L44 171" stroke="#EDEEF1" />
        <path d="M28.2305 45.1411H287.434" stroke="#EDEEF1" strokeDasharray="2 4" />

        {/* y-axis labels (500 - 3,000) */}
        <text x="10" y="181" fontSize="9" fill="currentColor" opacity="0.7" className=" text-muted dark:text-white font-secondary">500 $</text>
        <text x="6" y="148" fontSize="9" fill="currentColor" opacity="0.7" className="text-muted dark:text-white font-secondary">1,000 $</text>
        <text x="6" y="115" fontSize="9" fill="currentColor" opacity="0.7" className="text-muted dark:text-white font-secondary">1,500 $</text>
        <text x="6" y="82" fontSize="9" fill="currentColor" opacity="0.7" className="text-muted dark:text-white font-secondary">2,000 $</text>
        <text x="6" y="49" fontSize="9" fill="currentColor" opacity="0.7" className="text-muted dark:text-white font-secondary">2,560 $</text>
        <text x="6" y="16" fontSize="9" fill="currentColor" opacity="0.7" className="text-muted dark:text-white font-secondary">3,000 $</text>

        {/* x-axis labels (0 - 10) */}
        {["0","1","2","3","4","5","6","7","8","9","10"].map((n, i, arr) => (
          <text
            key={n}
            x={47 + i * 24.4}
            y="181"
            fontSize="9"
            fill="currentColor"
            opacity="0.7"
            textAnchor={i === arr.length - 1 ? "end" : "middle"}
            className="text-muted dark:text-white font-secondary"
          >
            {n}
          </text>
        ))}
      </g>

      <path
        d="M63.7858 136.379L44.5 154.442V168.488H288.758V22.4077L276.153 39.975C273.972 43.0146 270.344 44.6716 266.619 44.3297C263.193 44.0154 259.829 45.3912 257.606 48.0163L252.679 53.8336C251.592 55.1166 250.332 56.2427 248.936 57.1797L236.755 65.3554C234.371 66.9551 231.216 66.7813 229.023 64.9295C225.966 62.3488 221.32 63.1556 219.313 66.6157L214.959 74.1199C213.158 77.2239 209.601 78.8626 206.072 78.2147C203.726 77.7842 201.307 78.3588 199.406 79.7984L190.835 86.2876C188.375 88.15 185.482 89.3559 182.427 89.7919L179.444 90.2178C174.87 90.8707 170.717 93.2398 167.826 96.8439L166.752 98.1842C164.361 101.165 160.931 103.131 157.15 103.686C154.73 104.041 152.26 103.804 149.952 102.995L149.195 102.73C142.614 100.424 135.294 102.085 130.352 107.004L113.715 123.565C110.495 126.77 105.403 127.105 101.791 124.349C100.207 123.141 98.2703 122.487 96.2783 122.487H94.2205C90.1574 122.487 86.2639 124.116 83.4113 127.009L81.135 129.318C78.799 131.687 75.6105 133.021 72.2831 133.021C69.1271 133.021 66.0893 134.222 63.7858 136.379Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M44.5 154.442L63.7858 136.379C66.0893 134.222 69.1271 133.021 72.2831 133.021C75.6105 133.021 78.799 131.687 81.135 129.318L83.4113 127.009C86.2639 124.116 90.1574 122.487 94.2205 122.487H96.2783C98.2703 122.487 100.207 123.141 101.791 124.349C105.403 127.105 110.495 126.77 113.715 123.565L130.352 107.004C135.294 102.085 142.614 100.424 149.195 102.73L149.952 102.995C152.26 103.804 154.73 104.041 157.15 103.686C160.931 103.131 164.361 101.165 166.752 98.1842L167.826 96.8439C170.717 93.2398 174.87 90.8707 179.444 90.2178L182.427 89.7919C185.482 89.3559 188.375 88.15 190.835 86.2876L199.406 79.7984C201.307 78.3588 203.726 77.7842 206.072 78.2147C209.601 78.8626 213.158 77.2239 214.959 74.1199L219.313 66.6157C221.32 63.1556 225.966 62.3488 229.023 64.9295C231.216 66.7813 234.371 66.9551 236.755 65.3554L248.936 57.1798C250.332 56.2427 251.592 55.1166 252.679 53.8336L257.606 48.0163C259.829 45.3912 263.193 44.0154 266.619 44.3297C270.344 44.6716 273.972 43.0146 276.153 39.975L288.758 22.4077"
        stroke="#6AFFBD"
      />

      {[
        [47, 152], [58, 141], [68, 131], [78, 131], [90, 121], [109, 126],
        [118, 118], [129, 108], [140, 101], [162, 101], [173, 91], [191, 87],
        [202, 77], [213, 76], [223, 63], [243, 60], [255, 51], [262, 44],
        [272, 42], [281, 32], [288, 21],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="#6AFFBD" />
      ))}

      <defs>
        <linearGradient id={gradId} x1="167.405" y1="22.4077" x2="167.405" y2="168.488" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6AFFBD" />
          <stop offset="1" stopColor="#6AFFBD" stopOpacity="0" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect width="290" height="176" fill="white" transform="translate(0 8)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TradesBlock({ layout }: { layout: "desktop" | "mobile" }) {
  const gridCols = layout === "desktop" ? "grid-cols-2" : "grid-cols-3";
  return (
    <div className={`grid ${gridCols} gap-3 ${layout === "desktop" ? "h-full" : ""}`}>
      <div className="bg-muted-background rounded-2xl p-4 md:p-2 flex flex-col items-center gap-2 text-center">
        <span className="w-9 h-9 rounded-lg bg-button-background dark:bg-[#68C3C6] flex items-center justify-center">
          <TrendUpIcon />
        </span>
        <span className="font-secondary font-medium text-[10px] text-muted dark:text-muted-foreground uppercase tracking-[-3%] leading-[130%]">
          Winning Trades
        </span>
        <span className="font-primary text-[20px] font-medium text-foreground leading-[20px] tracking-[-2%]">13</span>
        <span className="font-secondary text-[12px] leading-[130%] tracking-[-3%] font-medium text-muted dark:text-muted-foreground -mt-2">65%</span>
      </div>

      <div className="bg-muted-background rounded-2xl p-4 md:p-2 flex flex-col items-center gap-2 text-center">
        <span className="w-9 h-9 rounded-lg bg-button-background dark:bg-[#68C3C6] flex items-center justify-center">
          <TrendDownIcon />
        </span>
        <span className="font-secondary text-[11px] md:text-xs text-muted dark:text-muted-foreground uppercase tracking-[-3%] leading-[130%]">
          Losing Trades
        </span>
        <span className="font-primary text-[20px] font-medium  leading-[20px] tracking-[-2%] text-foreground">7</span>
        <span className="font-secondary text-[12px] leading-[130%] tracking-[-3%] font-medium  text-muted dark:text-muted-foreground -mt-2">35%</span>
      </div>

      <div
        className={`bg-muted-background rounded-2xl p-4 md:p-2 flex flex-col items-center gap-2 text-center ${
          layout === "desktop" ? "col-span-2" : ""
        }`}
      >
        <span className="w-9 h-9 rounded-lg bg-button-background dark:bg-[#68C3C6] flex items-center justify-center">
          <CalendarIcon />
        </span>
        <span className="font-secondary text-[10px]  text-muted dark:text-muted-foreground uppercase tracking-[-3%] leading-[130%]">
          Total Trades
        </span>
        <span className="font-primary text-xl md:text-2xl font-medium text-foreground">20</span>
        <span className="font-secondary text-[12px] leading-[130%] tracking-[-3%] font-medium text-muted dark:text-muted-foreground -mt-2">100%</span>
      </div>
    </div>
  );
}

function EstimatedResultBlock() {
  return (
    <div className="bg-muted-background rounded-2xl p-4 flex flex-col items-center justify-center gap-4 text-center h-full">
      <div className="flex flex-col gap-1">
        <span className="font-secondary text-[12px] text-muted dark:text-muted-foreground uppercase tracking-wide">
          Estimated Result
        </span>
        <span className="font-primary text-[24px] font-medium text-button-background dark:text-[#74fac5]">+1,900 $</span>
      </div>
      <span className="w-full h-px bg-white/20" />
      <div className="flex flex-col gap-1">
        <span className="font-secondary text-[12px] text-muted dark:text-muted-foreground uppercase tracking-wide">
          Final Capital
        </span>
        <span className="font-primary text-[24px] font-medium text-button-background dark:text-[#74fac5]">2,900 $</span>
      </div>
      <div className="w-full flex items-center justify-center gap-1.5 bg-button-background dark:bg-[#2a483c] text-[12px] rounded-xl px-3 py-2">
        <TrendUpIconGreen />
        <span className="font-primary text-background dark:text-[#6affbd] font-[400] text-[10px] md:text-[12px]">
          AN INCREASE OF +190.0% ON YOUR INITIAL CAPITAL
        </span>
      </div>
    </div>
  );
}

function StatsRows() {
  return (
    <div className="flex flex-col divide-y divide-muted-foreground/15">
      {statRows.map((row) => (
        <div key={row.label} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
          <span className="font-secondary text-sm text-muted dark:text-muted-foreground">{row.label}</span>
          <span className={`font-secondary text-sm font-medium ${row.color}`}>{row.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function Simulator() {
  return (
    <section className="py-20">
      <div className="max-width relative">
        <h2 className="text-center font-primary text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px] leading-[42px] lg:leading-[46px] xl:leading-[50px] tracking-[-2%] font-medium mb-4">
          <span className="text-foreground">Simulate your</span>
          <br />
          <span className="text-foreground">trading results</span>
        </h2>
        <p className="text-center font-primary text-[14px] tracking-[-2%]  text-muted dark:text-muted-foreground max-w-md mx-auto mb-10">
          Estimate how your capital can grow based on your win rate, risk/reward and capital.
        </p>

        {/* Input cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="bg-muted-background rounded-2xl p-4 flex flex-col gap-3">
            <span className="flex items-center gap-1.5 font-secondary text-sm text-muted dark:text-[#bbbbbb]">
              Initial Capital <InfoIcon />
            </span>
            <div className="flex items-center justify-between">
              <span className="font-primary text-[20px] lg:text-[22px] xl:text-[24px] font-medium text-foreground">1000</span>
              <span className="font-primary text-[20px] lg:text-[22px] xl:text-[24px] font-medium text-foreground">$</span>
            </div>
            <div className="flex flex-col gap-1">
              <input type="range" defaultValue={1000} min={100} max={100000} className="w-full accent-black dark:accent-white" />
              <div className="flex justify-between font-secondary text-xs text-muted dark:text-[#bbbbbb]">
                <span>100 $</span>
                <span>100,000 $</span>
              </div>
            </div>
          </div>

          <div className="bg-muted-background rounded-2xl p-4 flex flex-col gap-3">
            <span className="flex items-center gap-1.5 font-secondary text-sm text-[#484848] dark:text-[#bbbbbb]">
              Win Rate <InfoIcon />
            </span>
            <span className="font-primary text-2xl font-medium text-foreground">65%</span>
            <div className="flex flex-col gap-1">
              <input type="range" defaultValue={65} min={1} max={99} className="w-full accent-black dark:accent-white" />
              <div className="flex justify-between font-secondary text-xs text-muted dark:text-[#bbbbbb]">
                <span>1%</span>
                <span>99%</span>
              </div>
            </div>
          </div>

          <div className="bg-muted-background rounded-2xl p-4 flex flex-col gap-3">
            <span className="flex items-center gap-1.5 font-secondary text-sm text-muted dark:text-[#bbbbbb]">
              Risk / Reward <InfoIcon />
            </span>
            <span className="font-primary text-2xl font-medium text-foreground">1 : 2</span>
            <div className="flex gap-1 flex-wrap">
              {["1:1", "1:1.5", "1:2", "1:3"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className="rounded-lg py-1 px-3 font-primary tracking-[-2%] text-[14px] bg-white dark:bg-[#000005] text-muted dark:text-muted-foreground"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-muted-background rounded-2xl p-4 flex flex-col gap-3">
            <span className="flex items-center gap-1.5 font-secondary text-sm text-muted dark:text-[#bbbbbb]">
              Number of Trades <InfoIcon />
            </span>
            <span className="font-primary text-2xl font-medium text-foreground">20</span>
            <div className="flex flex-col gap-1">
              <input type="range" defaultValue={20} min={1} max={500} className="w-full accent-black dark:accent-white" />
              <div className="flex justify-between font-secondary text-xs text-muted dark:text-[#bbbbbb]">
                <span>1</span>
                <span>500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <span className="w-[20%] h-px bg-muted-foreground/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
          <h3 className="font-primary text-[24px] px-4 tracking-[-2%] font-medium text-foreground uppercase tracking-wide whitespace-nowrap">
            Simulation Results
          </h3>
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
          <span className="w-[20%] h-px bg-muted-foreground/20" />
        </div>

        {/* DESKTOP: trades | estimated result | chart+stats */}
        <div className="hidden md:grid grid-cols-[1.7fr_1.5fr_2.8fr] gap-3 mb-10 items-stretch">
          <TradesBlock layout="desktop" />
          <EstimatedResultBlock />
          <div className="bg-muted-background rounded-2xl p-5 flex flex-row gap-5 min-w-0">
            <div className="flex-1 min-w-0 flex flex-col justify-center gap-3">
              <span className="flex items-center gap-1.5 font-secondary text-[13px] text-foreground uppercase tracking-wide">
                Estimated Capital Evolution <InfoIcon />
              </span>
              <div className="w-full h-[190px]">
                <CapitalEvolutionChart idSuffix="desktop" />
              </div>
            </div>
            <span className="w-px bg-muted-foreground/15 shrink-0" />
            <div className="w-56 shrink-0 flex flex-col justify-center">
              <StatsRows />
            </div>
          </div>
        </div>

        {/* MOBILE: trades row | estimated result | chart card | stats card */}
        <div className="flex md:hidden flex-col gap-3 mb-10">
          <TradesBlock layout="mobile" />
          <EstimatedResultBlock />
          <div className="bg-muted-background rounded-2xl p-5 flex flex-col gap-4">
            <span className="flex items-center gap-1.5 font-secondary text-[13px] text-foreground uppercase tracking-wide">
              Estimated Capital Evolution <InfoIcon />
            </span>
            <div className="w-full h-[200px]">
              <CapitalEvolutionChart idSuffix="mobile" />
            </div>
            <div className="pt-2 border-t border-muted-foreground/15">
              <StatsRows />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="bg-button-background text-background font-primary text-[16px] font-medium  tracking-[-3%] px-6 py-3 rounded-lg outline outline-background -outline-offset-[3px] shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]"
          >
            Join Lemvest
          </button>
        </div>
      </div>
    </section>
  );
}
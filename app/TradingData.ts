export type CardSize = "lg" | "md" | "wide";

export interface TradingCardData {
  title: string;
  description: string;
  image: string;
  size: CardSize;
}

export const tradingCards: TradingCardData[] = [
  {
    title: "Morning Analysis",
    description:
      "Every morning, five days a week, receive a clear analysis of the key assets, along with the various scenarios to watch out for.",
    image: "/tradinggroup/1.png",
    size: "lg",
  },
  {
    title: "Educational Portal",
    description:
      "Training, psychology, in-depth analysis, news, performance trackers... everything is in one place to help you improve.",
    image: "/tradinggroup/2.png",
    size: "lg",
  },
  {
    title: "Trading Live",
    description:
      "Join live sessions with our traders to analyse the markets, study charts and discover investment ideas.",
    image: "/tradinggroup/3.png",
    size: "lg",
  },
  {
    title: "Market Opportunities",
    description:
      "From Monday to Friday, receive detailed trading ideas with a consistently positive risk-reward ratio to help you manage each opportunity more effectively.",
    image: "/tradinggroup/4.png",
    size: "md",
  },
  {
    title: "Private Coach",
    description:
      "Ask questions whenever you like and benefit from personalised support to help you progress with greater peace of mind.",
    image: "/tradinggroup/5.png",
    size: "md",
  },
  {
    title: "All-Level Academy",
    description:
      "Discover hours of videos combining technique, strategy and psychology to help you build a solid foundation in trading.",
    image: "/tradinggroup/6.png",
    size: "md",
  },
  {
    title: "Economic News",
    description:
      "Stay up to date with major economic events every day to better understand the markets and anticipate their impact.",
    image: "/tradinggroup/7.png",
    size: "wide",
  },
  {
    title: "Calculator",
    description:
      "Simulate each position before investing to optimise your money management and better manage the growth of your capital.",
    image: "/tradinggroup/8.png",
    size: "wide",
  },
];
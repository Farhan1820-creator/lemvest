import Image from "next/image";

const cards = [
  {
    title: "Student",
    description:
      "Take advantage of your free time to develop a skill that offers significant added value. Learn to invest wisely and gradually build a new source of income while preparing for your future.",
    imageLight: "/foryou/1-light.png",
    imageDark: "/foryou/1-dark.png",
    padding: "p-0"
  },
  {
    title: "Employee",
    description:
      "Don't rely solely on your salary. Learn how to make your money work for you through investing, and develop skills that will allow you to generate additional income over the long term.",
    imageLight: "/foryou/2-light.png",
    imageDark: "/foryou/2-dark.png",
    padding: "p-6"
  },
  {
    title: "On Your own",
    description:
      "Whether you're already passionate about the financial markets or an entrepreneur in another field, joining a comprehensive investment ecosystem will allow you to diversify your income, build your skills, and accelerate your financial growth.",
    imageLight: "/foryou/3-light.png",
    imageDark: "/foryou/3-dark.png",
    padding: "p-6"

  },
];

export default function ForYou() {
  return (
    <section>
      <div className="max-width relative pb-20 extra-padding -mt-2 md:mt-0">
        <div className="flex flex-col md:flex-row  md:justify-between gap-4 xl:gap-6 mb-8 xl:mb-10 ">
          <h2 className="font-primary text-[36px] md:text-[42px] lg:text-[48px] xl:text-[60px]  font-medium text-foreground leading-[36px] md:leading-[42px] lg:leading-[46px] xl:leading-[56px] tracking-[-3%]">
            <span className="text-muted-foreground">
            Lemvest is for you
            </span>
            <br />
            if your are...
          </h2>

          <button className="hidden md:inline-flex self-start items-center justify-center rounded-lg bg-button-background py-2 px-4 font-primary font-medium md:text-[12px] lg:text-[14px] xl:text-[16px] text-background outline outline-background -outline-offset-[3px] shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset]  tracking-[-3%] mt-3 xl:mt-0">
            Join Lemvest
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-7 md:gap-4 lg:gap-6  ">
          {cards.map((card) => (
            <div
              key={card.title}
              className=" w-full md:w-[320px]  lg:w-[364px]  xl:w-[384px]  rounded-2xl bg-muted-background p-2 xl:p-2 pt-6 md:pt-6 xl:pt-7 flex flex-col justify-between "
            >
              <div className="px-3 xl:px-4 w-[82%] md:w-[90%] lg:w-[80%] xl:w-[77%] mb-7 md:mb-6 lg:mb-8 xl:mb-4">
              <h3 className="font-primary text-[24px]  lg:text-[24px] xl:text-[24px] leading-[20px] tracking-[-2%] font-medium text-foreground mb-3 md:mb-3 xl:mb-3 ">
                {card.title}
              </h3>
              <p className="font-secondary font-medium text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] leading-[131%] tracking-[-3%] text-muted dark:text-muted-foreground  ">
                {card.description}
              </p>
              </div>

         <div className="relative w-full h-[350px] md:h-[300px] lg:h-[320px] xl:h-[340px] rounded-xl overflow-hidden bg-background">
  <Image
    src={card.imageDark}
    alt={card.title}
    fill
    className={`object-contain w-full h-full hidden dark:block ${card.padding}`}
  />
  <Image
    src={card.imageLight}
    alt={card.title}
    fill
    className={`object-contain w-full h-full block dark:hidden ${card.padding}`}
  />
</div>
            </div>
          ))}
        </div>
<div className="flex w-full items-center justify-center">        
  <button className="md:hidden  mt-8 inline-flex items-center justify-center rounded-lg bg-button-background px-4 py-2 font-primary text-[16px] font-medium text-background  outline outline-background -outline-offset-[3px] shadow-[1px_-1px_0px_0px_#000000_inset,2px_-3px_0px_0px_#00000040_inset] ">
          Join Lemvest
        </button>
        </div>

      </div>
    </section>
  );
}
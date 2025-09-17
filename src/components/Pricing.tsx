import { motion } from "motion/react";
import { cn } from "../lib/cn";
import Button, { type ColorType } from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

const Plan = ({
  name,
  price,
  features,
  bestFor,
  className,
  buttonType,
  divClassName,
}: {
  name: string;
  price: number;
  features: string[];
  bestFor: string;
  className?: string;
  divClassName?: string;
  buttonType?: ColorType;
}) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-[430px] flex-col items-center self-stretch rounded-[33px] border-2 bg-white p-9 md:max-lg:w-[430px]",
        className,
      )}
    >
      <h3 className="text-h3 text-center">{name}</h3>
      {/* Price */}
      <div className="items-end -space-y-2 text-center">
        {/*
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.18, 0.94, 1.12, 1] }}
          transition={{
            duration: 2.2,
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 1,
            ease: ["easeOut", "easeInOut", "easeOut", "easeInOut"],
          }}
         */}

        <motion.p
          initial={{ scale: 1.5 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-h2 font-semibold"
        >
          ${price}
        </motion.p>
        <p>per month</p>
      </div>
      {/* Features */}
      <ul className="mt-10 flex list-disc flex-col gap-4">
        {features.map((feature) => (
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={feature}
            className="pl-3"
          >
            {feature}
          </motion.li>
        ))}
      </ul>
      {/*  */}
      <p className="mt-10 max-w-[280px] border-t-2 pt-10">
        <strong>Best For</strong>: {bestFor}
      </p>
      {/*  */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        viewport={{ once: true }}
        className={cn("mt-20 w-full", divClassName)}
      >
        <Button
          colorType={buttonType || "transparent"}
          className={"border-secondary-green w-full border-2 !py-2.5"}
        >
          Get Started For Free
        </Button>
      </motion.div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="overflow-x-clip pb-[170px] max-md:pb-24">
      <div className="common-max-width mx-auto">
        <SectionHeader
          title="Pricing"
          subtitle="Find your perfect plan: tailored pricing for every need"
        />
        {/* max-w-[calc(460*3px)] */}
        <div className="common-x-padding relative justify-center gap-y-5 self-center max-lg:grid lg:flex lg:-space-x-16">
          {/* Left Image */}
          <div className="absolute top-1/2 -left-[2%] -z-1 h-[90%] w-md -translate-y-1/2 rounded-l-[33px] bg-[url(/assets/pricing/artichokes.webp)] bg-cover bg-[-90px_0%] max-lg:hidden" />
          {/* Right Image */}
          <div className="absolute top-1/2 right-[2%] -z-1 h-[90%] w-md -translate-y-1/2 rounded-r-[33px] bg-[url(/assets/pricing/artichokes.webp)] bg-cover bg-[90px_0%] max-lg:hidden" />
          <Plan
            name="Free Plan"
            price={0}
            features={[
              "Basic AI meal planning",
              "Limited recipe access",
              "Manual grocery list creation",
            ]}
            bestFor="Those who want to explore thae platform's basic functionalities."
            className="lg:max-w-[460px] lg:pr-21 xl:pr-25"
            divClassName="lg:mt-auto"
          />
          <Plan
            name="Standard Plan"
            price={9.99}
            features={[
              "Personalized AI meal plans",
              "Access to all recipes",
              "Automated grocery lists",
              "Nutritional insights",
            ]}
            bestFor="Individuals and families seeking convenient and personalized meal solutions."
            buttonType="dark"
            className="bg-secondary-light-green z-10 lg:scale-y-[1.06]"
          />
          <Plan
            name="Premium Plan"
            price={19.99}
            features={[
              "All Standard Plan features",
              "Exclusive gourmet recipes",
              "Priority customer support",
              "Early access to new features",
            ]}
            bestFor="Food enthusiasts and those desiring a premium meal planning experience."
            className="lg:max-w-[460px] lg:pl-21 xl:pl-25"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import { cn } from "../lib/cn";
import SectionHeader from "./ui/SectionHeader";
import bag from "/assets/hero/bag.jpg";
import markus from "/assets/hero/markus.jpg";
import { motion } from "motion/react";

const Benefit = ({
  title,
  description,
  className,
  descriptionClassName,
  titleClassName,
}: {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-secondary-light-green flex h-full max-w-[320px] flex-col gap-y-7 rounded-[250px] px-12 py-18",
        className,
      )}
    >
      <h3 className={`text-h3 leading-h3 ${titleClassName}`}>{title}</h3>
      <p className={cn("leading-p", descriptionClassName)}>{description}</p>
    </motion.div>
  );
};

const Benefits = () => {
  return (
    <section className="pb-[130px] max-md:pb-24">
      <div className="common-max-width common-x-padding mx-auto">
        <SectionHeader
          title="Benefits"
          description="Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet."
        />
        <div className="mx-auto mt-20 grid items-center justify-items-center gap-x-3 md:grid-cols-2 md:max-lg:max-w-[680px] lg:grid-cols-3 lg:max-xl:max-w-[1024px] xl:grid-cols-4">
          <Benefit
            title="Personalized Nutrition"
            description="Get meal plans tailored to your unique dietary needs, preferences, and
        goals, ensuring a balanced and enjoyable diet."
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square h-full w-full max-w-[320px] rounded-[250px] max-md:hidden lg:max-xl:hidden"
            src={bag}
            alt="Bag with foodstuffs"
          />
          <Benefit
            title="Time-Saving Convenience"
            description="Say goodbye to meal planning stress. Our AI-driven platform simplifies your weekly meal preparation, saving you valuable time."
            className="bg-transparent"
          />
          <Benefit
            title="Healthier Eating Habits"
            description="Easily adopt a healthier lifestyle with nutrient-rich meal plans and educational content on nutrition and wellness."
            className="bg-primary md:max-lg:bg-transparent"
          />
          <Benefit
            title="Cost-Effective Shopping"
            description="Reduce food waste and save money with efficient grocery shopping lists that align perfectly with your meal plans."
            className="bg-transparent"
          />

          <Benefit
            title="Seamless Grocery Delivery"
            description="Enjoy the convenience of having all your meal ingredients delivered right to your doorstep through our local grocery store partnerships."
            className="lg:max-xl:bg-secondary-green md:max-lg:bg-primary lg:max-xl:text-secondary-light-green bg-transparent"
          />
          <Benefit
            title="Community Support"
            description="Join a community of like-minded individuals, share experiences, recipes, and tips, and get motivated on your journey to healthier eating."
            className="bg-secondary-green lg:max-xl:bg-transparent"
            titleClassName="text-secondary-light-green lg:max-xl:text-secondary-green"
            descriptionClassName="text-primary lg:max-xl:text-secondary-green"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square w-full max-w-[320px] rounded-full max-md:hidden lg:max-xl:hidden"
            src={markus}
            alt="Bag with foodstuffs"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;

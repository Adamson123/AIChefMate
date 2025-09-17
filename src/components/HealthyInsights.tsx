import { cn } from "../lib/cn";
import ArrowSvg from "./ui/ArrowSvg";
import Button from "./ui/Button";
import NotchedSection from "./ui/NotchedSection";
import SectionHeader from "./ui/SectionHeader";
import vegetable from "/assets/insights/vegetable.jpg";
import food from "/assets/insights/food.jpg";
import plant from "/assets/hero/plant.jpg";
import { motion } from "motion/react";

const InsightsArticleCard = ({
  image,
  title,
  className,
  imageClassName,
}: {
  image: string;
  title: string;
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 rounded-[35px] bg-white p-6",
        className,
      )}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={cn(
          "aspect-square w-full rounded-[35px] object-cover",
          imageClassName,
        )}
        src={image}
        alt="Food image"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-start gap-5"
      >
        <h3 className="text-h3 leading-h3">{title}</h3>
        <Button
          colorType="light"
          className="hover:[&_path]:fill-secondary-light-green flex items-center gap-2"
        >
          Read Article <ArrowSvg />
        </Button>
      </motion.div>
    </div>
  );
};

/**
 * HealthyInsights Component

 * Layout & Responsiveness:
 * - Wrapper: Centers content with shared max width + horizontal padding utilities.
 * - Grid:
 *   - Base (mobile): Single-column vertical stack (implicit 1 col).
 *   - md: Switches to a 2‑column grid (`md:grid-cols-2`).
 *   - lg: Expands to a 3‑column grid (`lg:grid-cols-3`).
 * - Third Card (Balancing Nutrients):
 *   - Between the custom 628px breakpoint and large (`min-[628px]:max-lg`):
 *     - Becomes a horizontal flex row (`flex-row`) with image constrained to ~30% width.
 *     - Centers items vertically (`items-center`).
 *     - Spans both columns when the grid is 2 columns (`md:max-lg:col-span-2`),
 *       ensuring visual balance before the 3‑column layout kicks in at `lg`.
 * - First & Second Cards:
 *   - Between 628px and md:
 *     - Switch to horizontal layout with image taking ~30% width.
 *     - Centered vertical alignment (`items-center`) only on max-md.
 *

 * @returns A responsive, accessible section displaying highlighted nutrition articles.
 */
const HealthyInsights = () => {
  return (
    <NotchedSection notchPos="tl" className="py-17">
      <div className="common-max-width common-x-padding mx-auto">
        <SectionHeader
          title="Healthy Insights"
          description="Latest News, Expert Blogs, and Nutritional Learning"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <InsightsArticleCard
            image={vegetable}
            title="Mastering Meal Prep: Time-Saving Tips for Busy Weekdays"
            className="max-md:items-center min-[628px]:max-md:flex-row"
            imageClassName="min-[628px]:max-md:w-[30%]"
          />
          <InsightsArticleCard
            image={food}
            title="The Power of Plant-Based: Benefits Beyond the Plate"
            className="max-md:items-center min-[628px]:max-md:flex-row"
            imageClassName="min-[628px]:max-md:w-[30%]"
          />
          <InsightsArticleCard
            image={plant}
            title="Balancing Nutrients: A Guide to a Well-Rounded Diet"
            className="min-[628px]:max-lg:flex-row min-[628px]:max-lg:items-center md:max-lg:col-span-2"
            imageClassName="min-[628px]:max-lg:w-[30%]"
          />
        </div>
      </div>
    </NotchedSection>
  );
};

export default HealthyInsights;

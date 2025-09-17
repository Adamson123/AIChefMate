import { useState } from "react";
import ArrowSvg from "./ui/ArrowSvg";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";
import { cn } from "../lib/cn";
import { motion } from "motion/react";

const QuestionAndAnswer = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // w-[calc(var(--max-section-width)/2)]
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex items-start gap-5 rounded-2xl px-9 transition-all duration-500 max-lg:max-w-[600px] max-md:px-5",
        isOpen && "bg-primary py-9 max-md:py-5",
      )}
    >
      <Button
        onClick={() => setIsOpen(!isOpen)}
        colorType="transparent-light"
        className={cn("!p-4", isOpen && "bg-secondary-light-green")}
      >
        <ArrowSvg
          className={cn(
            "h-3.5 w-3.5 transition-all duration-300",
            isOpen && "rotate-90",
          )}
        />
      </Button>
      <div className="mt-3">
        {/* Question */}
        <p className="leading-p font-semibold">{question}</p>
        {/* Answer */}
        <p
          className={cn(
            "leading-p h-0 overflow-hidden transition-all duration-500",
            isOpen && "mt-5 h-auto",
          )}
        >
          {answer}
        </p>
      </div>
    </motion.div>
  );
};

const AskedQuestions = () => {
  return (
    <section className="overflow-x-clip pb-[170px] max-md:pb-24">
      <div className="common-max-width common-x-padding mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Meal planning made easy: your questions, answered"
        />
        {/* grid items-start gap-5 lg:grid-cols-2 */}
        <div className="grid items-start gap-5 lg:grid-cols-2">
          <div className="grid justify-center gap-5">
            <QuestionAndAnswer
              question="How does the AI create personalized meal plans?"
              answer="Our AI system analyzes your dietary preferences, health goals, and
          budget to curate meal plans that are unique to you. It continually
          learns from your feedback and choices to improve its suggestions over
          time."
            />
            <QuestionAndAnswer
              question="What types of cuisines can the meal plans include?"
              answer="Our meal plans can include a wide variety of cuisines, from Mediterranean and Asian to vegetarian and keto. You can specify your favorite cuisines, and the AI will incorporate them into your meal plan."
            />
            <QuestionAndAnswer
              question="Can I change my meal plan after it's been created?"
              answer="Yes, you can modify your meal plan at any time. Whether you want to swap out certain meals, adjust portion sizes, or change dietary preferences, our AI will adapt to your needs."
            />
          </div>
          <div className="grid justify-center gap-5">
            <QuestionAndAnswer
              question="Can I integrate special dietary requirements into my meal plan?"
              answer="Absolutely! Whether you're vegan, gluten-free, or have specific allergies, our AI can tailor meal plans to accommodate your dietary needs."
            />
            <QuestionAndAnswer
              question="How often are the meal plans updated?"
              answer="Meal plans can be updated weekly or monthly, depending on your preference. You can also request updates whenever you like to keep things fresh and exciting."
            />
            <QuestionAndAnswer
              question="Is there a mobile app available for meal planning on the go?"
              answer="Yes, we offer a mobile app that allows you to access your meal plans, grocery lists, and recipes anytime, anywhere. The app is available for both iOS and Android devices."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskedQuestions;

import SectionHeader from "./ui/SectionHeader";
import QuoteSvg from "./ui/QuoteSvg";
import { motion } from "motion/react";
import emily from "/assets/testimonials/emily.jpg";
import mark from "/assets/testimonials/mark.jpg";
import sarah from "/assets/testimonials/sarah.jpg";
import rebecca from "/assets/testimonials/rebecca.jpg";

const Testimonial = ({
  comment,
  image,
  name,
}: {
  comment: string;
  image: string;
  name: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-primary hover:bg-secondary-green rounded-3xl p-10 transition-colors duration-500 hover:text-white hover:[&_path]:fill-white"
    >
      {/*Comment */}
      <p>{comment}</p>
      {/* quote */}
      <QuoteSvg className="ml-auto size-6" />
      {/* Profile */}
      <div className="mt-5 flex items-center gap-3">
        <img
          className="size-13 rounded-full object-cover"
          src={image}
          alt="_ profile image"
        />

        <span>{name}</span>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="pb-[130px] max-md:pb-24">
      <div className="common-max-width common-x-padding mx-auto">
        <SectionHeader
          title="Testimonials"
          subtitle="Real stories from satisfied users: see how our platform changes lives"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Testimonial
            image={emily}
            name="Emily R."
            comment=" Since using AIChefMate, I've rediscovered my love for cooking! The meal
        plans are easy and delicious. It's been a game-changer for my busy
        lifestyle."
          />
          <Testimonial
            image={mark}
            name="Mark T."
            comment="I never knew healthy eating could be this simple and satisfying. Thanks to AIChefMate, my family enjoys diverse, nutritious meals every day."
          />
          <Testimonial
            image={sarah}
            name="Sarah J."
            comment="The grocery savings have been incredible! Plus, every meal feels tailored just for me. I'm eating better and feeling great. A big thumbs up!"
          />
          <Testimonial
            image={rebecca}
            name="Rebecca S."
            comment="Switching to AIChefMate has been a revelation for my meal prep routine. The AI-generated plans are spot-on with my tastes and nutritional needs, making healthy eating effortless and enjoyable."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

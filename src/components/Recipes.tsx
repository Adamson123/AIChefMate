import ArrowSvg from "./ui/ArrowSvg";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";
import first from "/assets/recipes/first.png";

const LeftContent = () => {
  return (
    <div className="max-w-[750px]">
      {/* First */}
      <div className="relative grid rounded-[50px] border-2 p-7 md:grid-cols-[70%_30%] lg:max-xl:grid-cols-1">
        {/* Image Space */}
        <div className="h-40 md:hidden lg:max-xl:block" />
        <div className="flex flex-col items-start gap-7 max-md:items-center">
          <h3 className="text-h3 max-md:text-center">
            Savory Quinoa and Roasted Vegetable Bowl
          </h3>
          <Button
            colorType="light"
            className="changeArrowColorOnHover flex items-center gap-x-3 border-2"
          >
            Learn More <ArrowSvg />
          </Button>
        </div>
        <img
          className="absolute right-0 aspect-square w-[35%] object-cover max-md:top-0 max-md:left-1/2 max-md:h-50 max-md:-translate-x-1/2 lg:max-xl:left-0 lg:max-xl:h-50"
          src={first}
          alt="Recipe 1"
        />
        {/* Image Space */}
        <div className="max-md:hidden lg:max-xl:hidden" />
      </div>
      {/* Second */}
      <div></div>
      {/* Third */}
      <div></div>
    </div>
  );
};

const Recipes = () => {
  return (
    <section>
      <div className="common-max-width common-x-padding mx-auto">
        <SectionHeader
          title="Recipes"
          description="Recipes crafted by AI, personalized to perfectly align with your unique dietary needs and flavor preferences."
        />
        {/* Content */}
        <div className="grid justify-center lg:grid-cols-2">
          {/* Left */}
          <LeftContent />
          {/* Right */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;

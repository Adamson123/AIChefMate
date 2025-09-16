import SectionHeader from "../ui/SectionHeader";
import RecipeLeftContent from "./RecipeLeftContent";
import RecipeRightContent from "./RecipeRightContent";

const Recipes = () => {
  return (
    <section className="pb-[130px] max-md:pb-24">
      <div className="common-max-width common-x-padding mx-auto">
        <SectionHeader
          title="Recipes"
          description="Recipes crafted by AI, personalized to perfectly align with your unique dietary needs and flavor preferences."
        />
        {/* Content */}
        <div className="grid justify-center gap-5 lg:grid-cols-2">
          {/* Left */}
          <RecipeLeftContent />
          {/* Right */}
          <RecipeRightContent />
        </div>
      </div>
    </section>
  );
};

export default Recipes;

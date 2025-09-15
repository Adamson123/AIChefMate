import SectionHeader from "../ui/SectionHeader";
import RecipeLeftContent from "./RecipeLeftContent";

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
          <RecipeLeftContent />
          {/* Right */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;

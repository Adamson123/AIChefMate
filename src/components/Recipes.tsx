import SectionHeader from "./ui/SectionHeader";

const Recipes = () => {
  return (
    <section>
      <div className="common-max-width common-x-padding mx-auto">
        <SectionHeader
          title="Recipes"
          description="Recipes crafted by AI, personalized to perfectly align with your unique dietary needs and flavor preferences."
        />
        {/* Content */}
        <div>
          {/* Left */}
          <div></div>

          {/* Right */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;

import ArrowSvg from "../ui/ArrowSvg";
import type { HowItWorkFeaturesType } from "./HowItWorks";
import Button from "../ui/Button";

const LeftContent = ({
  features,
  next,
  prev,
}: {
  features: HowItWorkFeaturesType;
  prev: () => void;
  next: () => void;
}) => {
  return (
    <div className="flex flex-col max-lg:items-center max-lg:text-center lg:w-[50%]">
      <div className="mb-5">
        <h2 className="text-h2">0{features[2].index}</h2>
        <h3 className="text-h3">{features[2].title}</h3>
      </div>
      <p className="mb-15 h-22 max-w-150 max-md:h-15 md:max-lg:h-17">
        {features[2].description}
      </p>
      <div className="mb-10 flex gap-x-4 max-lg:hidden">
        <Button
          onClick={prev}
          colorType="transparent"
          className="changeArrowColorOnHover py-4 md:py-4 xl:py-4"
        >
          <ArrowSvg className="rotate-180" />
        </Button>
        <Button
          onClick={next}
          colorType="light"
          className="changeArrowColorOnHover border-2"
        >
          <ArrowSvg />
        </Button>
      </div>
      <h3 className="text-h3 translate-y-[30%] max-xl:translate-y-5 max-lg:hidden">
        0{features[2].index}/03
      </h3>
    </div>
  );
};

export default LeftContent;

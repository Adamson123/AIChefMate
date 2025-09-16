import explore from "/assets/recipes/explore.jpg";
import { motion } from "motion/react";
import ArrowSvg from "../ui/ArrowSvg";
import Button from "../ui/Button";

const RecipeRightContent = () => {
  return (
    <div className="relative h-full max-w-[750px]">
      {/* Big devices */}
      <div className="max-[650px]:hidden">
        <svg width="0" height="0">
          <defs>
            <clipPath id="curveB" clipPathUnits="objectBoundingBox">
              {/* Lg */}
              <path
                className="max-lg:hidden"
                d="M0.0667 0.1 L0.4 0.1 A0.0667 0.05 0 0 0 0.4667 0.05 L0.4667 0.05 A0.0667 0.05 0 0 1 0.5333 0 L0.9333 0 A0.0667 0.05 0 0 1 1 0.05 L1 0.95 A0.0667 0.05 0 0 1 0.9333 1 L0.0667 1 A0.0667 0.05 0 0 1 0 0.95 L0 0.15 A0.0667 0.05 0 0 1 0.0667 0.1 Z"
              ></path>
              {/* Md */}
              <path
                className="lg:hidden"
                d="M0.0667 0.1 
                L0.4 0.1 
                A0.0667 0.05 0 0 0 0.4667 0.05 
                L0.4667 0.05 
                A0.0667 0.05 0 0 1 0.5333 0 
                L0.9333 0 
                A0.0667 0.05 0 0 1 1 0.05 
                L1 0.45 
                A0.0667 0.05 0 0 1 0.9333 0.5 
                L0.0667 0.5 
                A0.0667 0.05 0 0 1 0 0.45 
                L0 0.15 
                A0.0667 0.05 0 0 1 0.0667 0.1 Z"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Nav */}
        <div className="absolute top-0 left-[4%] flex h-[8%] w-[40%] items-center justify-end gap-4">
          <h4 className="text-md leading-5"> Explore more recipes</h4>
          <Button
            colorType="transparent"
            className="changeArrowColorOnHover h-full max-h-[50px]"
          >
            <ArrowSvg />
          </Button>
        </div>
      </div>
      {/* Samll devices */}
      <div className="min-[650px]:hidden">
        <svg width="0" height="0">
          <defs>
            <clipPath id="curveB2" clipPathUnits="objectBoundingBox">
              {/* <path d="M0 0.3 Q0 0.2 0.091 0.2 L0.636 0.2 Q0.727 0.2 0.727 0.1 0.727 0 0.818 0 L0.909 0 Q1 0 1 0.1 L1 0.9 Q1 1 0.909 1 L0.091 1 Q0 1 0 0.9 L0 0.3"></path> */}
              <path d="M0 .3 Q0 .2 .091 .2 L.636 .2 Q.727 .2 .727 .1 Q.727 0 .818 0 L.909 0 Q1 0 1 .1 L1 .7 Q1 .8 .909 .8 L.091 .8 Q0 .8 0 .7 Z" />
            </clipPath>
          </defs>
        </svg>

        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="absolute top-[5%] left-[4%] flex h-[12%] w-[67%] items-center justify-end gap-3"
        >
          <h4 className="min-[450px]:text-md leading-3 max-[450px]:text-sm">
            Explore more recipes
          </h4>
          <Button
            colorType="transparent"
            className="changeArrowColorOnHover h-full max-h-[50px] min-h-[35px]"
          >
            <ArrowSvg className="h-[100%] max-h-4 min-h-3 w-[100%] max-w-4 min-w-3" />
          </Button>
        </motion.div>
      </div>
      {/* Image */}
      <img
        src={explore}
        alt="Exploring food"
        className="aspect-[1/0.8] object-cover max-[650px]:[clip-path:url(#curveB2)] min-[650px]:[clip-path:url(#curveB)] md:aspect-square lg:h-full"
      />
    </div>
  );
};

export default RecipeRightContent;

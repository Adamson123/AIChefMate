import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

// const SectionHeader = ({
//   title,
//   subtitle,
//   bgClassName,
//   titleClassName,
// }: {
//   title: string;
//   subtitle: string;
//   bgClassName?: string;
//   titleClassName?: string;
// }) => {
//   return (
//     <div className="relative mb-18 flex items-center gap-10 max-lg:mb-10 max-md:gap-6">
//       <div className="relative z-10 flex items-center self-stretch pr-10 max-md:pr-6">
//         <h2 className={cn("text-h2 leading-h2", titleClassName)}>{title}</h2>
//         <div
//           className={cn(
//             "absolute -inset-y-3 -right-4 -left-100 -z-1 bg-white",
//             bgClassName,
//           )}
//         />
//         <motion.div
//           initial={{ opacity: 0, scale: 0 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="bg-secondary-green absolute -top-2 right-0 -bottom-3 w-[1px] rotate-30"
//         />
//       </div>
//       <div className="max-w-110">
//         <motion.p
//           initial={{ opacity: 0, x: -200 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="leading-p -z-1"
//         >
//           {subtitle}
//         </motion.p>
//       </div>
//     </div>
//   );
// };

const SectionHeader = ({
  title,
  subtitle,
  // bgClassName,
  titleClassName,
}: {
  title: string;
  subtitle: string;
  // bgClassName?: string;
  titleClassName?: string;
}) => {
  return (
    <div className="relative mb-18 flex flex-col items-center gap-3 px-4 text-center max-md:mb-10">
      <div>
        <h2 className={cn("text-h2 leading-h2", titleClassName)}>{title}</h2>
      </div>
      <div className="border-secondary-green max-w-150 border-t pt-3">
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="leading-p -z-1"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default SectionHeader;

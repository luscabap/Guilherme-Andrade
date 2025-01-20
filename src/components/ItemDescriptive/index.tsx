import { motion } from "framer-motion";
import { IconBaseProps } from "react-icons";

import { useThemeContext } from "@/hooks/useThemeContext";

type ItemDescriptiveProps = {
  icon: IconBaseProps;
  title: string;
  description: string;
  primary: boolean;
};

export const ItemDescriptive = ({
  description,
  icon,
  title,
  primary,
}: ItemDescriptiveProps) => {
  const { darkTheme } = useThemeContext();
  const initialScaleX = primary ? -100 : 100;

  return (
    <motion.div
      className={` ${
        darkTheme ? "bg-colorLight" : "bg-colorSecondary "
      } rounded-lg px-8 pt-4 pb-4 min-h-80 flex flex-col items-center justify-start gap-3 shadow-2xl w-full md:w-3/4 xl:w-1/2 2xl:w-1/3 2xl:min-h-[250px]`}
      initial={{ x: initialScaleX }}
      whileInView={{ x: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <div
        className={`flex items-center justify-center gap-2 
      ${primary ? "flex-row" : "flex-row-reverse"}`}
      >
        <h4
          className={` ${
            darkTheme ? "text-colorPrimary" : "text-colorDark"
          } underline 
        text-lg md:text-2xl`}
        >
          {title}
        </h4>
        <>{icon}</>
      </div>
      <p className="text-colorDark indent-4 md:text-lg">{description}</p>
    </motion.div>
  );
};

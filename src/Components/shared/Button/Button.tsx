import classnames from "classnames";
import { useState, FC, ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";

interface ButtonProps {
  size: "sm" | "md" | "lg" | "xl";
  bgColor: string;
  textColor: string;
  children: ReactNode;
  icon: boolean;
}

const Button: FC<ButtonProps> = ({
  size,
  bgColor,
  textColor,
  children,
  icon = false,
}) => {
  return (
    <>
      {icon ? (
        <button
          className={classnames(
            `text-${textColor} py-3 px-4 rounded-md flex items-center gap-3 text-white`,
            {
              "text-sm": size === "sm",
              "text-lg": size === "lg",
            }
          )}
          style={{ backgroundColor: bgColor }}
        >
          {children}
          <BsArrowRight className="text-[#CDA274]" />
        </button>
      ) : (
        <button
          className={classnames(
            `text-${textColor} py-2 px-4 rounded-md flex items-center gap-3`,
            {
              "text-sm": size === "sm",
              "text-lg": size === "lg",
            }
          )}
          style={{ backgroundColor: bgColor }}
        >
          {children}
        </button>
      )}
    </>
  );
};
export default Button;

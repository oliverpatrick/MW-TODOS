import clsx from "clsx";
import React from "react";

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

/**
 *
 * @param type type of button e.g button | submit etc
 * @param fullWidth html id to match the label and input
 * @param children react components to be rendered within the button
 * @param onClick onClick functionality to the button
 * @param secondary secondary button variant
 * @param danger danger styling
 * @param disabled boolean to toggle disabled functionality
 * @param selected boolean to specify if the button is active
 * @returns
 */
const Button: React.FC<IButtonProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
  selected,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
      flex 
      justify-center 
      rounded-md 
      px-3 
      py-2 
      text-sm 
      font-semibold 
      focus-visible:outline 
      focus-visible:outline-2 
      focus-visible:outline-offset-2 
      `,
        selected && "bg-sky-700",
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;

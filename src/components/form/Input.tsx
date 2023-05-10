import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 *
 * @param label label tag for the input component
 * @param id html id to match the label and input
 * @param required required status for the input
 * @param type type of input e.g text | password | number etc
 * @param disabled boolean to toggle disabled input
 * @param maxWidth boolean to check if the input should take all available space
 * @param value value of the input field
 * @param onChange onChange functionality for the input
 * @returns
 */
const Input: React.FC<InputProps> = ({
  label,
  id,
  required,
  type = "text",
  disabled,
  fullWidth,
  value,
  onChange,
}) => {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label
          htmlFor={id}
          className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        "
        >
          {label}
          {required && <span className="text-red-500 text-xs"> *</span>}
        </label>
      )}
      <div className={label ? "mt-2" : ""}>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={clsx(
            `
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            py-1.5 
            text-gray-900 
            shadow-sm 
            ring-0 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 

            sm:text-sm 
            sm:leading-6
            px-3
            outline-none
            focus:border-transparent
            border-transparent`,
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default Input;

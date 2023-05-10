import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  maxWidth?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  required,
  type = "text",
  disabled,
  maxWidth,
  value,
  onChange,
}) => {
  return (
    <div className={maxWidth ? "w-full" : ""}>
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

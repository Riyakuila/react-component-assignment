import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password" | "email";
  clearable?: boolean;
  passwordToggle?: boolean;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-400 dark:bg-gray-700 border border-transparent focus:border-blue-500 text-black dark:text-white placeholder-gray-700 dark:placeholder-gray-300",
  outlined: "border border-gray-300 dark:border-gray-600 focus:border-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white",
  ghost: "border-b border-gray-400 dark:border-gray-600 focus:border-blue-500 bg-transparent text-black dark:text-white",
};

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
  passwordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = passwordToggle ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col w-full gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          type={inputType}
          className={`w-full rounded-xl focus:ring-2 focus:ring-blue-500 outline-none
            ${sizeClasses[size]} ${variantClasses[variant]}
            ${invalid ? "border-red-500 focus:ring-red-400" : ""}
            ${disabled ? "bg-gray-400 cursor-not-allowed" : ""}
          `}
        />
        {clearable && value && (
          <button
            type="button"
            onClick={() =>
              onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute right-10 text-gray-500 hover:text-gray-700"
          >
            <X size={16} />
          </button>
        )}
        {passwordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {helperText && !errorMessage && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
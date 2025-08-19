import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = "button",
  className = "",
}) => {
  const defaultClasses =
    "w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 hover:opacity-90 hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${defaultClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
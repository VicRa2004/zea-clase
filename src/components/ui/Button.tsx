import type { ReactNode } from "react";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
}

export const Button = ({
  type,
  children,
  className,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-indigo-400 hover:bg-indigo-500 transition-colors text-xl mt-2 p-1 text-white rounded-md ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

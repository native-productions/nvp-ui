import React, { useMemo } from "react";

export interface ButtonProps extends HTMLButtonElement {
  title: string;
  variants: "primary" | "outlined" | "text";
}

export const Button: React.FC<ButtonProps> = ({
  title,
}: // variant,
ButtonProps) => {
  // const variants = useMemo(() => {}, []);
  return (
    <button className="w-60 px-3 py-2 rounded drop-shadow-2xl text-white font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-700 focus:ring-indigo-400 focus:ring-4 focus:ring-offset-2 transition-all duration-200">
      {title}
    </button>
  );
};

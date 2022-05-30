import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  isDisabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  textColorClass?: string;
  backgroundColorClass?: string;
  darkTextColorClass?: string;
  darkBackgroundColorClass?: string;
}

/* It is not recommended to use  */
const Button = ({
  label,
  isDisabled,
  onClick,
  textColorClass,
  backgroundColorClass,
  darkTextColorClass,
  darkBackgroundColorClass,
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`rounded-lg ${backgroundColorClass} ${darkBackgroundColorClass} py-1 px-4 font-sans ${textColorClass} ${darkTextColorClass} ring-purple-300 hover:bg-purple-500 focus:ring disabled:bg-slate-300 disabled:text-gray-500 disabled:hover:cursor-not-allowed dark:ring-blue-300  dark:hover:bg-blue-500 dark:disabled:bg-slate-500 dark:disabled:text-gray-300`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

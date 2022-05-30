import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  isDisabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, isDisabled, onClick }: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`rounded-lg bg-purple-600 py-1 px-4 font-sans text-gray-100 disabled:bg-slate-300 disabled:text-gray-500 disabled:hover:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-500 dark:disabled:bg-slate-500 dark:disabled:text-gray-300`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

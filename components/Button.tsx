import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'destructive';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-700 disabled:cursor-not-allowed text-gray-900 shadow-lg shadow-cyan-500/20 transform hover:scale-105 disabled:scale-100',
  secondary: 'bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:cursor-not-allowed text-slate-200',
  destructive: 'bg-red-700 hover:bg-red-600 disabled:bg-red-800 disabled:cursor-not-allowed text-white',
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  const baseStyle = 'w-full font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300';
  const variantStyle = variantStyles[variant];

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

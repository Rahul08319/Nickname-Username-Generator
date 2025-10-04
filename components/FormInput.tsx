import React from 'react';
import { InfoIcon } from './Icons';

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  tooltipText?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ id, label, value, onChange, placeholder, tooltipText }) => (
  <div>
    <div className="flex items-center mb-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-300">
        {label}
      </label>
      {tooltipText && (
        <div className="relative flex items-center ml-2 group">
          <InfoIcon className="w-4 h-4 text-slate-400 cursor-help" />
          <span className="absolute bottom-full left-1/2 z-10 w-max max-w-xs -translate-x-1/2 mb-2 rounded-md bg-slate-700 px-3 py-2 text-center text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            {tooltipText}
          </span>
        </div>
      )}
    </div>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-slate-900/70 border border-slate-600 rounded-md py-2 px-3 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
    />
  </div>
);
import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full flex flex-col space-y-1.5">
      {label && <label className="text-xs font-medium text-zinc-400">{label}</label>}
      <input
        className={`w-full px-4 py-2.5 bg-zinc-900 border ${
          error ? 'border-red-500' : 'border-zinc-800 focus:border-red-500'
        } rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none transition-colors ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}

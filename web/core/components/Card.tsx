import React, { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'bordered' | 'glass';
}

export function Card({ children, variant = 'default', className = '', ...props }: CardProps) {
  const base = 'rounded-2xl p-6 transition-all';
  const variants = {
    default: 'bg-zinc-900 text-white border border-zinc-800/80',
    bordered: 'bg-zinc-950 text-white border border-zinc-700',
    glass: 'bg-zinc-900/60 backdrop-blur-md text-white border border-zinc-800/50',
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}

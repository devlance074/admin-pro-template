import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div className={`
      bg-white dark:bg-gray-800 
      border border-gray-200 dark:border-gray-700
      rounded-xl shadow-sm
      transition-all duration-300
      ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-flex tw-items-center tw-justify-center tw-gap-2';
  
  const variants = {
    primary: 'tw-bg-blue-600 tw-text-white hover:tw-bg-blue-700',
    danger: 'tw-bg-red-600 tw-text-white hover:tw-bg-red-700',
    secondary: 'tw-bg-gray-100 tw-text-gray-700 hover:tw-bg-gray-200'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
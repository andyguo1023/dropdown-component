import React from 'react';

const ArrowIcon = ({ isOpen, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`w-4 h-4 ${className}`}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" 
    d={isOpen ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"}  />
  </svg>
);

export default ArrowIcon;

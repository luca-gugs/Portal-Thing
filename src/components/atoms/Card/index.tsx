import React from "react";

export const Card = ({ children, className, ...otherProps }: any) => {
  return (
    <div
      {...otherProps}
      className={`rounded-xl border-2 border-gray-200 bg-white p-4 ${className}`}
    >
      {children}
    </div>
  );
};

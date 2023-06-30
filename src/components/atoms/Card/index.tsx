import React from "react";

type Props = {
  children: any;
  className?: string;
  //   [key: any]: any;
};

export const Card = ({ children, className, ...otherProps }: Props) => {
  return (
    <div
      {...otherProps}
      className={`rounded-xl border-2 border-gray-200 bg-white p-4 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

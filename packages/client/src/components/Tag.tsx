import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {}

export const Tag: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      tabIndex={0}
      className={`tag flex justify-center items-center px-3 h-7 bg-light-gray-24 
                 rounded-full text-base font-medium text-blue-gray cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

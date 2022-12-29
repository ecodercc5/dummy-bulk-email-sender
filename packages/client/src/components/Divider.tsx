import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Divider: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={`h-px w-full bg-light-gray-24 ${className}`} {...props} />
  );
};

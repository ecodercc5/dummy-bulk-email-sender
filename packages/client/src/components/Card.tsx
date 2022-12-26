import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Card: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`card bg-white rounded-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

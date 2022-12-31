import React from "react";

type Variant = "horizontal" | "vertical";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  variant?: Variant;
}

const variants = {
  horizontal: "h-px w-full",
  vertical: "h-full w-px",
};

export const Divider: React.FC<Props> = ({
  variant = "horizontal",
  className,
  ...props
}) => {
  return (
    <div
      className={`${variants[variant]} bg-light-gray-24 ${className}`}
      {...props}
    />
  );
};

import React from "react";
import classNames from "classnames";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variant;
  size?: Size;
}

type Variant = "primary" | "secondary";
type Size = "default" | "lg";

const variants = {
  primary: "bg-main-black text-white btn-primary",
  secondary: "bg-light-gray text-blue-gray btn-secondary",
};

const sizes = {
  default: "text-sm h-8",
  lg: "text-base h-10",
};

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  variant = "primary",
  size = "default",
  className: class_,
  disabled,
  ...buttonProps
}) => {
  const className = classNames(
    variants[variant],
    sizes[size],
    "font-medium rounded-md px-3 flex justify-center items-center cursor-pointer",
    class_
  );

  const textOpacity = disabled ? "opacity-50" : null;

  return (
    <button disabled={disabled} className={className} {...buttonProps}>
      <span className={classNames(textOpacity)}>{children}</span>
    </button>
  );
};

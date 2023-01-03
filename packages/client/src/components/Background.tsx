import classNames from "classnames";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Background: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return <div className={classNames("background", className)} {...props}></div>;
};

export default Background;

import React from "react";
import { Divider } from "./Divider";

type Variant = "inline" | "textarea";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label: string;
  variant?: Variant;
  withDivider?: boolean;
}

export const EmailInput: React.FC<Props> = ({
  label,
  variant = "inline",
  withDivider = false,
  className,
  ...props
}) => {
  const padding = withDivider ? "pt-3" : "py-3";

  return (
    <div className={`${padding} ${className}`} {...props}>
      {variant === "inline" ? (
        <div className="flex">
          <span className="text-blue-gray text-lg mr-2">{label}:</span>
          <div>
            <input className="h-full w-full outline-none text-main-black text-lg" />
          </div>
        </div>
      ) : (
        <textarea
          className="resize-none text-main-black text-lg placeholder:text-blue-gray outline-none h-full w-full"
          placeholder={label}
        ></textarea>
      )}

      {withDivider ? <Divider className="mt-3" /> : null}
    </div>
  );
};

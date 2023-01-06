import classNames from "classnames";
import React from "react";
import { Divider } from "./Divider";

type Variant = "inline" | "textarea";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  label: string;
  variant?: Variant;
  withDivider?: boolean;
  value: string;
  onValueChange: (value: string) => any;
};

export const EmailInput: React.FC<Props> = ({
  label,
  variant = "inline",
  withDivider = false,
  value,
  onValueChange,
  className,
  ...props
}) => {
  const padding = withDivider ? "pt-3" : "py-3";

  const handleChange = (e: any) => onValueChange(e.target.value);

  return (
    <div className={classNames(padding, className)} {...props}>
      {variant === "inline" ? (
        <div className="flex">
          <span className="text-blue-gray text-lg mr-2">{label}:</span>
          <div>
            <input
              className="h-full w-full outline-none text-main-black text-lg"
              value={value}
              onChange={handleChange}
              onBlur={(e) => {
                console.log(e);
              }}
            />
          </div>
        </div>
      ) : (
        <textarea
          className="resize-none text-main-black text-lg placeholder:text-blue-gray outline-none h-full w-full"
          placeholder={label}
          value={value}
          onChange={handleChange}
        ></textarea>
      )}

      {withDivider ? <Divider className="mt-3" /> : null}
    </div>
  );
};

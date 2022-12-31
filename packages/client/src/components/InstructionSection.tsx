import React from "react";
import classNames from "classnames";
import { body, heading } from "../styles";
import { IconComponent } from "../types";
import { IconCard } from "./IconCard";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon: IconComponent;
  header: string;
  text: any;
}

export const InstructionSection: React.FC<Props> = ({
  icon,
  header,
  text,
  className,
  ...props
}) => {
  return (
    <div className={classNames("flex flex-col gap-7", className)} {...props}>
      <IconCard icon={icon} />

      <div className="flex flex-col gap-2">
        <h1 className={heading.default}>{header}</h1>
        <p className={body.lg}>
          {/* Copy and paste your{" "}
          <span className="text-[#00A95E]">
            <img
              className="h-4 inline-flex items-center"
              src="https://lh3.ggpht.com/e3oZddUHSC6EcnxC80rl_6HbY94sM63dn6KrEXJ-C4GIUN-t1XM0uYA_WUwyhbIHmVMH=w300"
            />{" "}
            google sheet link
          </span>{" "}
          here to get started */}

          {text}
        </p>
      </div>
    </div>
  );
};

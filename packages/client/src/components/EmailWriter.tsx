import React from "react";
import { EmailInput } from "./EmailInput";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const EmailWriter: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={`flex flex-col ${className}`} {...props}>
      <EmailInput withDivider label="To" />
      <EmailInput withDivider label="Subject" />
      <EmailInput className="h-full" variant="textarea" label="Compose Email" />
    </div>
  );
};

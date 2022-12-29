import React from "react";
import { EmailInput } from "./EmailInput";

interface Props {}

export const EmailWriter: React.FC<Props> = () => {
  return (
    <div className="">
      <EmailInput withDivider label="To" />
      <EmailInput withDivider label="Subject" />
      <EmailInput variant="textarea" label="Compose Email" />
    </div>
  );
};

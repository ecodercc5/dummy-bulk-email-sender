import React from "react";
import { IconComponent } from "../types";

interface Props {
  icon: IconComponent;
}

export const IconCard: React.FC<Props> = ({ icon: Icon }) => {
  return (
    <div
      className={`icon-card bg-white rounded-lg flex justify-center items-center`}
    >
      <Icon className="w-9 h-9 stroke-blue-gray" />
    </div>
  );
};

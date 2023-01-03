import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

type DefaultProps = Select.SelectTriggerProps &
  React.RefAttributes<HTMLButtonElement>;

interface Props extends DefaultProps {
  icon?: React.ReactElement;
}

export const SelectButton: React.FC<Props> = ({
  icon,
  className,
  ...props
}) => {
  return (
    <Select.Trigger
      className="SelectTrigger"
      // className={`select-btn inline-flex justify-between items-center px-2 rounded-md h-10 text-base gap-2 ${className}`}
      {...props}
    >
      <div className="flex items-center">
        {icon}
        <Select.Value
          className="text-blue-gray w-full"
          placeholder="Hello World"
        />
      </div>

      <Select.Icon className="SelectIcon">
        <ChevronUpDownIcon className="w-5 h-5 text-main-black stroke-main-black stroke-[1.5]" />
      </Select.Icon>
    </Select.Trigger>
  );
};

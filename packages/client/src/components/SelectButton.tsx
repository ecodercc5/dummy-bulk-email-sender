import React from "react";
import * as Select from "@radix-ui/react-select";
import { TableCellsIcon } from "@heroicons/react/20/solid";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { SMALL_ICON } from "../icon-styles";

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
      className={`select-btn inline-flex justify-between items-center px-2 rounded-md h-10 text-base w-[300px] ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2">
        {/* <TableCellsIcon className="w-5 h-5 text-blue-gray opacity-75" /> */}
        {icon}
        <Select.Value className="text-blue-gray" placeholder="Hello World" />
      </div>

      <Select.Icon>
        <ChevronUpDownIcon className="w-5 h-5 text-main-black stroke-main-black stroke-[1.5]" />
      </Select.Icon>
    </Select.Trigger>
  );
};

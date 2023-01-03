import React from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon } from "@heroicons/react/24/outline";

type DefaultProps = Select.SelectItemProps &
  React.RefAttributes<HTMLDivElement>;

interface Props extends DefaultProps {}

export const SelectItem: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Select.Item
      className="SelectItem"
      // className="select-item relative flex items-center  h-8 rounded-md text-sm font-medium text-main-black outline-none w-full"
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-2 top-1/2 -translate-y-1/2">
        <CheckIcon className="w-4 h-4 text-blue-gray stroke-blue-gray stroke-[2.5] opacity-75" />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

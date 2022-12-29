import React from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon } from "@heroicons/react/24/outline";

type DefaultProps = Select.SelectItemProps &
  React.RefAttributes<HTMLDivElement>;

interface Props extends DefaultProps {}

const lol =
  "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900";

const loz =
  "select-item relative flex items-center pl-8 h-8 rounded-md text-sm font-medium text-main-black outline-none";

export const SelectItem: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Select.Item className={lol} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      {/* <Select.ItemIndicator className="absolute left-2 top-1/2 -translate-y-1/2">
        <CheckIcon className="w-4 h-4 text-blue-gray stroke-blue-gray stroke-[2.5] opacity-75" />
      </Select.ItemIndicator> */}
    </Select.Item>
  );
};

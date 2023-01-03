import React from "react";
import { Card } from "../components/Card";
import { ArrowUpTrayIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { TableCellsIcon } from "@heroicons/react/20/solid";
import { IconInput } from "../components/IconInput";
import { Button } from "../components/Button";
import { SMALL_ICON } from "../icon-styles";
import { SelectButton } from "../components/SelectButton";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "../components/SelectItem";

interface Props {}

export const SelectSpreadsheetCard: React.FC<Props> = () => {
  return (
    <Card className="flex w-full max-w-[974px] h-[584px]">
      <div className="flex flex-col gap-9 px-7 pt-9 pb-7 w-full h-full">
        <div className="flex flex-col gap-7">
          <div
            className={`icon-card bg-white rounded-lg flex justify-center items-center`}
          >
            <TableCellsIcon className="w-9 h-9 text-blue-gray" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[22px] font-bold text-main-black">
              Select SpreadSheet
            </h1>
            <p className="text-lg text-blue-gray">
              Choose the sheet containing the contacts you want to send emails
              to
            </p>
          </div>
        </div>

        <Select.Root>
          <SelectButton />

          <Select.Content className="select-content">
            <Select.Viewport className="select-viewport bg-white rounded-md min-h-11 p-1 gap-0.5">
              <Select.Group>
                <SelectItem value="asdf">Hello</SelectItem>
                <SelectItem value="qwer">World</SelectItem>
              </Select.Group>

              <Select.Separator />
            </Select.Viewport>
          </Select.Content>
        </Select.Root>
      </div>

      <div className="flex justify-end items-end gap-3 pb-7 px-7 left-img w-full bg-[url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]">
        <Button variant="secondary" size="lg">
          Back
        </Button>
        <Button size="lg">Continue</Button>
      </div>
    </Card>
  );
};

import React from "react";
import { Card } from "../components/Card";
import { ArrowUpTrayIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { IconInput } from "../components/IconInput";
import { Button } from "../components/Button";
import { SMALL_ICON } from "../icon-styles";

interface Props {}

export const ImportSpreadSheetCard: React.FC<Props> = () => {
  return (
    <Card className="flex flex-col gap-9 px-7 py-9 w-[478px]">
      <div className="flex flex-col gap-7">
        <div
          className={`icon-card bg-white rounded-lg flex justify-center items-center`}
        >
          <UserGroupIcon className="w-9 h-9 stroke-blue-gray" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[22px] font-semibold text-main-black">
            Import Your Contacts
          </h1>
          <p className="text-lg text-blue-gray">
            Copy and paste your google sheet link here to get started
          </p>
        </div>
      </div>

      <div>
        <IconInput
          className="w-full"
          placeholder="https://google.sheets.com..."
          icon={<ArrowUpTrayIcon className={SMALL_ICON} />}
        />
        <Button className="w-full mt-4" size="lg">
          Import
        </Button>
      </div>
    </Card>
  );
};

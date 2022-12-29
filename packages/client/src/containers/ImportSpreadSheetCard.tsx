import React from "react";
import { Card } from "../components/Card";
import { ArrowUpTrayIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { IconInput } from "../components/IconInput";
import { Button } from "../components/Button";
import { SMALL_ICON } from "../icon-styles";

interface Props {}

export const ImportSpreadSheetCard: React.FC<Props> = () => {
  return (
    <Card className="flex w-full max-w-[974px] h-[584px]">
      <div className="flex flex-col justify-between px-7 pt-9 pb-7 w-full h-full">
        <div className="flex flex-col gap-7">
          <div
            className={`icon-card bg-white rounded-lg flex justify-center items-center`}
          >
            <UserGroupIcon className="w-9 h-9 stroke-blue-gray" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[22px] font-bold text-main-black">
              Import Your Contacts
            </h1>
            <p className="text-lg text-blue-gray">
              Copy and paste your{" "}
              <span className="text-[#00A95E]">
                <img
                  className="h-4 inline-flex items-center"
                  src="https://lh3.ggpht.com/e3oZddUHSC6EcnxC80rl_6HbY94sM63dn6KrEXJ-C4GIUN-t1XM0uYA_WUwyhbIHmVMH=w300"
                />{" "}
                google sheet link
              </span>{" "}
              here to get started
            </p>
          </div>
        </div>

        <div>
          <IconInput
            className="w-full"
            placeholder="Paste your google sheet link"
            icon={<ArrowUpTrayIcon className={SMALL_ICON} />}
          />
          <Button className="w-full mt-4" size="lg">
            Import
          </Button>
        </div>
      </div>

      <div className="flex justify-end items-end pb-7 px-7 left-img w-full bg-[url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]">
        <Button size="lg">Continue</Button>
      </div>
    </Card>
  );
};

import React from "react";
import { Card } from "../components/Card";
import {
  ArrowUpTrayIcon,
  UserGroupIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { IconInput } from "../components/IconInput";
import { Button } from "../components/Button";
import { SMALL_ICON } from "../icon-styles";
import { Tag } from "../components/Tag";

interface Props {}

export const WriteEmailCard: React.FC<Props> = () => {
  return (
    <Card className="flex w-full max-w-[974px] h-[584px]">
      <div className="flex flex-col justify-between px-7 pt-9 pb-7 w-full h-full">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-7">
            <div
              className={`icon-card bg-white rounded-lg flex justify-center items-center`}
            >
              <PencilIcon className="w-9 h-9 stroke-blue-gray" />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[22px] font-bold text-main-black">
                Write Email
              </h1>
              <p className="text-lg text-blue-gray">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            {["email", "name", "phone-number", "company"].map((name) => {
              return <Tag key={name}>{name}</Tag>;
            })}
          </div>
        </div>

        <div>
          <Button variant="secondary" size="lg">
            Preview Emails
          </Button>
        </div>
      </div>

      <div className="flex justify-end items-end pb-7 px-7 gap-3 left-img w-full bg-[url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]">
        <Button variant="secondary" size="lg">
          Back
        </Button>
        <Button size="lg">Continue</Button>
      </div>
    </Card>
  );
};

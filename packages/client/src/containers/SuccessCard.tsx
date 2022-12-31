import React from "react";
import { Card } from "../components/Card";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Button } from "../components/Button";

interface Props {}

export const SuccessCard: React.FC<Props> = () => {
  return (
    <Card className="relative flex justify-center items-center w-full max-w-[974px] h-[584px]">
      <div className="flex flex-col items-center">
        <div
          className={`icon-card bg-white rounded-lg flex justify-center items-center`}
        >
          <CheckIcon className="w-9 h-9 stroke-blue-gray" />
        </div>

        <h1 className="main-text-black text-[22px] font-bold mt-4 mb-9">
          Your Emails Are Sent
        </h1>

        <Button size="lg">Send New Emails</Button>
      </div>
    </Card>
  );
};

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
import { EmailWriter } from "../components/EmailWriter";
import { Divider } from "../components/Divider";

interface Props {}

export const SummaryCard: React.FC<Props> = () => {
  return (
    <Card className="relative flex w-full max-w-[974px] h-[584px]">
      <div className="flex flex-col justify-between px-7 pt-9 pb-7 w-full h-full">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-7">
            <div
              className={`icon-card bg-white rounded-lg flex justify-center items-center`}
            >
              <PencilIcon className="w-9 h-9 stroke-blue-gray" />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[22px] font-bold text-main-black">Summary</h1>
              <p className="text-lg text-blue-gray">
                Review your contacts and emails before bulk sending
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex">
            <div>
              <h6>Sheet Link</h6>
              <p>
                https://docs.google.com/spreadsheets/d/1RRC6MRwxZJzaLFHP0Xnn-tdbWv5bfLeW7QTcKD5ytLs/edit#gid=0
              </p>
            </div>

            <Button variant="secondary">Edit</Button>
          </div>
          <div className="flex">
            <div>
              <h6>Sheet Link</h6>
              <p>
                https://docs.google.com/spreadsheets/d/1RRC6MRwxZJzaLFHP0Xnn-tdbWv5bfLeW7QTcKD5ytLs/edit#gid=0
              </p>
            </div>

            <Button variant="secondary">Edit</Button>
          </div>
          <div className="flex">
            <div>
              <h6>Sheet Link</h6>
              <p>
                https://docs.google.com/spreadsheets/d/1RRC6MRwxZJzaLFHP0Xnn-tdbWv5bfLeW7QTcKD5ytLs/edit#gid=0
              </p>
            </div>

            <Button variant="secondary">Edit</Button>
          </div>
        </div>
      </div>

      <Divider variant="vertical" />

      <div className="flex flex-col pt-5 pb-7 px-7 left-img w-full">
        <EmailWriter className="w-full h-full" />
      </div>

      <div className="absolute flex gap-3 right-7 bottom-7">
        <Button variant="secondary" size="lg">
          Back
        </Button>
        <Button size="lg">Continue</Button>
      </div>
    </Card>
  );
};

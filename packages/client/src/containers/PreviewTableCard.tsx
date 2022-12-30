import React from "react";
import { Card } from "../components/Card";
import { ArrowUpTrayIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { TableCellsIcon } from "@heroicons/react/20/solid";
import { Button } from "../components/Button";
import { SMALL_ICON } from "../icon-styles";

interface Props {}

export const PreviewTableCard: React.FC<Props> = () => {
  return (
    <Card className="relative flex flex-col w-full max-w-[974px] h-[584px]">
      <div className="flex flex-col gap-9 px-7 pt-9 pb-7 w-full h-full">
        <div className="flex flex-col gap-7">
          <div
            className={`icon-card bg-white rounded-lg flex justify-center items-center`}
          >
            <TableCellsIcon className="w-9 h-9 text-blue-gray" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[22px] font-bold text-main-black">
              Preview Spreadsheet
            </h1>
            <p className="text-lg text-blue-gray">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>

          <div>
            <table className="rounded-md w-full">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>eric25@mit.edu</td>
                  <td>Eric Chen</td>
                </tr>
                <tr>
                  <td>sam@mit.edu</td>
                  <td>Sam Postelnik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="absolute flex gap-3 right-7 bottom-7">
        <Button variant="secondary" size="lg">
          Back
        </Button>
        <Button size="lg">Continue</Button>
      </div>
    </Card>
  );
};

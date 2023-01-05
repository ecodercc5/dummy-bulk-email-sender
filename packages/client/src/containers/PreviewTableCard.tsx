import React from "react";
import { Card } from "../components/Card";
import { ArrowUpTrayIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { TableCellsIcon } from "@heroicons/react/20/solid";
import { Button } from "../components/Button";
import { SMALL_ICON } from "../icon-styles";
import { useStateStore } from "../hooks/state-store";
import { InstructionSection } from "../components/InstructionSection";
import { SheetTable } from "../components/SheetTable";

interface Props {}

export const PreviewTableCard: React.FC<Props> = () => {
  const back = useStateStore((state) => state.back);
  const sheet = useStateStore((state) => state.sheet!);

  return (
    <Card className="relative flex flex-col w-full max-w-[974px] h-[584px]">
      <div className="flex flex-col gap-9 px-7 pt-9 pb-7 w-full h-full">
        <div className="flex flex-col gap-7">
          <InstructionSection
            icon={TableCellsIcon}
            header="Preview Spreadsheet"
            text="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur."
          />

          <div>
            <SheetTable className="w-full" sheet={sheet} />
            {/* <table className="rounded-md w-full">
              <thead>
                <tr>
                  {sheet.headers.map((header) => {
                    return <th scope="col">{header}</th>;
                  })}
                </tr>
              </thead>

              <tbody>
                {sheet.rows.map((row) => {
                  return (
                    <tr>
                      {Object.values(row).map((value) => {
                        return <td>{value}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="absolute flex gap-3 right-7 bottom-7">
        <Button variant="secondary" size="lg" onClick={back}>
          Back
        </Button>
        <Button size="lg">Continue</Button>
      </div>
    </Card>
  );
};

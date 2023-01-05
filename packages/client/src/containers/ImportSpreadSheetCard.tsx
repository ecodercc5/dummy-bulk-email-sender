import React, { useState } from "react";
import { Card } from "../components/Card";
import { ArrowUpTrayIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { IconInput } from "../components/IconInput";
import { Button } from "../components/Button";
import { SMALL_ICON } from "../icon-styles";
import { InstructionSection } from "../components/InstructionSection";
import useSWR from "swr";
import { getSpreadSheet } from "../api";
import { useStateStore } from "../hooks/state-store";

interface Props {}

const text = (
  <>
    Copy and paste your{" "}
    <span className="text-[#00A95E]">
      <img
        className="h-4 inline-flex items-center"
        src="https://lh3.ggpht.com/e3oZddUHSC6EcnxC80rl_6HbY94sM63dn6KrEXJ-C4GIUN-t1XM0uYA_WUwyhbIHmVMH=w300"
      />{" "}
      google sheet link
    </span>{" "}
    here to get started
  </>
);

export const ImportSpreadSheetCard: React.FC<Props> = () => {
  const [googleSheetLink, setGoogleSheetLink] = useState("");
  const importGoogleSheet = useStateStore((state) => state.importGoogleSheet);
  const next = useStateStore((state) => state.next);

  const canContinue = useStateStore((state) =>
    Boolean(state.googleSheetLink.length > 0 && state.sheet)
  );

  const importGoogleSheetFromLink = async (link: string) => {
    const sheet = await getSpreadSheet(link);
    importGoogleSheet(link, sheet);

    return sheet;
  };

  return (
    <Card className="flex w-full max-w-[974px] h-[584px]">
      <div className="flex flex-col justify-between px-7 pt-9 pb-7 w-full h-full">
        <InstructionSection
          icon={UserGroupIcon}
          header="Import Your Contacts"
          text={text}
        />

        <div className="flex flex-col items-stretch">
          <IconInput
            value={googleSheetLink}
            className="w-full"
            placeholder="Paste your google sheet link"
            icon={<ArrowUpTrayIcon className={SMALL_ICON} />}
            onChange={(e) => setGoogleSheetLink(e.target.value)}
          />
          <Button
            className="mt-4"
            size="lg"
            onClick={async () => {
              console.log("asdfasdf");
              const sheet = await importGoogleSheetFromLink(googleSheetLink);

              console.log(sheet);
            }}
          >
            Import
          </Button>
        </div>
      </div>

      <div className="flex justify-end items-end pb-7 px-7 left-img w-full bg-[url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]">
        <Button disabled={!canContinue} size="lg" onClick={next}>
          Continue
        </Button>
      </div>
    </Card>
  );
};

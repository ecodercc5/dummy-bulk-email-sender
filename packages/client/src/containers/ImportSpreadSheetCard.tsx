import React, { useState } from "react";
import { Card } from "../components/Card";
import { ArrowUpTrayIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { IconInput } from "../components/IconInput";
import { Button } from "../components/Button";
import { SMALL_ICON } from "../icon-styles";
import { InstructionSection } from "../components/InstructionSection";
import useSWR from "swr";

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

const link =
  "https://docs.google.com/spreadsheets/u/1/d/1RRC6MRwxZJzaLFHP0Xnn-tdbWv5bfLeW7QTcKD5ytLs/edit#gid=0";

// ("/spreadsheets/u/1/d/1RRC6MRwxZJzaLFHP0Xnn-tdbWv5bfLeW7QTcKD5ytLs/edit");

const getSpreadSheet = async (link: string) => {
  const url = new URL(link);
  const pathname = url.pathname;

  try {
    // check if is valid google sheet link
    const isGoogleHost = url.host === "docs.google.com";

    if (!isGoogleHost) {
      throw new Error();
    }

    const pathSplit = pathname.split("/");
    const correctPathLength = pathSplit.length === 7;

    if (!correctPathLength) {
      throw new Error();
    }

    const validPathname =
      pathSplit[1] === "spreadsheets" && pathSplit[4] === "d";

    if (!validPathname) {
      throw new Error();
    }

    const spreadSheetId = pathSplit[5];
    const gid = url.hash.slice(5);

    console.log(spreadSheetId, gid);

    // make api call to get spreadsheet given spreadsheet id and gid
    const apiEndpoint = `http://localhost:8000/api/spreadsheets/${spreadSheetId}/sheets/${gid}`;

    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err);
    throw err;
  }

  // console.log(url);

  // grab spreadsheet id and gid

  //

  return ["Sheet 1", "Sheet 2"];
};

export const ImportSpreadSheetCard: React.FC<Props> = () => {
  const [googleSheetLink, setGoogleSheetLink] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  return (
    <Card className="flex w-full max-w-[974px] h-[584px]">
      {shouldFetch && <Fetcher link={googleSheetLink} />}

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
            onClick={() => {
              console.log("asdfasdf");
              // setShouldFetch(true);

              getSpreadSheet(link);
            }}
          >
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

const Fetcher: React.FC<{ link: string }> = ({ link }) => {
  const { data } = useSWR(["/api/spreadsheets", link], () =>
    getSpreadSheet(link)
  );

  console.log(data);

  return null;
};

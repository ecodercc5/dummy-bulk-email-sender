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
import { InstructionSection } from "../components/InstructionSection";
import { useStateStore } from "../hooks/state-store";

interface Props {}

export const WriteEmailCard: React.FC<Props> = () => {
  const sheet = useStateStore((state) => state.sheet!);
  const [email, setEmail] = useStateStore((state) => [
    state.email,
    state.setEmail,
  ]);

  const next = useStateStore((state) => state.next);
  const back = useStateStore((state) => state.back);

  return (
    <Card className="relative flex w-full max-w-[974px] h-[584px]">
      <div className="flex flex-col justify-between px-7 pt-9 pb-7 w-full h-full">
        <div className="flex flex-col gap-9">
          <InstructionSection
            icon={PencilIcon}
            header="Write Email"
            text="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
            amet consectetur."
          />

          <div className="flex flex-wrap gap-2">
            {sheet.headers.map((name) => {
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

      <Divider variant="vertical" />

      <div className="flex flex-col pt-5 pb-7 px-7 left-img w-full">
        <EmailWriter
          className="w-full h-full"
          email={email}
          onEmailChange={setEmail}
        />
      </div>

      <div className="absolute flex gap-3 right-7 bottom-7">
        <Button variant="secondary" size="lg" onClick={back}>
          Back
        </Button>
        <Button size="lg" onClick={next}>
          Continue
        </Button>
      </div>
    </Card>
  );
};

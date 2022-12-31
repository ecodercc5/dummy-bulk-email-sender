import React from "react";
import { truncate } from "../utils";
import { Button } from "./Button";

interface Props {
  label: string;
  detail: string;
  edittable?: boolean;
  onEdit?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const SummaryDetail: React.FC<Props> = ({
  label,
  detail,
  edittable = false,
  onEdit,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h6 className="text-lg text-main-black font-semibold mb-1">{label}</h6>
        <p className="text-lg text-blue-gray">{truncate(detail, 42)}</p>
      </div>

      {edittable ? (
        <Button variant="secondary" onClick={onEdit}>
          Edit
        </Button>
      ) : null}
    </div>
  );
};

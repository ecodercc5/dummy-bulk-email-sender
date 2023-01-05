import classNames from "classnames";
import React from "react";
import { ISheet } from "../core";

interface Props
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  sheet: ISheet;
}

export const SheetTable: React.FC<Props> = ({
  sheet,
  className,
  ...tableProps
}) => {
  return (
    <table className={classNames("rounded-md", className)} {...tableProps}>
      <thead>
        <tr>
          {sheet.headers.map((header) => {
            return (
              <th key={header} scope="col">
                {header}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {sheet.rows.map((row) => {
          return (
            <tr key={Math.random()}>
              {Object.values(row).map((value) => {
                return <td key={Math.random()}>{value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

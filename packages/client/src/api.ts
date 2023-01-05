import { ISheet } from "./core";

const isGoogleSheetsURL = (link: string): boolean => {
  const url = new URL(link);
  const pathname = url.pathname;

  console.log(url);

  // check if is valid google sheet link
  const isGoogleHost = url.host === "docs.google.com";

  if (!isGoogleHost) {
    return false;
  }

  const pathSplit = pathname.split("/");

  console.log(pathSplit);

  const correctPathLength = pathSplit.length === 5;

  if (!correctPathLength) {
    return false;
  }

  const validPathname = pathSplit[1] === "spreadsheets" && pathSplit[2] === "d";

  if (!validPathname) {
    return false;
  }

  return true;
};

const getSpreadSheetIdAndGid = (link: string): [string, string] => {
  const url = new URL(link);
  const pathname = url.pathname;
  const pathSplit = pathname.split("/");
  const spreadSheetId = pathSplit[3];
  const gid = url.hash.slice(5);

  return [spreadSheetId, gid];
};

const getSpreadSheetFromSpreadSheetIdAndGid = async (
  spreadSheetId: string,
  gid: string
): Promise<ISheet> => {
  // make api call to get spreadsheet given spreadsheet id and gid
  const apiEndpoint = `http://localhost:8000/api/spreadsheets/${spreadSheetId}/sheets/${gid}`;
  const resData = await fetch(apiEndpoint).then((res) => res.json());

  return resData.data.sheet;
};

export const getSpreadSheet = (link: string): Promise<ISheet> => {
  // check valid url
  const isValidURL = isGoogleSheetsURL(link);

  if (!isValidURL) {
    throw new Error("Invalid url");
  }

  // get url params from link
  const [spreadSheetId, gid] = getSpreadSheetIdAndGid(link);

  // make api call to get spreadsheet
  return getSpreadSheetFromSpreadSheetIdAndGid(spreadSheetId, gid);
};

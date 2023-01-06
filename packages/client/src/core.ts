export interface ISheet {
  id: string;
  range: string;
  headers: string[];
  rows: ISheetRow[];
}

export interface ISheetRow {
  [header: string]: any;
}

export interface IEmail {
  to: string;
  subject: string;
  body: string;
}

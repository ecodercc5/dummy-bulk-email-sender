import { google, sheets_v4 } from "googleapis";

type GoogleSheetsAPI = sheets_v4.Sheets;

interface IRawGoogleSheet {
  id: string;
  range: string;
  rows: any[][];
}

export interface IGoogleSheet {
  id: string;
  range: string;
  headers: string[];
  rows: IGoogleSheetRow[];
}

interface IGoogleSheetRow {
  [header: string]: any;
}

export namespace GoogleSheets {
  export const createAPI = async (
    pathToKey: string
  ): Promise<GoogleSheetsAPI> => {
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      keyFile: pathToKey,
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    return sheets;
  };

  const toRawSheet = (
    id: string,
    range: string,
    data: sheets_v4.Schema$ValueRange
  ): IRawGoogleSheet => {
    const rows = data.values as any[][];

    return {
      id,
      range,
      rows,
    };
  };

  const toGoogleSheet = (rawSheet: IRawGoogleSheet): IGoogleSheet => {
    const { id, range } = rawSheet;
    const headers = getHeader(rawSheet);

    const rows = getRawRows(rawSheet).map((row) => {
      const sheetRow = {} as any;

      for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        const value = row[i];

        sheetRow[header] = value;
      }

      return sheetRow;
    });

    const sheet = {
      id,
      range,
      headers,
      rows,
    };

    return sheet;
  };

  export const getSheet = async (
    api: GoogleSheetsAPI,
    args: {
      id: string;
      range: string;
    }
  ): Promise<IGoogleSheet> => {
    const { id, range } = args;

    const data = await api.spreadsheets.values
      .get({
        range,
        spreadsheetId: id,
      })
      .then((res) => res.data);

    const rawGoogleSheet = toRawSheet(id, range, data);
    const googleSheet = toGoogleSheet(rawGoogleSheet);

    return googleSheet;
  };

  export const getHeader = (sheet: IRawGoogleSheet): any[] => {
    return sheet.rows[0]!;
  };

  const getRawRows = (sheet: IRawGoogleSheet) => {
    return sheet.rows.slice(1);
  };
}

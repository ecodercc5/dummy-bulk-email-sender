import { RequestHandler, Request } from "express";
import { GoogleSheets } from "../apis/google-sheets";

interface ISpreadSheetParams {
  spreadSheetId: string;
  range: string;
}

const GOOGLE_SHEETS_SECRETS_PATH = "./secrets.json";

export const getSheet = (
  sheetParamsGetter: (req: Request) => ISpreadSheetParams
): RequestHandler => {
  return async (req, res, next) => {
    try {
      const { spreadSheetId, range } = sheetParamsGetter(req);
      const sheetsAPI = await GoogleSheets.createAPI(
        GOOGLE_SHEETS_SECRETS_PATH
      );

      const sheet = await GoogleSheets.getSheet(sheetsAPI, {
        id: spreadSheetId,
        range,
      });

      (req as any).sheet = sheet;

      next();
    } catch {
      return res.status(400).json({
        error: "Invalid spreadsheetId and range",
      });
    }
  };
};

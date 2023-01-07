import express from "express";
import cors from "cors";
import { getSheet } from "./middleware/sheet";
import { Middleware } from "./middleware";
import { GoogleSheets } from "./apis/google-sheets";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

interface ISpreadSheetParams {
  spreadSheetId: string;
  range: string;
}

// getting spreadsheet
app.get(
  "/api/spreadsheets",
  getSheet((req) => req.query as unknown as ISpreadSheetParams),
  Middleware.getSpreadSheet
);

// gettting sheet from spreadsheets
app.get("/api/spreadsheets/:spreadSheetId/sheets/:gid", async (req, res) => {
  const { spreadSheetId, gid } = req.params;
  const sheetsAPI = await GoogleSheets.createAPI("./secrets.json");

  console.log("yoooo");

  try {
    // get spreadsheet
    const getSpreadhSheetsRes = await sheetsAPI.spreadsheets.get({
      spreadsheetId: spreadSheetId,
    });

    const sheets = getSpreadhSheetsRes.data.sheets!;
    // get name of sheet with corresponding gid
    const sheet = sheets.find((sh) => {
      return sh.properties?.sheetId === Number(gid);
    });

    const sheetTitle = sheet?.properties?.title!;

    // get the values from spreadsheet
    const sheetData = await GoogleSheets.getSheet(sheetsAPI, {
      id: spreadSheetId,
      range: sheetTitle,
    });

    console.log(sheetData);

    return res.json({
      data: {
        sheet: sheetData,
      },
    });
  } catch (err) {
    console.error(err);
    console.log("bad request");

    return res.status(400).json({ error: "Bad Request" });
  }
});

// send emails
app.post(
  "/api/emails",
  getSheet((req) => ({
    spreadSheetId: req.body.spreadSheetId,
    range: req.body.range,
  })),
  Middleware.sendEmails
);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

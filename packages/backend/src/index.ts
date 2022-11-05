import express from "express";
import cors from "cors";
import { IGoogleSheet } from "./apis/google-sheets";
import { OutlookEmailSender } from "./outlook-email-sender";
import { createSpreadSheetToEmails } from "./sheet-to-email";
import { Template } from "./template";
import { getSheet } from "./middleware/sheet";
import { Middleware } from "./middleware";

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
  "/api/spreadsheet",
  getSheet((req) => req.query as unknown as ISpreadSheetParams),
  Middleware.getSpreadSheet
);

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

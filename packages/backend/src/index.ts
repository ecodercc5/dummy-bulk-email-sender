import express from "express";
import cors from "cors";
import { IGoogleSheet } from "./apis/google-sheets";
import { OutlookEmailSender } from "./outlook-email-sender";
import { createSpreadSheetToEmails } from "./sheet-to-email";
import { Template } from "./template";
import { getSheet } from "./middleware/sheet";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

interface ISpreadSheetParams {
  spreadSheetId: string;
  range: string;
}

app.get(
  "/api/spreadsheet",
  getSheet((req) => req.query as unknown as ISpreadSheetParams),
  async (req, res) => {
    const sheet = (req as any).sheet as IGoogleSheet;

    return res.json({
      data: {
        spreadsheet: sheet,
      },
    });
  }
);

//

interface ISendEmailsRequestBody {
  spreadSheetId: string;
  range: string;
  body: string;
  subject: string;
}

// create templating function -> {{variable}}
const templateFill = Template.createFill((variable) => `{{${variable}}}`);

// create spreadsheet to email converter
const spreadSheetToEmails = createSpreadSheetToEmails("Email", templateFill);

app.post(
  "/api/emails",
  getSheet((req) => ({
    spreadSheetId: req.body.spreadSheetId,
    range: req.body.range,
  })),
  async (req, res) => {
    const { subject, body } = req.body as ISendEmailsRequestBody;

    // get spreadsheet
    console.log("importing spreadsheet");
    const sheet = (req as any).sheet as IGoogleSheet;

    console.log(sheet);

    // create message for each row
    console.log("creating emails");
    const emails = spreadSheetToEmails(sheet, {
      subject,
      body,
    });

    console.log(emails);

    await OutlookEmailSender.sendEmails(emails);

    console.log("done!");

    return res.json({
      emails,
    });
  }
);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

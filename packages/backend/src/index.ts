import express from "express";
import cors from "cors";
import { GoogleSheets, IGoogleSheet } from "./apis/google-sheets";
import { Template } from "./template";
import { OutlookEmailSender } from "./outlook-email-sender";

const app = express();

// middleware
app.use(cors());

// process json req body
app.use(express.json());

interface IGetSpreadSheetQuery {
  spreadSheetId: string;
  range: string;
}

const GOOGLE_SHEETS_SECRETS_PATH = "./secrets.json";

const getSheetFromIdAndRange = async (spreadSheetId: string, range: string) => {
  // create google sheets api
  const sheetsAPI = await GoogleSheets.createAPI(GOOGLE_SHEETS_SECRETS_PATH);

  // get spread sheet
  const sheet = await GoogleSheets.getSheet(sheetsAPI, {
    id: spreadSheetId,
    range,
  });

  return sheet;
};

app.get("/api/spreadsheet", async (req, res) => {
  // get spreadsheet query params
  const { spreadSheetId, range } = req.query as unknown as IGetSpreadSheetQuery;

  const sheet = await getSheetFromIdAndRange(spreadSheetId, range);

  return res.json({
    data: {
      spreadsheet: sheet,
    },
  });
});

// refactor everything another day

interface ISendEmailsRequestBody {
  spreadSheetId: string;
  range: string;
  message: string;
  subject: string;
}

interface IEmail {
  to: string;
  subject: string;
  message: string;
}

const spreadSheetToEmails = (
  sheet: IGoogleSheet,
  template: { subject: string; message: string }
): IEmail[] => {
  const { subject, message } = template;

  return sheet.rows.map((row) => {
    const to = row["Email"];
    const subjectLine = Template.createMessage(subject, row);
    const filledMessage = Template.createMessage(message, row);

    return {
      to,
      subject: subjectLine,
      message: filledMessage,
    };
  });
};

app.post("/api/emails", async (req, res) => {
  // const { spreadSheetId, range } = req.query as unknown as IGetSpreadSheetQuery;
  const { subject, message, spreadSheetId, range } =
    req.body as ISendEmailsRequestBody;

  // get spreadsheet
  console.log("importing spreadsheet");
  const sheet = await getSheetFromIdAndRange(spreadSheetId, range);

  console.log(sheet);

  // create message for each row
  console.log("creating emails");
  const emails = spreadSheetToEmails(sheet, {
    subject,
    message,
  });

  console.log(emails);

  await OutlookEmailSender.sendEmails(emails);

  console.log("done!");

  return res.json({
    emails,
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

import { RequestHandler } from "express";
import { IGoogleSheet } from "../apis/google-sheets";
import { OutlookEmailSender } from "../outlook-email-sender";
import { createSpreadSheetToEmails } from "../sheet-to-email";
import { Template } from "../template";

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

export namespace Middleware {
  export const getSpreadSheet: RequestHandler = (req, res) => {
    const sheet = (req as any).sheet as IGoogleSheet;

    return res.json({
      data: {
        spreadsheet: sheet,
      },
    });
  };

  export const sendEmails: RequestHandler = async (req, res) => {
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
  };
}

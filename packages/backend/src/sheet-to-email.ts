import { IEmail } from "./email";
import { IGoogleSheet } from "./apis/google-sheets";
import { Template, TemplateFill } from "./template";

// toHeader: What column is the email field underneath
export const createSpreadSheetToEmails = (
  toHeader: string,
  templateFill: TemplateFill
) => {
  const spreadSheetToEmails = (
    sheet: IGoogleSheet,
    template: { subject: string; body: string }
  ): IEmail[] => {
    const { subject, body } = template;

    return sheet.rows.map((row) => {
      const to = row[toHeader];
      const subjectLine = templateFill(subject, row);
      const filledBody = templateFill(body, row);

      return {
        to,
        subject: subjectLine,
        body: filledBody,
      };
    });
  };

  return spreadSheetToEmails;
};

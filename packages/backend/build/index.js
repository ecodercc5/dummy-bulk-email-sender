"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const google_sheets_1 = require("./apis/google-sheets");
const template_1 = require("./template");
const outlook_email_sender_1 = require("./outlook-email-sender");
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
// process json req body
app.use(express_1.default.json());
const GOOGLE_SHEETS_SECRETS_PATH = "./secrets.json";
const getSheetFromIdAndRange = async (spreadSheetId, range) => {
    // create google sheets api
    const sheetsAPI = await google_sheets_1.GoogleSheets.createAPI(GOOGLE_SHEETS_SECRETS_PATH);
    // get spread sheet
    const sheet = await google_sheets_1.GoogleSheets.getSheet(sheetsAPI, {
        id: spreadSheetId,
        range,
    });
    return sheet;
};
app.get("/api/spreadsheet", async (req, res) => {
    // get spreadsheet query params
    const { spreadSheetId, range } = req.query;
    const sheet = await getSheetFromIdAndRange(spreadSheetId, range);
    return res.json({
        data: {
            spreadsheet: sheet,
        },
    });
});
const spreadSheetToEmails = (sheet, template) => {
    const { subject, message } = template;
    return sheet.rows.map((row) => {
        const to = row["Email"];
        const subjectLine = template_1.Template.createMessage(subject, row);
        const filledMessage = template_1.Template.createMessage(message, row);
        return {
            to,
            subject: subjectLine,
            message: filledMessage,
        };
    });
};
app.post("/api/emails", async (req, res) => {
    // const { spreadSheetId, range } = req.query as unknown as IGetSpreadSheetQuery;
    const { subject, message, spreadSheetId, range } = req.body;
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
    await outlook_email_sender_1.OutlookEmailSender.sendEmails(emails);
    console.log("done!");
    return res.json({
        emails,
    });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

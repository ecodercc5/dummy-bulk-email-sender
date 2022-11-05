"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const outlook_email_sender_1 = require("./outlook-email-sender");
const sheet_to_email_1 = require("./sheet-to-email");
const template_1 = require("./template");
const sheet_1 = require("./middleware/sheet");
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/api/spreadsheet", (0, sheet_1.getSheet)((req) => req.query), async (req, res) => {
    const sheet = req.sheet;
    return res.json({
        data: {
            spreadsheet: sheet,
        },
    });
});
// create templating function -> {{variable}}
const templateFill = template_1.Template.createFill((variable) => `{{${variable}}}`);
// create spreadsheet to email converter
const spreadSheetToEmails = (0, sheet_to_email_1.createSpreadSheetToEmails)("Email", templateFill);
app.post("/api/emails", (0, sheet_1.getSheet)((req) => ({
    spreadSheetId: req.body.spreadSheetId,
    range: req.body.range,
})), async (req, res) => {
    const { subject, body } = req.body;
    // get spreadsheet
    console.log("importing spreadsheet");
    const sheet = req.sheet;
    console.log(sheet);
    // create message for each row
    console.log("creating emails");
    const emails = spreadSheetToEmails(sheet, {
        subject,
        body,
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

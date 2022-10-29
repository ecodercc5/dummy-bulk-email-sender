"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const google_sheets_1 = require("./apis/google-sheets");
const template_1 = require("./template");
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
app.post("/api/emails", async (req, res) => {
    const { spreadSheetId, range } = req.query;
    const { message } = req.body;
    // get spreadsheet
    const sheet = await getSheetFromIdAndRange(spreadSheetId, range);
    // create message for each row
    const rowsWithMessage = sheet.rows.map((row) => {
        const filledMessage = template_1.Template.createMessage(message, row);
        return {
            ...row,
            message: filledMessage,
        };
    });
    console.log(rowsWithMessage);
    return res.json({
        hello: "asdfasdf",
    });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

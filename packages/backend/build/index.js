"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sheet_1 = require("./middleware/sheet");
const middleware_1 = require("./middleware");
const google_sheets_1 = require("./apis/google-sheets");
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// getting spreadsheet
app.get("/api/spreadsheets", (0, sheet_1.getSheet)((req) => req.query), middleware_1.Middleware.getSpreadSheet);
// gettting sheet from spreadsheets
app.get("/api/spreadsheets/:spreadSheetId/sheets/:gid", async (req, res) => {
    const { spreadSheetId, gid } = req.params;
    const sheetsAPI = await google_sheets_1.GoogleSheets.createAPI("./secrets.json");
    console.log("yoooo");
    try {
        // get spreadsheet
        const getSpreadhSheetsRes = await sheetsAPI.spreadsheets.get({
            spreadsheetId: spreadSheetId,
        });
        const sheets = getSpreadhSheetsRes.data.sheets;
        // get name of sheet with corresponding gid
        const sheet = sheets.find((sh) => {
            return sh.properties?.sheetId === Number(gid);
        });
        const sheetTitle = sheet?.properties?.title;
        // get the values from spreadsheet
        const sheetData = await google_sheets_1.GoogleSheets.getSheet(sheetsAPI, {
            id: spreadSheetId,
            range: sheetTitle,
        });
        console.log(sheetData);
        return res.json({
            data: {
                sheet: sheetData,
            },
        });
    }
    catch {
        console.log("bad request");
        return res.status(400).json({ error: "Bad Request" });
    }
});
// send emails
app.post("/api/emails", (0, sheet_1.getSheet)((req) => ({
    spreadSheetId: req.body.spreadSheetId,
    range: req.body.range,
})), middleware_1.Middleware.sendEmails);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

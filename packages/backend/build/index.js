"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sheet_1 = require("./middleware/sheet");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// getting spreadsheet
app.get("/api/spreadsheets", (0, sheet_1.getSheet)((req) => req.query), middleware_1.Middleware.getSpreadSheet);
// send emails
app.post("/api/emails", (0, sheet_1.getSheet)((req) => ({
    spreadSheetId: req.body.spreadSheetId,
    range: req.body.range,
})), middleware_1.Middleware.sendEmails);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

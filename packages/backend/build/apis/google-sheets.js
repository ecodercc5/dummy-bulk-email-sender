"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSheets = void 0;
const googleapis_1 = require("googleapis");
var GoogleSheets;
(function (GoogleSheets) {
    GoogleSheets.createAPI = async (pathToKey) => {
        const auth = await googleapis_1.google.auth.getClient({
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
            keyFile: pathToKey,
        });
        const sheets = googleapis_1.google.sheets({
            version: "v4",
            auth,
        });
        return sheets;
    };
    const toRawSheet = (id, range, data) => {
        const rows = data.values;
        return {
            id,
            range,
            rows,
        };
    };
    const toGoogleSheet = (rawSheet) => {
        const { id, range } = rawSheet;
        const headers = GoogleSheets.getHeader(rawSheet);
        const rows = getRawRows(rawSheet).map((row) => {
            const sheetRow = {};
            for (let i = 0; i < headers.length; i++) {
                const header = headers[i];
                const value = row[i];
                sheetRow[header] = value;
            }
            return sheetRow;
        });
        const sheet = {
            id,
            range,
            headers,
            rows,
        };
        return sheet;
    };
    GoogleSheets.getSheet = async (api, args) => {
        const { id, range } = args;
        const data = await api.spreadsheets.values
            .get({
            range,
            spreadsheetId: id,
        })
            .then((res) => res.data);
        const rawGoogleSheet = toRawSheet(id, range, data);
        const googleSheet = toGoogleSheet(rawGoogleSheet);
        return googleSheet;
    };
    GoogleSheets.getHeader = (sheet) => {
        return sheet.rows[0];
    };
    const getRawRows = (sheet) => {
        return sheet.rows.slice(1);
    };
})(GoogleSheets = exports.GoogleSheets || (exports.GoogleSheets = {}));

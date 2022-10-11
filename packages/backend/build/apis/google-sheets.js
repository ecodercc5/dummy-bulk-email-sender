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
    const from = (id, range, data) => {
        const rows = data.values;
        return {
            id,
            range,
            rows,
        };
    };
    GoogleSheets.getSheet = async (api, args) => {
        const { id, range } = args;
        const data = await api.spreadsheets.values
            .get({
            range,
            spreadsheetId: id,
        })
            .then((res) => res.data);
        const googleSheet = from(id, range, data);
        return googleSheet;
    };
    GoogleSheets.isEmpty = (sheet) => {
        return sheet.rows.length === 0;
    };
    GoogleSheets.getNumRows = (sheet) => {
        // number of rows excluding header
        return sheet.rows.length - 1;
    };
    GoogleSheets.getHeader = (sheet) => {
        return sheet.rows[0];
    };
    const getRawRows = (sheet) => {
        return sheet.rows.slice(1);
    };
    GoogleSheets.getRow = (sheet, rowIndex) => {
        const header = GoogleSheets.getHeader(sheet);
        const rows = getRawRows(sheet);
        const rawRow = rows[rowIndex];
        const row = {
            id: sheet.id,
            header,
            value: rawRow,
        };
        return row;
    };
    GoogleSheets.getValueFromRow = (row, value) => {
        const index = row.header.indexOf(value);
        const rawValue = row.value[index];
        return rawValue;
    };
})(GoogleSheets = exports.GoogleSheets || (exports.GoogleSheets = {}));
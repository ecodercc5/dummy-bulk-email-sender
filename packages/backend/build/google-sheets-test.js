"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const template_1 = require("./template");
// import secrets from "../secrets.json"
const sheet = {
    id: "1RRC6MRwxZJzaLFHP0Xnn-tdbWv5bfLeW7QTcKD5ytLs",
    range: "Sheet1",
    rows: [
        ["Email", "Name"],
        ["eric chen", "Eric Chen"],
    ],
};
// authentication
const main = async () => {
    const auth = await googleapis_1.google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        keyFile: "../secrets.json",
    });
    const sheets = googleapis_1.google.sheets({ version: "v4", auth });
    const data = await sheets.spreadsheets
        .get({
        spreadsheetId: "1RRC6MRwxZJzaLFHP0Xnn-tdbWv5bfLeW7QTcKD5ytLs",
    })
        .then((res) => res.data);
    console.log(data);
    // const sheets = await GoogleSheets.createAPI("../secrets.json");
    // query
    const id = "1RRC6MRwxZJzaLFHP0Xnn-tdbWv5bfLeW7QTcKD5ytLs";
    const range = `Sheet1!A2:B2`;
    // const response = await sheets.spreadsheets.values.get({
    //   range: "Sheet1",
    //   spreadsheetId: id,
    // });
    // const googleSheet = await GoogleSheets.getSheet(sheets, {
    //   id,
    //   range: "Sheet1",
    // });
    // console.log(googleSheet);
    // const header = GoogleSheets.getHeader(googleSheet);
    // console.log(header);
    // const row = GoogleSheets.getRow(sheet, 0);
    // console.log(row);
    // const name = GoogleSheets.getValueFromRow(row, "Email");
    const message = template_1.Template.createMessage("Hello {{message}}, my name is{{name}}", {
        message: "World",
        name: "Eric",
    });
    // console.log(message);
    // console.log(name);
};
main();

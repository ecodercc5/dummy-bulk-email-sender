import express from "express";
import cors from "cors";
import { GoogleSheets } from "./apis/google-sheets";
import { Template } from "./template";

const app = express();

// middleware
app.use(cors());

// process json req body
app.use(express.json());

interface IGetSpreadSheetQuery {
  spreadSheetId: string;
  range: string;
}

const GOOGLE_SHEETS_SECRETS_PATH = "./secrets.json";

const getSheetFromIdAndRange = async (spreadSheetId: string, range: string) => {
  // create google sheets api
  const sheetsAPI = await GoogleSheets.createAPI(GOOGLE_SHEETS_SECRETS_PATH);

  // get spread sheet
  const sheet = await GoogleSheets.getSheet(sheetsAPI, {
    id: spreadSheetId,
    range,
  });

  return sheet;
};

app.get("/api/spreadsheet", async (req, res) => {
  // get spreadsheet query params
  const { spreadSheetId, range } = req.query as unknown as IGetSpreadSheetQuery;

  const sheet = await getSheetFromIdAndRange(spreadSheetId, range);

  return res.json({
    data: {
      spreadsheet: sheet,
    },
  });
});

app.post("/api/emails", async (req, res) => {
  const { spreadSheetId, range } = req.query as unknown as IGetSpreadSheetQuery;
  const { message } = req.body as { message: string };

  // get spreadsheet
  const sheet = await getSheetFromIdAndRange(spreadSheetId, range);

  // create message for each row
  const rowsWithMessage = sheet.rows.map((row) => {
    const filledMessage = Template.createMessage(message, row);
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

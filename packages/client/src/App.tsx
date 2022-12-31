import { Button } from "./components/Button";
import { IconInput } from "./components/IconInput";
import { ArrowUpTrayIcon, CheckIcon } from "@heroicons/react/24/outline";
import { SMALL_ICON } from "./icon-styles";
import { SelectButton } from "./components/SelectButton";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "./components/SelectItem";
import { Card } from "./components/Card";
import { Tag } from "./components/Tag";
import { Progress, Wizard } from "./components/Wizard";
import { ImportSpreadSheetCard } from "./containers/ImportSpreadSheetCard";
import { SelectSpreadsheetCard } from "./containers/SelectSpreadsheetCard";
import { WriteEmailCard } from "./containers/WriteEmailCard";
import { EmailWriter } from "./components/EmailWriter";
import { EmailInput } from "./components/EmailInput";
import { Divider } from "./components/Divider";
import { PreviewTableCard } from "./containers/PreviewTableCard";
import { SummaryCard } from "./containers/SummaryCard";
import { SummaryDetail } from "./components/SummaryDetail";
import { SuccessCard } from "./containers/SuccessCard";

function App() {
  return (
    <div className="App flex justify-center items-center">
      <ImportSpreadSheetCard />
      {/* <SelectSpreadsheetCard /> */}

      {/* <SuccessCard /> */}

      {/* <SummaryCard /> */}

      {/* <SummaryDetail
        label="Sheet Link"
        detail="https://docs.google.com/spreadsheets/d/1RRC6MRwxZJzaLFHP0Xnn-tdbWv5bfLeW7QTcKD5ytLs/edit#gid=0"
      /> */}

      {/* <PreviewTableCard /> */}

      {/* <WriteEmailCard /> */}

      {/* <EmailWriter /> */}

      {/* <EmailInput label="To" /> */}

      {/* <Divider /> */}

      {/* <Select.Root>
        <SelectButton />

        <Select.Content className="select-content bg-white rounded-md min-h-11">
          <Select.Viewport className="select-viewport p-1 gap-0.5">
            <Select.Group>
              <SelectItem value="asdf">Hello</SelectItem>
              <SelectItem value="qwer">World</SelectItem>
            </Select.Group>

            <Select.Separator />
          </Select.Viewport>
        </Select.Content>
      </Select.Root> */}

      {/* <Wizard numSteps={2} stepLabels={["Hello World", "Goodbye World"]} /> */}
      {/* <Progress /> */}
      {/* <Tag>Name</Tag> */}

      {/* <table className="rounded-md">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>eric25@mit.edu</td>
            <td>Eric Chen</td>
          </tr>
          <tr>
            <td>sam@mit.edu</td>
            <td>Sam Postelnik</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default App;

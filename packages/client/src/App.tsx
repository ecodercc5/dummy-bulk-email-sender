import { Button } from "./components/Button";
import { IconInput } from "./components/IconInput";
import { ArrowUpTrayIcon, CheckIcon } from "@heroicons/react/24/outline";
import { SMALL_ICON } from "./icon-styles";
import { SelectButton } from "./components/SelectButton";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "./components/SelectItem";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App flex justify-center items-center">
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

      <Card>Card</Card>
    </div>
  );
}

export default App;

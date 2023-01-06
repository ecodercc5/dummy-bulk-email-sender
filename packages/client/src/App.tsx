import { ImportSpreadSheetCard } from "./containers/ImportSpreadSheetCard";
import Background from "./components/Background";
import { WizardCard } from "./containers/WizardCard";
import { useStateStore } from "./hooks/state-store";
import { PreviewTableCard } from "./containers/PreviewTableCard";
import { WriteEmailCard } from "./containers/WriteEmailCard";
import { SummaryCard } from "./containers/SummaryCard";
import { SuccessCard } from "./containers/SuccessCard";

const render = (currentStep: number) => {
  switch (currentStep) {
    case 1:
      return <ImportSpreadSheetCard />;

    case 2:
      return <PreviewTableCard />;

    case 3:
      return <WriteEmailCard />;

    case 4:
      return <SummaryCard />;

    case 5:
      return <SuccessCard />;

    default:
      return null;
  }
};

function App() {
  const currentStep = useStateStore((state) => state.currentStep);

  return (
    <>
      <Background className="w-full h-full"></Background>
      <div className="App relative flex justify-center items-center">
        <WizardCard className="w-full max-w-[974px]">
          {/* {currentStep === 1 ? <ImportSpreadSheetCard /> : <PreviewTableCard />} */}

          {render(currentStep)}
        </WizardCard>

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
    </>
  );
}

export default App;

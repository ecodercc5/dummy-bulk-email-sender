import { ImportSpreadSheetCard } from "./containers/ImportSpreadSheetCard";
import Background from "./components/Background";
import { WizardCard } from "./containers/WizardCard";

function App() {
  return (
    <>
      <Background className="w-full h-full"></Background>
      <div className="App relative flex justify-center items-center">
        <WizardCard className="w-full max-w-[974px]">
          <ImportSpreadSheetCard />
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

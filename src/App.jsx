import "./App.css";
import CalculationForm from "./components/CalculationForm";
import CopyToClipboardButton from "./components/CopyToClipboardButton";

function App() {
  return (
    <>
      <h1>Pressure Calculator</h1>
      <h3>
        UW charter is <span>210kPa</span> to <span>800kPa</span> &{" "}
        <span>23L/min</span>
      </h3>

      <div className="outputs-section">
        <CopyToClipboardButton />
      </div>
      <CalculationForm />
      <h4>
        Job Plan <span>1604</span> Water Pressure Fault Investigate - Civil
        Reactive
      </h4>
    </>
  );
}

export default App;

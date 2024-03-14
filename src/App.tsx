import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StepFormOne from "./components/StepFormOne";
import StepFormTwo from "./components/StepFormTwo";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return (
        <>
          <Navbar />
          <StepFormOne nextStep={nextStep} />
        </>
      );

    case 2:
      return (
        <>
          <Navbar />
          <StepFormTwo prevStep={prevStep} />
        </>
      );
    default:
      return null;
  }
}

export default App;

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import PlusIcon from "../../../public/icons/plus.svg";
import Cards from "../../components/Cards";
import Step_1AddIncident from "./Step_1AddIncident";
import Step_2 from "./Step_2";
import Step_3 from "./Step_3";
import Step_4 from "./Step_4";
import StepControl from "./StepControl";

const Incidents = () => {
  // By default, contents(search, cards) are true/will displayed
  const [isContentOpen, setIsContentOpen] = useState(true);

  //Page steps array
  const steps = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(0);

  // On New Incident button clicked
  const onAddIncident = () => {
    setIsContentOpen(!isContentOpen);
    setCurrentStep(steps[0]);
  };

  const prevStep = () =>{
    setCurrentStep(currentStep - 1)
  }
  const nextStep = () =>{
    setCurrentStep(currentStep + 1)
  }

  // For close the steps
  const onClose = ()=>{
    setIsContentOpen(!isContentOpen)
    setCurrentStep(0)
  }
  // After steps complete, it will open default incidents page
  if(currentStep > 4){
    setIsContentOpen(!isContentOpen)
    setCurrentStep(0)
  }

  return (
    <>
      <Navbar />
      {isContentOpen && (
        <>
          {/* Search section - importing details through provs */}
          <Search
            breadcrumb="Home - Incidents"
            title="Incidents"
            button="New Incident"
            buttonIcon={PlusIcon}
            buttonOnClick={onAddIncident}
          />
          {/* Contents cards */}
          <Cards />
        </>
      )}

      {/* Get start/1st step of add new incident */}
      {currentStep === 1 && <Step_1AddIncident onGetStart={nextStep}/>}
      {/* Step 2 */}
      {currentStep === 2 && (
        <>
          <StepControl stepProgressStyle='w-1/3' prevStep={prevStep} nextStep={nextStep} next={currentStep === 4 ? 'Finished': 'Next step'} onClose={onClose}/>
          <Step_2 />
        </>
      )}
      {/* Step 3 */}
      {currentStep === 3 && (
        <>
          <StepControl stepProgressStyle='w-2/3' prevStep={prevStep} nextStep={nextStep} next={currentStep === 4 ? 'Finished': 'Next step'} onClose={onClose}/>
          <Step_3 />
        </>
      )}
      {/* Step 4 */}
      {currentStep === 4 && (
        <>
          <StepControl stepProgressStyle='w-full' prevStep={prevStep} nextStep={nextStep} next={currentStep === 4 ? 'Finished': 'Next step'} onClose={onClose}/>
          <Step_4 />
        </>
      )}
    </>
  );
};

export default Incidents;

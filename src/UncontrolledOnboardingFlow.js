import React, { useState } from "react"

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [ onboardingData, setOnboardingData ] = useState({});
  const [ currentFlowStep, setCurrentFlowStep ] = useState(0);

  const currentChild = React.Children.toArray(children)[currentFlowStep];

  const goToNextStep = (stepData) => {
    const nextStep = currentFlowStep + 1;
    const updatedData = {
      ...onboardingData,
      ...stepData
    }
    
    console.log(updatedData);

    if(nextStep < children.length) {
      setCurrentFlowStep(nextStep);
    } else {
      onFinish(updatedData)
    }
    setOnboardingData(updatedData);;
  }
  
  if(React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNextStep });
  }

  return currentChild;
}

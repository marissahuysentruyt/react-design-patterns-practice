import React from "react"

export const ControlledOnboardingFlow = ({ children, onNext, currentFlowStep }) => {
  const goToNextStep = (stepData) => {
    onNext(stepData);
  }
  const currentChild = React.Children.toArray(children)[currentFlowStep];
  
  if(React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNextStep });
  }

  return currentChild;
}

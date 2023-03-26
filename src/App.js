import { UncontrolledModal } from "./UncontrolledModal";
import { ControlledModal } from "./ControlledModal";
import { useState } from "react";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const OnboardingStepOne = ({ goToNextStep }) => {
  const [ name, setName ] = useState("");
  return (
    <>
      <h1>Step 1</h1>
      <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => goToNextStep({name})}>Next Step</button>
    </>
  )
}

const OnboardingStepTwo = ({ goToNextStep }) => {
  const [ age, setAge] = useState("");
  return (
    <>
      <h1>Step 2</h1>
      <input type="text" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
      <button onClick={() => goToNextStep({age})}>Next Step</button>
    </>
  )
}

const OnboardingStepThree = ({ goToNextStep }) => {
  const [ email, setEmail ] = useState("");
  return (
    <>
      <h1>Step 3</h1>
      <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={() => goToNextStep({email})}>Next Step</button>
    </>
  )
}

const ControlledOnboardingStepOne = ({ goToNextStep }) => {
  const [ name, setName ] = useState("");
  return (
    <>
      <h1>Step 1</h1>
      <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => goToNextStep({name})}>Next Step</button>
    </>
  )
}

const ControlledOnboardingStepTwo = ({ goToNextStep }) => {
  const [ age, setAge] = useState("");
  return (
    <>
      <h1>Step 2</h1>
      <input type="text" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
      <button onClick={() => goToNextStep({age})}>Next Step</button>
    </>
  )
}

const ControlledOnboardingStepThree = ({ goToNextStep }) => {
  return (
    <>
      <h1>Step 3</h1>
      <p>You'll receive a discount since you're eligible 🥳</p>
      <button onClick={goToNextStep}>Next Step</button>
    </>
  )
}


const ControlledOnboardingStepFour = ({ children }) => {
  const [ email, setEmail ] = useState("");
  return (
    <>
      <h1>Step 4</h1>
      <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      { children }
    </>
  )
}

function App() {
  const [ showModal, setShowModal ] = useState(false);
  const [ onboardingData, setOnboardingData ] = useState({});
  const [ currentFlowStep, setCurrentFlowStep ] = useState(0);
  const [ onboardingComplete, setOnboardingComplete ] = useState(false);

  const onNext = (stepData) => {
    setOnboardingData({...onboardingData, ...stepData});
    setCurrentFlowStep(currentFlowStep + 1);
    console.log("controlled flow data will look one step behind:", onboardingData);
  }

  return (
    <>
      {/* all open & close buttons for this modal are within the component itself */}
      <UncontrolledModal>
        <h1>This ModalBody component is the one keeping track of its showModal state.</h1>
      </UncontrolledModal>

      <button onClick={() => setShowModal(!showModal)}>
        Open a Controlled Modal
      </button>
      <ControlledModal shouldShow={showModal}
        onClose={() => setShowModal(false)}
      >
        <h1>This ModalBody component isn't doing anything. App.js is <i>controlling</i> the showModal state changes, and passing that state to this modal. Controlled 👍</h1>
      </ControlledModal>

      <UncontrolledForm />
      <ControlledForm />

      <UncontrolledOnboardingFlow onFinish={data => {alert("thanks 😊 you're all set!")}}>
        <OnboardingStepOne />
        <OnboardingStepTwo />
        <OnboardingStepThree />
      </UncontrolledOnboardingFlow>
      <ControlledOnboardingFlow 
        currentFlowStep={currentFlowStep}
        onFinish={data => {alert("thanks 😊 you're all set!")}}
        onNext={onNext}
      >
        <ControlledOnboardingStepOne />
        <ControlledOnboardingStepTwo />
        {(onboardingData.age >= 59) &&
          <ControlledOnboardingStepThree />
        }
        <ControlledOnboardingStepFour>
          <button onClick={() => {
            setOnboardingComplete(true)
            setOnboardingData({...onboardingData})
            console.log(onboardingData)
            }
          }>
            Finish
          </button>
        { onboardingComplete ? <span>Done! Thank you </span> : "" }

        </ControlledOnboardingStepFour>
      </ControlledOnboardingFlow>
    </>
  )
}

export default App

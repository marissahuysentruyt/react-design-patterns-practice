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
      <h3>Name:</h3>
      <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      <button className="submit-button" onClick={() => goToNextStep({name})}>Next Step</button>
    </>
  )
}

const OnboardingStepTwo = ({ goToNextStep }) => {
  const [ age, setAge] = useState("");
  return (
    <>
      <h3>Age:</h3>
      <input type="text" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
      <button className="submit-button" onClick={() => goToNextStep({age})}>Next Step</button>
    </>
  )
}

const OnboardingStepThree = ({ goToNextStep }) => {
  const [ email, setEmail ] = useState("");
  return (
    <>
      <h3>Email:</h3>
      <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <button className="submit-button" onClick={() => goToNextStep({email})}>Next Step</button>
    </>
  )
}

const ControlledOnboardingStepOne = ({ goToNextStep }) => {
  const [ name, setName ] = useState("");
  return (
    <>
      <h3>Name:</h3>
      <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      <button className="submit-button" onClick={() => goToNextStep({name})}>Next Step</button>
    </>
  )
}

const ControlledOnboardingStepTwo = ({ goToNextStep }) => {
  const [ age, setAge] = useState("");
  return (
    <>
      <h3>Age:</h3>
      <input type="text" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
      <button className="submit-button" onClick={() => goToNextStep({age})}>Next Step</button>
    </>
  )
}

const ControlledOnboardingStepThree = ({ goToNextStep }) => {
  return (
    <>
      <h3>Discount ✅</h3>
      <p>You'll receive a discount since you're eligible 🥳</p>
      <button onClick={goToNextStep}>Next Step</button>
    </>
  )
}

const ControlledOnboardingStepFour = ({ children }) => {
  const [ email, setEmail ] = useState("");
  return (
    <>
      <h3>Email:</h3>
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
      <h1>Controlled vs. Uncontrolled Components</h1>
      <h2>Uncontrolled Modal</h2>
      <p>All open & close functionality for this modal are within the component itself. <code>App.js</code> can't control when this dialog window opens because the component itself determines the <code>showModal</code> state.</p>
      <UncontrolledModal>
        <h1>This ModalBody component is the one keeping track of its showModal state.</h1>
      </UncontrolledModal>

      <h2>Controlled Modal</h2>
      <p>The controlled modal can't do anything on its own. In comparison to the uncontrolled modal, this open button is in <code>App.js</code>. When clicked, <code>App.js</code> changes state, and send that state change to <code>ControlledModal</code>. <em>This</em> is what actually triggers the modal to open. Then the closing functionality is returned within <code>ControlledModal</code>.</p>
      <button className="modal-button" onClick={() => setShowModal(!showModal)}>
        Open a Controlled Modal
      </button>
      <ControlledModal shouldShow={showModal}
        onClose={() => setShowModal(false)}
      >
        <h1>This ModalBody component isn't doing anything. App.js is <i>controlling</i> the showModal state changes, and passing that state to this modal. Controlled 👍</h1>
      </ControlledModal>

      <h2>Uncontrolled Form</h2>
      <p>This form component isn't actually paying attention to the value of the its inputs. If the submit button is pressed, only then will the component look at and "remember" the values or validate the information.</p>
      <UncontrolledForm />

      <h2>Controlled Form</h2>
      <p>The <code>ControlledForm</code> component listens for changes on every one of its inputs. The values are set to the corresponding state held within the component. Form validation can occur while someone is completing the form.</p>
      <ControlledForm />

      <h2>Uncontrolled Onboarding Flow</h2>
      <p>This <code>UncontrolledOnboardingFlow</code> component is setting its own internal state. It collects data about which onboarding step to display, and determines when the flow is complete.</p>
      <UncontrolledOnboardingFlow onFinish={data => {alert("thanks 😊 you're all set!")}}>
        <OnboardingStepOne />
        <OnboardingStepTwo />
        <OnboardingStepThree />
      </UncontrolledOnboardingFlow>

      <h2>Controlled Onboarding Flow</h2>
      <p>Many of the props getting passed to <code>ControlledOnboardingFlow</code> are being passed from the parent <code>App.js</code>. <code>App.js</code> is tracking <code>onboardingData</code>, <code>onboardingComplete</code>, and <code>currentFlowStep</code> state variables. Because the state variable <code>onboardingData</code> is now tracked within the parent component, we can much more easily display conditional onboarding steps. Test out setting the age to different numbers and see if you can find the fourth controlled onboarding step!</p>
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
          <button className="submit-button" onClick={() => {
            setOnboardingComplete(true)
            setOnboardingData({...onboardingData})
            console.log(onboardingData)
            }
          }>
            Finish
          </button>
          {onboardingComplete ? <span className="completed">Done! Thank you </span> : "" }

        </ControlledOnboardingStepFour>
      </ControlledOnboardingFlow>
    </>
  )
}

export default App

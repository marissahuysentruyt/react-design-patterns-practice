import { RecursiveComponent } from "./RecursiveComponent";
import { DangerButton, SuccessButton } from "./composition";
import { WarningButton, DarkButton } from "./partiallyApply";

const wackyNestedObject = {
	item: "cat",
	meals: {
		"dry-food": "yes",
		"wet-food": {
			brand: 'Earthborn',
		},
		time: {
			morning: {
				breakfast: 'automatic feeder',
			},
			evening: {
				dinner: 'performs tricks',
			}
		}
	},
	age: {
		gotcha: 1,
		current: 3,
	}
}

function App() {
  return (
    <>
      <RecursiveComponent data={wackyNestedObject}/>

      <DangerButton text="You can't undo this."/>

      <SuccessButton text="Finish!"/>

      <WarningButton text="⚠️ warning!"/>

      <DarkButton text="🌚"/>
    </>
  )
}

export default App

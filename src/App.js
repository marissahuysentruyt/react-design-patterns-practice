import { RecursiveComponent } from "./RecursiveComponent";
import { DangerButton, SuccessButton } from "./composition";
import { WarningButton, DarkButton } from "./partiallyApply";

const wackyNestedObject = {
	item: "cat",
  name: "Chauncey",
	meals: {
		"dry-food": "yes",
		"wet-food": {
			brand: 'Earthborn',
		},
		"meal-times": {
			morning: {
				breakfast: 'automatic feeder',
			},
			evening: {
				dinner: 'performs tricks',
			}
		}
	},
	age: {
		"gotcha-age": 1,
		"current-age": 3,
	}
}

function App() {
  return (
    <>
      <h1>Functional Design Patterns</h1>

      <h2>Recursive Components</h2>
      <p>The data passed to <code>RecursiveComponent</code> is defined in <code>App.js</code>. You could probably do more within <code>RecursiveComponent</code> to capitalize the <code>keys</code>, transform the text in ways, and slice out the hypens.</p>
      <RecursiveComponent data={wackyNestedObject}/>

      <h2>Component Composition (2 ways)</h2>
      <p>This component was <em>composed</em> by utilizing an already built <code>Button</code> that was very plain. Change the color and size of these newer, specific components in <code>composition</code>, and change the text of these buttons via the prop in <code>App.js</code>.</p>
      <DangerButton text="❕ You can't undo this."/>

      <SuccessButton text="✅ Finish!"/>

      <h2>Partially-Applied Components (2 ways)</h2>
      <p><code>partiallyApply</code> is a higher order component that returns the generic <code>Button</code> component, plus some additional props. Those additional props are actually some (not all) of the props that the generic button needs. Change the color and size of these buttons in the <code>partialProps</code> argument in the <code>partiallyApply</code> function call, and change the text of these buttons via the prop in <code>App.js</code>.</p>
      <WarningButton text="⚠️ warning!"/>

      <DarkButton text="🌚 disabled"/>
    </>
  )
}

export default App

import { SplitScreen } from "./SplitScreen";
import { RegularList } from "./RegularList";
import { ShortSupplyListItem } from "./ShortSupplyListItem";
import { LongSupplyListItem } from "./LongSupplyListItem";
import { NumberedList } from "./NumberedList";
import { Modal } from "./Modal";

const LeftComponent = ({title}) => {
  return <h1 style={{ color: "#000", backgroundColor: "#f542ce" }}>{title}</h1>
}

const CenterComponent = ({title}) => {
  return <h1 style={{ color: "#000", backgroundColor: "#32f0ed" }}>{title}</h1>
}

const RightComponent = ({title}) => {
  return <h1 style={{ color: "#000", backgroundColor: "#fff" }}>{title}</h1>
}

const officeSupplies = [
  {
    supply: "stapler",
    purpose: "staple papers",
    id: "123",
    color: "purple"
  }, {
    supply: "sharpie",
    purpose: "redact stuff",
    id: "234",
    color: "black"
  }, {
    supply: "scissors",
    purpose: "cut papers",
    id: "345",
    color: "yellow"
  }, {
    supply: "printer",
    purpose: "make copies or print stuff",
    id: "456",
    color: "black"
  }
];

const kitchenUtensils = [
  {
    utensil: "spatula",
    purpose: "flip pancakes",
    id: "123",
    color: "black"
  }, {
    utensil: "chef's knife",
    purpose: "cut veggies",
    id: "234",
    color: "red"
  }, {
    utensil: "whisk",
    purpose: "mix batter",
    id: "345",
    color: "copper"
  }, {
    utensil: "supoon",
    purpose: "scrape stuff out of bowls",
    id: "456",
    color: "blue"
  }
];

function App() {
  return (
    <>
      <h1>Layout Components</h1>

      <h2>Splitscreen</h2>
      <p>Change your screen size, and you'll notice the KWL chart will keep its proportions. "K" has a "weight" or proportion (sort of like <code>fr</code> for grid styles) of 2; "W" has a weight of 6; "L" has a weight of 3.</p>
      <SplitScreen leftWeight="2" centerWeight="6" rightWeight="3">
        <LeftComponent title="K"></LeftComponent>
        <CenterComponent title="W"></CenterComponent>
        <RightComponent title="L"></RightComponent>
      </SplitScreen>

      <h2>Regular Lists (2 ways)</h2>
      <p>
        The <code>itemResourceName</code> prop value is the singular version of the <code>items</code> object you pass to <code>RegularList</code>. (i.e. officeSupplies => officeSupply). That <code>itemResourceName</code> then has to match the prop that gets passed to either <code>ShortSupplyListItem</code> or <code>LongSupplyListItem</code>.
      </p>
      <h3>with <code>ShortSupplyListItem </code>:</h3>
      <RegularList
        items={officeSupplies}
        itemResourceName="officeSupply"
        itemComponent={ShortSupplyListItem}
      />
      <h3>with <code>LongSupplyListItem </code>:</h3>
      <RegularList 
        items={kitchenUtensils}
        itemResourceName="kitchenUtensil"
        itemComponent={LongSupplyListItem}
      />

      <h2>Numbered List</h2>
      <p>This is very similar to the <code>RegularList</code> component, except that it uses the index of the items that were mapped through to create the returned numbers.</p>
      <NumberedList
        items={officeSupplies}
        itemResourceName="officeSupply"
        itemComponent={ShortSupplyListItem}
      />

      <h2>Modal/Dialog</h2>
      <p>Getting ahead a little, this is an example of an <em>uncontrolled</em> modal or dialog. All state for showing or not showing the modal is taken care of by the <code>Modal</code> component itself.</p>
      <Modal>
        <h2>You opened the modal! 🎉</h2>
        <RegularList 
          items={kitchenUtensils}
          itemResourceName="kitchenUtensil"
          itemComponent={LongSupplyListItem}
        />
      </Modal>
      
    </>
  )
}

export default App;

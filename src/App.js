import { SplitScreen } from "./SplitScreen";
import { RegularList } from "./RegularList";
import { ShortSupplyListItem } from "./ShortSupplyListItem";
import { LongSupplyListItem } from "./LongSupplyListItem";
import { NumberedList } from "./NumberedList";
import { Modal } from "./Modal";

const LeftComponent = ({title}) => {
  return <h1 style={{ backgroundColor: "blue"}}>{title}</h1>
}

const CenterComponent = ({title}) => {
  return <h1 style={{ backgroundColor: "red"}}>{title}</h1>
}

const RightComponent = ({title}) => {
  return <h1 style={{ textTransform: "uppercase", border: "1px solid white"}}>{title}</h1>
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
      <SplitScreen leftWeight="2" centerWeight="6" rightWeight="3">
        <LeftComponent title="K"></LeftComponent>
        <CenterComponent title="W"></CenterComponent>
        <RightComponent title="L"></RightComponent>
      </SplitScreen>

      {/* the resource name must match what is named as the prop in the list item component */}
      <RegularList
        items={officeSupplies}
        itemResourceName="officeSupply"
        itemComponent={ShortSupplyListItem}
      />
      <RegularList 
        items={kitchenUtensils}
        itemResourceName="kitchenUtensil"
        itemComponent={LongSupplyListItem}
      />

      <NumberedList
        items={officeSupplies}
        itemResourceName="officeSupply"
        itemComponent={ShortSupplyListItem}
      />

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

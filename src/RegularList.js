export const RegularList = ({ items, itemResourceName, itemComponent: ItemComponent}) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{[itemResourceName]: item}} />
      ))}
    </>
  )
}

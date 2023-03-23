export const NumberedList = ({ items, itemResourceName, itemComponent:ItemComponent}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h4>{i + 1}</h4>
          <ItemComponent key={i} {...{[itemResourceName]: item}} />
        </>
        ))}
    </>
  )
}

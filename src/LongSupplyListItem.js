export const LongSupplyListItem = ({ kitchenUtensil }) => {
  const { utensil, purpose, color, id } = kitchenUtensil;

  return (
    <>
      <h3>{utensil}</h3>
      <ul>
        <li>
          purpose in life: {purpose}
        </li>
        <li>
          color: {color}
        </li>
        <li>
          id: {id}
        </li>
      </ul>
    </>
  )
}

export const ShortSupplyListItem = ({ officeSupply }) => {
  const { supply, purpose } = officeSupply;

  return (
    <p>{supply}: {purpose}</p>
  )
}

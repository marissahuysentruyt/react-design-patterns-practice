const isObject = x => typeof x === "object" && x !== null;

export const RecursiveComponent = ({ data }) => {
  // define the "stopping condition"
  if(!isObject(data)) {
    return (
      <li>{data}</li>
    );
  }

  // returns an array of key/value pairs
  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>{key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  )
}

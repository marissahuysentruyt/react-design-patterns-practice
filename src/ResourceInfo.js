import axios from "axios";
import { useDataSource } from "./useDataSource";

export const ResourceInfo = ({resourceUrl}) => {
  const resource = useDataSource(async() => {
    const response = await axios.get(`${resourceUrl}`);
    return response.data;
  });

	const { name } = resource || {};

  return resource ? (
    <>
      <h3>Resource Returned:</h3>
      <h4 className="resource">{name}</h4>
    </>
  ):
  <p>Loading...</p>
}

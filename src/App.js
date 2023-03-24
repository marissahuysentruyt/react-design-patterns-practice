import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { DataSource } from "./DataSource";
import axios from "axios";

const getServerData = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
}

// make sure to add something to localStorage first!
const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
}

const LocalStorageText = ({message}) => <p>{message}</p>;

function App() {
  return (
    <>
      {/* specify the data url within UserLoader */}
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>

      {/* use props to specify the data url */}
      <ResourceLoader resourceName="product" resourceUrl="/products/3456">
        <ProductInfo />
      </ResourceLoader>
      <ResourceLoader resourceName="user" resourceUrl="/users/234">
        <UserInfo />
      </ResourceLoader>

      {/* create extracted functions, passed in as props for data retrieval */}
      <DataSource resourceName="product" getDataFunction={async() => { 
        const response = await axios.get("/products/1234");
        return response.data;
        }}>
        <ProductInfo />
      </DataSource>
      <DataSource resourceName="user" getDataFunction={getServerData("/users/345")}>
        <UserInfo />
      </DataSource>
      {/* localstorage note: the resourceName value needs to match the argument for getLocalStorageData */}
      <DataSource resourceName="message" getDataFunction={getLocalStorageData("message")}>
        <LocalStorageText />
      </DataSource>
    </>
  )
}

export default App;

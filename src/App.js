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

const LocalStorageText = ({message}) => <h4>{message}</h4>;

function App() {
  return (
    <>
      <h1>Container Components</h1>
      
      <h2>UserLoader</h2>
      <p>The <code>UserLoader</code> container component is the one in charge grabbing this person's information by giving it the <code>userId</code> that's in our server (<code>server.js</code>) That info is just passed to a separate <code>UserInfo</code> component to be displayed.</p>
      {/* the data url is specified within UserLoader component */}
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>

      <h2>ResourceLoader</h2>
      <p><code>ResourceLoader</code> is just a little more generic. We pass a <code>resourceName</code> prop that matches whatever info component we want to display. Then give the entire <code>resourceUrl</code> as a prop.</p>
      {/* use props to specify the data url */}
      <h3>Example with <code>resourceName="product"</code></h3>
      <ResourceLoader resourceName="product" resourceUrl="/products/3456">
        <ProductInfo />
      </ResourceLoader>
      <h3>Example with <code>resourceName="user"</code></h3>
      <ResourceLoader resourceName="user" resourceUrl="/users/234">
        <UserInfo />
      </ResourceLoader>

      <h2>DataSource</h2>
      <p>This component is the most generic yet. Although <code>ResourceLoader</code> is probably sufficient for most projects, <code>DataSource</code> doesn't know where its data is going to come from. We create additional functions (declared in our <code>App.js</code> file) that we then pass to <code>DataSource</code>. Those functions are just the extracted fetch calls to <code>server.js</code>.</p>

      <h3>Example with an inline <code>getDataFunction</code></h3>
      {/* create extracted functions, passed in as props for data retrieval */}
      <DataSource resourceName="product" getDataFunction={async() => { 
        const response = await axios.get("/products/1234");
        return response.data;
        }}>
        <ProductInfo />
      </DataSource>
      <h3>Example 1 with a previously declared <code>getDataFunction</code></h3>
      <DataSource resourceName="user" getDataFunction={getServerData("/users/345")}>
        <UserInfo />
      </DataSource>
      <h3>Example 2 with a previously declared <code>getDataFunction</code> (this retrieves data from local storage instead)</h3>
      <p>Local Storage Note: make sure to save a <code>key/value</code> pair in your browser's localStorage.</p>
      <DataSource resourceName="message" getDataFunction={getLocalStorageData("message")}>
        <LocalStorageText />
      </DataSource>
    </>
  )
}

export default App;

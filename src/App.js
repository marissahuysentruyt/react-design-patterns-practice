import { CurrentUserInfo } from "./CurrentUserInfo";
import { AnyUserInfo } from "./AnyUserInfo";
import { ProductInfo } from "./ProductInfo";
import { ResourceInfo  } from "./ResourceInfo";

function App () {
  return (
    <>
      <h1>Custom Hooks</h1>

      <h2>useCurrentUser</h2>
      <p>Because our <code>server.js</code> file has a <code>/current-user</code> endpoint hard coded, the <code>useCurrentUser</code> grabs all of that current user data with a <code>useEffect</code> hook, and sets the <code>user</code> data with <code>useState</code>. Then <code>CurrentUserInfo</code> can just call <code>useCurrentUser</code> instead of needing to both with <code>useState</code> and <code>useEffect</code> itself.</p>
      <CurrentUserInfo />

      <h2>useAnyUser</h2>
      <p>With a slight refactoring tweak, <code>useCurrentUser</code> becomes <code>useAnyUser</code>. This custom hook can find any user stored in the server by passing a <code>userId</code> to the hook via the prop on this <code>AnyUserInfo</code> component. Change that <code>userId</code> prop value of <code>AnyUserInfo</code> in <code>App.js</code> to see this info change.</p>
      <AnyUserInfo userId="345"/>

      <h2>userResource</h2>
      <p>When you change the <code>resourceId</code> prop on <code>ProductInfo</code>, you'll see changes in the information. The new <code>useResource</code> hook is more generic than the previous two custom hooks because it can find anything we've stored on the server. The component that calls <code>useResource</code> has to pass it the entire <code>resourceUrl</code> in order to find the right data.</p>
      <ProductInfo resourceId="3456" />

      <h2>useDataSource (2 ways)</h2>
      <p><code>useDataSource</code> requires the entire function of where to even find its requested data. When you call <code>useDataSource</code> from <code>ResourceInfo</code> (which is what you see returned here twice), you specify the fetch call as the <code>getDataFunction</code> prop for the custom hook. The <code>resourceUrl</code> prop on the <code>ResourceInfo</code> can change to return different items from our server file.</p>
      <ResourceInfo resourceUrl="/users/345" />
      <ResourceInfo resourceUrl="/products/1234" />
    </>
  )
}

export default App

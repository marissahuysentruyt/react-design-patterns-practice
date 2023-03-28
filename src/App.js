import { CurrentUserInfo } from "./CurrentUserInfo";
import { AnyUserInfo } from "./AnyUserInfo";
import { ProductInfo } from "./ProductInfo";
import { ResourceInfo  } from "./ResourceInfo";

function App () {
  return (
    <>
      <CurrentUserInfo />

      <AnyUserInfo userId="345" />

      <ProductInfo resourceId="3456" />

      <ResourceInfo resourceUrl="/users/345" />
      <ResourceInfo resourceUrl="/products/1234" />
    </>
  )
}

export default App

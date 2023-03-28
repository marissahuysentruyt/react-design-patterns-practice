import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";
import { ResourceInfoForm } from "./ResourceInfoForm";

const UserInfoWrapped = printProps(UserInfo);

const WithUserWrapped = withUser(UserInfo, "234");

function App() {
  return (
    <>
      <UserInfoWrapped
        propOne={1}
        propTwo={"Whatever props are passed to this UserInfoWrapped component will be logged"}
        propThree={{name: "User Info"}}
      />

      <WithUserWrapped />

      <UserInfoForm />

      <ResourceInfoForm />
    </>
  )
}

export default App

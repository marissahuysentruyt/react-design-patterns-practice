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
      <h1>Higher Order Components (HOC)</h1>

      <h2>printProps</h2>
      <em>Check your browser console to see <code>printProps</code> at work! The component isn't getting all of the props <code>UserInfo</code> needs to return JSX, so this will only ever display "Loading..."</em>
      <p>With a new <code>UserInfoWrapped</code> component (defined in <code>App.js</code>) set equal to the results of calling <code>printProps(UserInfo)</code>, we can add extra props! The extra props can be anything, and <code>printProps</code> prints them to the console!</p>
      <UserInfoWrapped
        propOne={1}
        propTwo={"Whatever props are passed to this UserInfoWrapped component will be logged"}
        propThree={{name: "User Info"}}
      />

      <h2>withUser</h2>
      <p>The component here is called <code>WithUserWrapped</code>, and it's defined in <code>App.js</code>. It is set equal to the result of calling <code>withUser(UserInfo, "234")</code>. The <code>UserInfo</code> component is what you actually see displayed, after <code>withUser</code> retrieved the user with a <code>userId</code> of <code>234</code>. <code>UserInfo</code> can then display everything found attached to that <code>userId</code>.</p>
      <WithUserWrapped />

      <h2>withEditableUser</h2>
      <p>This component is called <code>UserInfoForm</code>, and it was defined with the <code>withEditableUser</code> HOC. If you want to change the default user that gets loaded here, visit the last line of <code>UserInfoForm</code> to change the <code>userId</code>.</p>
      <p>Make some changes, and without saving, click the <code>Reset</code> button. All your data will return to its original state when you opened this page. Then make changes again, and click <code>Save Your Changes</code> to keep them. Refresh your browser, and your changes should still be there. Now, if you make changes and reset the data, those saved changes will repopulate.</p>
      <UserInfoForm />

      <h2>withEditableResource</h2>
      <p>A lot of the same rules apply here, and the overall functionality is the same. The biggest changes happened in <code>withEditableResource</code> needing extra props to be more generic. In <code>ResourceInfoForm</code>, you can define the <code>resourceName</code> and <code>resourcePath</code> for the default data shown here. To be clear, <code>withEditableResource</code> is the dynamic component being used- this returned <code>ResourceInfoForm</code> is specifically built for products. You could refactor <code>UserInfoForm</code> to use <code>withEditableResource</code> and get similar results.</p>
      <ResourceInfoForm />
    </>
  )
}

export default App

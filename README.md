# Higher Order Components in React

This branch is dedicated to learning how to use and implement higher order components.

A higher order component, or HOC, basically returns other components. HOC's are functions that you can call to create new components. Since they're just functions, once they're called, they return a different component, then _that_ component returns its own JSX.

HOC's are also used to share behaviors between components, a lot like container components (find the `cmp--containers` branch of this repo for more info!). They can also add extra functionality to existing components.

**Make sure to run `node server.js` in this branch first, then run `npm run start`. You'll see a bunch of "proxy" errors in your terminal. Running the `node server.js` command sets it up as a sort of database for this branch.**

## Extra Components We'll Be Using
Both of the components below are the children of our higher order components. These are the components that we want to pass information to, and the content we actually want to see.

`ProductInfo` takes a product as an argument, destructures it, and as long as the product isn't null, it'll return the products name, its price, a description, and a rating.

![ProductInfo code](/public/ProductInfo.png)

`UserInfo` is basically doing the same thing, but with users. You'll retrieve the name, age, hair color and some hobbies of each person.

![UserInfo code](/public/UserInfo.png)

As our higher order components load the data from `server.js`, don't be alarmed if you see the "Loading..." paragraph element. You can see both the `users` object and the `products` object in `server.js`.

## printProps: Printing Props

This higher order component is very simple, demonstrating how to add new props to existing components. `printProps` takes a entire component as an argument. It will need to be used like a function, so once it's called, it will log the props of the newest component (in our case, a wrapper component). It then returns any new props that are added, logs the values of those props, and proceeds to return the passed component, adding the extra props to that component.

![printProps code](/public/printPropsHOC.png)

In `App.js`, we define the new wrapper component called `UserInfoWrapped`. That component is calling `printProps` with `UserInfo` as its argument. Because we didn't pass any props to `UserInfo`, when we implement `printProps` into `App.js` we don't get anything returned. The `printProps` component only returns data in the console of the browser. 

On `UserInfoWrapped`, any new props can be added. For this example, super simple props were defined: `propOne`, `propTwo` and `propThree`. When looking in the console, you'll see the values of these props printed. 

![printProps in App.js](/public/App_printProps.png)

## withUser: Loading Data

The next HOC will showcase how we can load data. `withUser` is a function that takes an entire component as a prop, as well as an additional `userId` prop to eventually send to that passed component. The `userId` prop helps to retrieve the data from the server, and then that matching data will flow into the component. You can see `withUser` retrieving the data in the `useEffect` hook, changing the state of the `user` variable to the new data it finds, and then adding and passing that `user` data to the returned component (`user={user}` in line 15).

![withUser code](/public/withUserHOC.png)

Similarly to `printProps`, define a new wrapper component within `App.js`- this example is called `WithUserWrapped`. This new wrapper is going to retrieve the data associated with the `userId` of "234", and that data is going to get passed back to the `UserInfo` component prop of `withUser`. What you see displayed on the page is actually `UserInfo`, and by changing the `userId` prop of `withUser`, you can get any of the users stored in our `server.js` file. This wrapper component is even easier to implement into `App.js` than `UserInfoWrapped`- just return `<WithUserWrapped />` and `withUser` takes care of loading all the necessary data!

![withUser in App.js](/public/App_withUser.png)

## withEditableUser: Modifying Data

We've seen HOC's that loading data, but we can take things further still. This next HOC, `withEditableUser`, we can prepopulate a form, and allow someone to change the information. Keeping with the users theme, `withEditableUser` modifies the user data on the returned component when certain functions are called. That allows any changed data to persist through browser refreshes. 

In this HOC, we have an additional state variable called `originalUser`. That is what is initially displayed on the page, in the form fields. In the `useEffect`, we're fetching data from the `server.js` file, based on the `userId` prop, and setting both the `user` state and `originalUser` state to that data.

The difference in this component are the functions to keep any new data saved. We have an "on-save", "on-reset" and "on-change" function. The `onChangeUser` function actively updates the state of our `user` variable as you type. `onSaveUser` almost creates a "new" user (although still the same `userId`) but with the changes made. This function updates the `originalUser` state, and keeps the information changed even if the browser got refreshed. And finally, `onResetUser` reverses any changes that are made _before_ triggering the save. 

On line 31 below, you can also see that we're adding all of these to the returned component. 

![withEditableUser code](/public/withEditableUserHOC.png)

`UserInfoForm` is another example of how to use higher order components to define new components. Instead of defining our wrapper components in `App.js` (like with `printProps` or `withUser`), it's perfectly acceptable to use them while creating a new component in a new file. `UserInfoForm` is also very simple to implement in `App.js`- just return `<UserInfoForm>`. 

`UserInfoForm` is _very_ similar to the `UserInfo` component used in previous examples. The only difference is using the `withEditableUser` HOC in its creation, that we way receive all the props and functions `withEditableUser` utilizes. Instead of passing props and values and functions to `UserInfoForm` in `App.js`, we can define them right in this component. We have several `onClick` triggers for the save and reset funtions, and then for each input in `UserInfoForm`, we are updating a property of the `user` object. At the very bottom of this file, you can see where to declare the `userId` prop (the "123" in line 27).

![UserInfoForm code](/public/UserInfoForm.png)

## withEditableResource: Modifying Data continued...

To continue showing the power of HOC and how far you can take them, we'll refactor our `UserInfoForm` and `withEditableUser` to accept more generic data (sort like when we used more and more generic container components for fetching data). The new HOC is called `withEditableResource` and the main difference between it and `withEditableUser` is the ability to pass in a `resourceName` and a `resourcePath`. 

The rest of the component is very similar. We have `originalData` and `data` as variables being stored and updating via state. The `useEffect` hook is doing the same thing, getting the data from the `resourcePath` and setting our variables. All the functions are doing the same things as well. 

Because this is a more generic component, there are two instances of new code. At the top of the file, before `withEditableResource` is even defined, we have a function called `capitalize` which does exactly what you think it does- it capitalizes the string given to it. 👍 Above our return statement, however, is a new object called `resourceProps`. This object isn't doing anything to the component itself, but it is make sure that props match. Basically, we want to capitalize the `resourceName` (like "user" or "product") and append it to the function props our other components might have (you remember `onSaveUser` from `UserInfoForm` right?). Once the wordsmithing has been completed, we just want to reroute that function to the new function names that are way less specific. Because `withEditableResource` is a higher order component, that means we can pass the new `resourceProps` object to our returned component.

![withEditableResource code](/public/withEditableResourceHOC.png)

This is another example of defining the new `ResourceInfoForm` component using our refactored HOC. After destructuring, this code is almost identical to the `UserInfoForm`, with some slight modifications to allow for a different type of object getting returned. 

The props sort of get passed back and forth between the HOC and this `ResourceInfoForm` so that the function names get updated appropriately across the board. Finally on the last line, the pre-populated product info is declared as the `resourcePath` and `resourceName`. 🤯

![ResourceInfoForm code](/public/ResourceInfoForm.png)

Hope you learned a lil' somethin' somethin'! Higher order components offer lots of flexibility when it comes to creating components. Because lots of these examples have the ability to add props, we can make our individual components really plain, and use the HOC's to create much more specified components. The need for building that specificity into the individual components is reduced. In my limited understanding, it's also pretty interesting that these higher order components almost pass data between themselves and the components they actually return (because they need their own props and do some data retrieval in some cases to _pass_ to those props), which also makes them very similar to the container components we showcased on the `cmp--containers` branch. 

### **Happy Learning! 🚀**


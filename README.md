# Custom Hooks in React

This branch is dedicated to showcasing how powerful creating custom React hooks can be.

Creating a custom hook may sound intimidating, but the idea is to just combine several basic hooks into new function you can call. They’re just functions that call other hooks and they allow shared behavior between multiple components. In order to "be" a hook, however, custom hooks still have to start with the word "use" otherwise React won't know that it's a hook.

**Make sure to run `node server.js` in this branch first, then run `npm run start`. You'll see a bunch of "proxy" errors in your terminal if you don't have  server file ready. Running the `node server.js` command sets it up as a sort of database for this branch.**

## Extra Components We'll Be Using
We're going to continue using several bonus components in this branch. These are the components that we want to pass information to, and the content we actually want to see. For each custom hook, there should be a component that will utilize the hook in order to return JSX.

As our components load the data from `server.js`, don't be alarmed if you see the "Loading..." paragraph element. You can see both the `users` object and the `products` object in `server.js`.

## useCurrentUser custom hook

This custom hook is combining the `useState` and `useEffect` hooks. Basically, by calling this hook, you'll get a `user` object after `useCurrentUser` has already retrieved the data from `server.js` (this happens in `useEffect`) and set that as the data for `user` (this happens with the help of `useState`). 

![useCurrentUser hook code](/public/useCurrentUser.png)

`CurrentUserInfo` is very similar to our `UserInfo` component seen in other branches, but this time, we're importing and using `useCurrentUser`. `CurrentUserInfo` doesn't have to worry about `useState` or `useEffect` or even props itself, since all of the data is taken care of and returned by `useCurrentUser`. After destructuring,  name, age, hair color and some hobbies of each person will be returned.

![CurrentUserInfo code](/public/CurrentUserInfo.png)

## useAnyUser custom hook

The `useCurrentUser` custom hook just created is _very_ specific, and only works with the `/current-user` endpoint in the server file. By refactoring it, we can accomplish the same thing, but with any of the users stored. The only thing that this new `useAnyUser` custom hook needs is a new `userId` prop. The basic functionality and combination of `useState` and `useEffect` is then exactly the same.

![useAnyUser hook code](/public/useAnyUser.png)

In the `AnyUserInfo` component, we will need that `userId` as a prop, in order to pass it to the `useAnyUser` hook. Everything else is the same: destructuring the data from the hook call, returning the data points and mapping through the hobbies array to create a list.

![AnyUserInfo code](/public/AnyUserInfo.png)

## useResource custom hook

Just for show, we can refactor our custom hook again, and make sure that we can actually retrieve anything from our `server.js` file. Still utilizing `useState`, combining it with `useEffect`, and with a change from `userId` to `resourceUrl`, we create the next custom hook called `useResource`. This hook can be really dynamic since when a component calls it, by passing in that `resourceUrl`, the hook can figure out which objects to locate itself. Our example will use the `products` array but you could create a component that uses `useResource` in order to return the people in our `users` array too.

![useResource hook code](/public/useResource.png)

This `ProductInfo` component is the same as in some of the other branches of this repo. Since `ProductInfo` needs its own `resourceId` prop, when it calls `useResource`, `ProductInfo` needs to pass the entire URL (or path in this case) to the hook, as well as the `resourceId` prop value when it's called within `App.js`. 

![ProductInfo code](/public/ProductInfo_hook.png)

## useDataSource custom hook

The final iteration of our custom hook is called `useDataSource`. It's purpose is to once more, be as generic as possible, so that we can continue to reuse this hook, instead of being tied to to a custom hook that can only return people or things. 

`useDataSource`, similarly to the `DataSource` container component (see the `cmp--containers` branch for more on that), has a function, `getDataFunction` that will get passed to it as a prop. This function is the specific way for `useDataSource` to get the information we're looking for. Otherwise, like the other custom hooks we've analyzed here, it uses `useState` and `useEffect` all the same. The `getDataFunction` prop will be used during `useEffect`, when the hook is trying to get the data we're looking for.

![useDataSource hook code](/public/useDataSource.png)

`ResourceInfo` is the most flexible component in terms of returning data from our `users` or `products`. Just like `ProductInfo`, `ResourceInfo` requires a `resourceUrl` prop that will be used within the call to `useDataSource`. The object we want to destructure and return JSX for is declared as `resource`. When the `useDataSource` hook is called, everything between the parentheses is considered the `getDataFunction`. The `resourceUrl` prop gets used in the `axios` call of the `getDataFunction` prop of the `useDataSource` hook (😮‍💨), and finally whatever data we're searching gets returned.

![ResourceInfo code](/public/ResourceInfo.png)

Most of the custom hooks are fairly simply to implement within their components, and most of the components are fairly simple to implement within `App.js`. For the hooks that require extra props, you can see a lot of those props are defined on these returned components. 

![All custom hooks' associated components implemented in App.js](/public/App_customHooks.png)

Hope you learned a lil' somethin' somethin'! Thinking about custom hooks as functions made them significantly less intimidating for me. If you had a lot of components that need `useState` and `useEffect`, it makes a lot of sense (and seems like it would save time eventually) to create a custom hook that does all of that already, and then just reuse that new hook.

### **Happy Learning! 🚀**


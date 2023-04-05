# Functional Design Patterns that happen in React

This branch is dedicated to practicing and recognizing some of the patterns of functional programming that pop up in React projects. Although not a “design pattern,” functional programming leads to interesting design patterns in React. 

_def:_ Functional programming is a way to organize the codebase to minimize state change and mutations, keeping the functions independent of external data (pure functions), and treating functions as “first class citizens.” 

In the other branches of this repo, some functional programming examples include our controlled components, function components (not React class components), and our higher order components (which are first-class functions).

## Recursive Components

Imagine you have a big object, and it's gotten quite deep and nested over time. What if you needed to display the data and values in that object. How would you do it? That's where something like a recursive component can come in, and make things easier. 

Let's look at our object. This is defined in `App.js` and it's about my cat, Chauncey. ❤️ 🐈 

![nestedObject code in App.js](/public/nestedObject.png)

The goal of our `RecursiveComponent` is to list out all of the keys and values of this `wackyNestedObject`. These are especially useful when dealing with deeply nested objects or data. Recursive components use recursion, which is sort of like applying the same function to that function's results over and over again until some stopping point, to "achieve a desired effect." 

The first line of this component basically checks that the data passed to it is in fact an object. The first thing we need to do is tell our component how it's going to know when to stop looking for objects in the data. So if `isObject` doesn't find an object, and the data isn't `null` (so if it found a number, or a string, etc.), it's going to return a list item, with whatever it found. 

If `isObject` _does_ find an object however, there's some extra steps that need to happen. The first thing we do is create a new variable called `pairs` using `Object.entries(data)` to get the key-value pairs that are in objects. Then, our component starts to shine. For every key-value pair found in the data, we get an `li`, the `key` is displayed, along with a new `ul`. Then, the **_entire_** process starts over for the `value`. We basically pass that `value` as the new `data` prop back to `RecursiveComponent`, start checking `isObject` with that new `value` data, find any key-value pairs, and return what more we can.  

![RecursiveComponent code](/public/RecursiveComponent.png)

The reason you want to define the stopping condition first is so that if `RecursiveComponent` finds something that isn't an object, the process stops, and we can continue on through the data object until we're out of data. 

## Component Composition

Component composition is when we take several smaller components and combine them into one to create whatever the goal is to create. Composition in functional programming is sort of like inheritance in object-oriented programming. You no longer need to copy & paste code from generic components into specific components.

In `composition`, you see we've created a generic `Button` component that has several props we'll be playing around with. We define some of the styles inline within the return statement of our `Button` component. These styles are saying if `size` was declared as `large`, here are the dimensions either way. If the `fontSize` is declared as large, then the `fontSize` will be 1.5rem, otherwise it will be 1rem. The `backgroundColor` style will be equal to whatever the `color` prop is set to. 

Beneath our generic `Button`, we have additional components defined, that use the `Button` component we just created. In both of these cases, both `DangerButton` and `SuccessButton` are using the same props as `Button`, but then defining individualized values for certain ones. When you import both of these button components into a parent component, these prop values will populate the generic `Button` props values.

![composition code](/public/composition.png)

You can see in both button components that their colors are defined here. No matter where these buttons are used, the `backgroundColors` will be these `color`s. Additionally, you can see that because `SuccessButton` specified that it would be a `size="large"` button, the padding will matching the `"32px"` of the generic `Button`.

## Partially-Applied Components

Partially-applied components are quite similar to the previous process of composition. You take a more general component (like our `Button`), and add a subset of that component’s props to create a more specific version of that component (which in this case will be our `WarningBUtton` and `DarkButton`). It’s sort of the next step after composition. You specify the props and/or subset of props ahead of time, but without needing to make a new component. 

**This is considered a higher order component because `partiallyApply` returns a component, and that component will return its own JSX.** 

Our `Button` component is almost identical to the `composition` `Button` component we wrote in the last section. When creating the more specific, "warning" and "dark" versions of our `Button`, you can see that we're calling `partiallyApply` just like we did on the HOC branch (`cmp--higher-order-components`). The `Button` is the component we want to return, but then `partiallyApply` also requires some `partialProps`, which are the object seen as the second argument for `partiallyApply`. The props also match up to the same props you can either use or not in the original `Button` components. 😮‍💨

![Partially-Applied components code](/public/partiallyApply.png)

Both `WarningButton` and `DarkButton` are still returning the generic `Button` component with our specific props applied, but without needing to "define" a new component like we had to in the composition section.

In `App.js`, all of these functional design pattern components are really easy to implement. You can see the defined object that gets passed to the `RecursiveComponent`, and then easily enough, we just passed text to the `text` props of every button we created.

![Functional design pattern components implemented in App.js](/public/App_fdp.png)

Hope you learned a lil' somethin' somethin'! Recursive components, referring to themselves within themselves, blew my mind! 🤯 At least in my head, they sort of use themselves to define and return themselves. It reminded me of the `this` keyword. It was also great to have an additional example of how to use higher order components with `partiallyApply`, and creating new components with it.

### **Happy Learning! 🚀**


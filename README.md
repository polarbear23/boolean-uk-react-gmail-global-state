# React Props

In this exercise, you are going to practice using global state via a [Redux](https://redux.js.org/)-like store.

To manage that global state, you'll use the [React](https://reactjs.org/) hooks [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) and [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer).

## Setup

1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm install`, which installs dependencies for the project
4. Finally, type `npm run start`, which starts a development server that runs your website in the browser. That server will reload your website whenever you make any changes to source files

## Instructions

- Break down `app.js` into components
  - You should have an `Emails` component that renders a list
  - You should have an `Email` component that is a list item
- Instead of each component maintaining local state via `useState`, use a Redux-like store to make state available to each component
- Use `dispatch` to update your Redux-like store
- Break down `app.css` into stylesheets

## Tips

- Get one part of your store's state working properly before you try and add additional state (which you might do by combining your reducer functions).

## Extra Challenge 1

- Get the **search** input to work in the `header` section so that users can **search for emails by title**

## Extra Challenge 2

- Get the emails to open and display an email using **conditional rendering** and a component
- You'll need to use the global state to keep track of which email is selected and you'll need a component to display the email
- Add a back button so users can return to their inbox

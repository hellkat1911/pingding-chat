## React Chat
###### _A React-based web application for real-time chat_

author: [hellkat_](https://github.com/hellkat1911)

### Stack
[React](https://reactjs.org) - a front-end JavaScript framework for creating reactive web applications

[Express](https://expressjs.com/en/api.html) - a framework for Node.js servers

[Socket.io](https://socket.io) - a library that enables real-time, bidirectional and event-based communication between the browser and the server

### Scripts

Available from the project root directory:

##### `npm start`

Kicks off the React dev server and the Node chat server together.<br>
Open [http://localhost:7777](http://localhost:7777) to view the app in the browser.

The page will reload if you make edits, and shows linter errors in the console output.

##### `npm front`

Spins up just the React dev server at [http://localhost:7777](http://localhost:7777).

##### `npm back`

Runs only the chat server at [http://localhost:4000](http://localhost:4000).

##### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

(**Note:** the Node server does not require bundling, but must be deployed separately!)

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##### Proxy

The app is currently configured to proxy all non-matched URLs to localhost:4000, meaning that any routes not matching the app will automatically be forwarded to the back-end. This behavior can be changed in `package.json`.

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

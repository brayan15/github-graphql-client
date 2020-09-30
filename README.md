# Github GraphQL Client
Simple client to consume Github GraphQL API

## Installation

1. Installs all the dependencies necessary to run the project
    ```
    $ yarn
    ```


2. `.env.local`

    ```javascript
    REACT_APP_BASE_URL=https://api.github.com/
    REACT_APP_PERSONAL_TOKEN=Personal Acces Token
    ```
    You must add `.env.local` file at root of project, also you need a `Personal Acces Token` from Github, if you don't know how to get it, you can click here [here](https://docs.github.com/es/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)

3. Runs project
    ```
    $ yarn start
    ```

## Unit Testing

The components have unit test:

- `App` path: `src/App.test.js`.
- Function get all repos, path: `src/services/__tests__/rest-client.test.js`.
- `Home` path: `src/views/Home/index.test.js`
- `Header` path: `src/components/header/index.test.js`
- `Table` path: `src/components/table/index.test.js`
- `Footer` path: `src/components/footer/index.test.js`
- `Actions` path: `src/store/github/repositories/__tests__/actions.test.js`
- `Reducer` path: `src/store/github/repositories/__tests__/reducer.test.js`

## Available Scripts

In the project directory, you can run:

1. #### `$ yarn`

    Installs all the dependencies necessary to run the project

2. ####  `$ yarn start`

    Runs the app in the development mode.<br />
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.<br />
    You will also see any lint errors in the console.

3. #### `$ yarn build`

    Builds the app for production to the `build` folder.<br />
    It correctly bundles React in production mode and optimizes the build for the best performance.
    Your app is ready to be deployed!

    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

4. #### `$ yarn lint`

    Runs ESlint in `src` folder and show errors in terminal, ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs

5. #### `$ yarn lint:fix`

    Runs ESlint and automatically fix problems in `src` folder

6. #### `$ yarn flow`

    Runs `flow`, flow is a static type checker for your JavaScript code. It lets you annotate the variables, functions, and React components with a special type syntax, and catch mistakes early.
    Flow allows us to easily add static type checking to our JavaScript. Flow will help you prevent bugs and allow for better code documentation among other things.

7. #### `$ yarn test`

    Runs `test`. Launches the test runner.

8. #### `$ yarn test:watch`

    Runs `test`. Launches the test runner in the interactive watch mode.

9. #### `$ yarn test:coverage`

    Runs `test --coverage`.






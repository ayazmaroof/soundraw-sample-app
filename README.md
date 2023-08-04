# soundraw-sample-app

## Project Setup

I recommend using the current LTS version of Node (v18.17.0).
To run locally clone the repo and get started with the following commands.
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Application

The application is a simple quiz web app built using Vue 3. It uses static data to render single and multiple choice questions and allows the user to select answers and submit them. Once a user submits their answer the app calculates the final score and displays it. 
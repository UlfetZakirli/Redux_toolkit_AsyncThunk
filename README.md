***Deployed Project -https://redux-toolkit-async-thunk-4le1qkr37-ulfetzakirli.vercel.app/*** 


# Redux Toolkit
![redux1](https://user-images.githubusercontent.com/88549805/205441958-2b9e959b-2731-43cb-9070-e5560d7bf2d4.jpg)

![redux2](https://user-images.githubusercontent.com/88549805/205441960-990674a8-b60a-466b-9357-820ff86ba505.jpg)


[Redux Toolkit Docs](https://redux-toolkit.js.org/introduction/getting-started)

#### Install Template

```sh
npx create-react-app my-app --template redux
```

- @latest

```sh
npx create-react-app@latest my-app --template redux
```

#### Existing App

```sh
npm install @reduxjs/toolkit react-redux
```

#### @reduxjs/toolkit

consists of few libraries

- redux (core library, state management)
- immer (allows to mutate state)
- redux-thunk (handles async actions)
- reselect (simplifies reducer functions)

#### Extras

- redux devtools
- combine reducers

#### react-redux

connects our app to redux

#### Setup Store

- create store.js

```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});


# React js typescript Boilerplate

## Introduction

This React.js Boilerplate is a powerful foundation for web development projects. It provides a base for any web app, with an organized folder structure, common library setups like Redux for state management, and Tailwind CSS for styling.

Following are the libraries already setup in this project :

- axios
- sass
- redux
- redux-thunk
- react-redux
- react-toastify
- react-router-dom
- tailwindcss
- framer-motion
- @emotion/react
- @emotion/styled
- @mui/icons-material
- @mui/material

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Folder Structure

### NOTES :

- All folder names should be in lower-case letter.
- All components or screens must start with upper-case letter.
- If the file return a html element is must be (.jsx or .tsx) file else (.js or .ts) file.

(src)

- `assets` (all static files used in the app must be placed in assets folder only )
  - **images**
  - **videos**
  - **fonts**
  - **other** (static files used in project)
- `backup` (this folder will store some important code that may be used later)
- `config` (all api call are present in this folder)
  - api.ts (this will be the axios or fetch interface)
  - apiCall.ts (this file will contain actual api calls with its sub urls )
- `components` (the components used in screens must be placed in this folder )
  - **common** (common components that are used in multiple screens )
  - **[screen name]** (folder) (if a screen consists multiple components it must be placed in a folder of the screen name )
- `hooks` (all custom hooks use in the project must be placed in this folder and file name must start with use[name] )
  - [hook name] (the custom hooks created with short and descriptive name)
- `screens` (all pages in the project must be placed in this folder)
  - index.tsx ( this will contain the main router of the react-app )
  - **[section name]** (folder) (if the app consist of multi sections each page of this section must be placed in this folder only) (this folder is optional it must be used only if the app consist more than 1 modules else direct page can be used)
    - [page name] (file) (actual page with small and descriptive name)
- `styles` (all styles must be placed in this folder)
  - index.(scss|css) (other css files & tailwind styles must be imported in this file which would be imported in index.tsx at root directory & consists of the common styles)
  - [section name] (file) (if a section contain styles that are only used in this page it can be placed in this file under section name )
- `store` (this folder contain all the files related to redux if used in the project)
  - **action**
    - [section name] (file) (the redux action of the entire section must be placed in this file only)
  - **constants**
    - index.ts (this file will contain all constant keys for redux (all dispatch and reducers must use this keys only))
  - **reducers**
    - [section name] (file) (if the app consists multiple sections it should have separate reducer for each module else a common reducer can be used)
  - index.ts (redux store must be created in this file)
- `themes` (content related to theming like mui theme are placed in this folder)
  - [theme name] (file)
- `utils`
  - constants.ts (all the constant variables used in the project must be placed here only)
  - index.ts (common function used in entire app must be placed here)
  - type.ts (if ts-project all the types of the object must be placed here)

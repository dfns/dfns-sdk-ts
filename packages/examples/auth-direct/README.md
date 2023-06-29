# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

- In Dfns Dashboard `Settings` > `Org Settings` > `Applications` (or using our API) you need to create an new Application with oriin `http://localhost:PORT` and Relying party `localhost`.
- Update the `.env.local` folder:
    - `REACT_APP_DFNS_API_URL` Dfns api URL (eg https://api.dfns.ninja or https://api.dfns.io depending which you are using)
    - `REACT_APP_DFNS_APP_ID` Application registered with Dfns on dashboard above
    - `REACT_APP_DFNS_WEBAUTHN_RPID` Relying party registered on the Dfns Application you created (in Dashboard go to `Settings` > `Applications`) to find it. It should be `localhost`.
    - `REACT_APP_DFNS_ORG_ID` Your Organisation ID (find it in Dfns Dashboard under `Settings` > `My Account`). Eg `or-yanke-mars-6ulofamogg84s87v`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

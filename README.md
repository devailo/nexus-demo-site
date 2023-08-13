# Demo Website React.js Project

## About
This project is created as a technical task for a job application in 10 days. 

The web Page is also deployed with firebase for the react part and with render.com for the server. It is live and working: [Here](https://painter-website.web.app/)

![Project Dashboard](https://i.imgur.com/8dNTqC1.jpg)

## Functionalities

* Header Component -> The page has 3 categories - Laptops, Phones and Tablets. All the information is coming from a .json file containing 3 categories with arrays of products. When a category button is clicked an onClick event is triggerd giving the pressed button's name to a useState hook. Then only the correct category of products is sent to the main component.

* Main Component -> This component is recieving the active category, the products from the active category and has a Key value = the active category. This is needed to trigger a state update when changing categories. Here we have most of the functionalities in the page. We dynamically collect all the brand names from the json file along with how many times they are repeated and sent to the Filter component. We also collect all the prices and create an array with prices incrementing by 500 and starting below the lowest price and finishing below the highest price. We also have sorting functionality in a sortingUtil file where its gets the products from the main file and sorts them by 1 of 4 ways and sends them back to the Main component. Then there is all the filtering logic and finally the show more products function.

* Content Component(content-header) -> Here is a little bit of information for number of products shown out of all products and it is updated dynamically based on filters and load more. And the sorting dropdown is here.
  
* Card -> Here we are recieving all the products which are sorted or filtered and display as cards. Then all the information is displayed along with rendered Stars for rating and a button with a pop-up modal.

* Footer -> Some company information links and social media links.

* Website is responsive!



## About The Project - Technical Description

### Built With

* [HTML + CSS designed by Ivaylo Stoyanov](https://github.com/devailo)
* [React.js](https://reactjs.org/)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

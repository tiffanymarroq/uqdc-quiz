# Quiz Application

## Get Started: Development Mode
### Install dependencies:

`npm install`

### To run development build:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Deploy: Production Mode

### Step 1 - Build scripts: 

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.


### Step 2 - Bundle Files for deployment:

`gulp`

If there is a permission error: 

`sudo gulp` 

### Step 3 - Files 

You can find your files in the **/dist** folder


### Step 4 - Add to HTML

```
<link rel="stylesheet" href="https://cdn.statically.io/gh/tiffanymarroq/uqdc-quiz/c95f982d/dist/style/build.min.css">
<div id="root"></div>
<script src="https://cdn.statically.io/gh/tiffanymarroq/uqdc-quiz/c95f982d/dist/script/build.min.js"></script>

```





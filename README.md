# Animal Kingdom Sample app

This sample app allows a user to create their own animal kingdom. They create their own
animal persona and then populate their kingdom with rulers or subjects of other kingdoms
either on the same app or on other forks of this app.

To add an animal to your kingdom, you can enter the animal's URL into the box.

Each app can have different animals and territories. Animals and territories that only exist
in one instance of this app (a "planet") can be used in other instances.

You can browse kingdoms on other instances and forks of this apps from the other kingdom section.

## How this works

Information about each animal and the subjects in a kingdom is loaded from
the creating user's Gaia storage. Images of the animal persona and territories
are loaded from the instance of the app where the were created.


## Developer customization

Developers can fork this app and add their own custom animal and territory types to
their fork. They can also add their custom instance of this app to the list of "Other Kingdoms"
in the app by sending a pull request to the repo.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### Deployment

If you are deploying this, you'll need to set cores headers to allow requests from all
hosts otherwise you won't be able to sign in and other apps won't be able to load
your animal and kingdom information.

This code includes deployment settings for Firebase and Netlify in the `cors` directory:

| Service  	| Files                      	|
|----------	|----------------------------	|
| Firebase 	| firebase.json, .firebaserc 	|
| Netlify  	| _headers, _redirects       	|

If you're deploying this on another service, you'll need to set CORS headers appropriately for that service.

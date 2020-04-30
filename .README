# SSR React + Express

This project is a bootstrap starting point to rendering React on an Express Server. It has been preconfigured with options to run React with TypeSript, react-router, and Redux. It has also been preconfigured with deployment options amd optimization

## Getting Started

npm install: 
yarn add: 

npm start: starts project with pm2 and HMR
npm stop: removes the server process from pm2
npm logs: shows pm2 logs
npm build: builds production bundle


### Installing

To run with JavaScript:
    - Change all .tsx files to .js
    - Configure .eslintrc.js
    - Remove typescript preset from .babelrc
    - Remove .ts and .tsx extensions on resolve.extensions on webpack.config.js file
    - Change test: /\.(js|ts|tsx)$/ to /\.js$/ on module.rules.test on webpack.config.js file

To run with Redux:
    - Set up action types and AppActions on Types folder
    - Under Redux folder:
        - Set up Reducers
        - Set up Actions
        - Uncomment configureStore.ts file and configure as custom setup needs
    - On App.tsx:
        - Uncomment Provider and Store imports and uncomment Provider Tags

To run with react-router
    - Uncomment react-router-dom import
    - Uncomment, Copy, and Paste <Router> and <Switch> tags on App render function inside <Provider> tags and insert components 
    - Refer to react-router-dom for documentation on how to hanlde routes for components

## Deployment

- Upgrade dependencies -> yarn upgrade-interactive
- Separate Bundle files into two, vendor files and app files
    - Change entry to an object with two properties, each having their libraries and packages as entry arrays
    - Inclue CommonsChunkPlugin into webpack plugins arrays
    - Change output file to [name].bundle.js for both bundle files to inject into ejs template
    - Include both filenames to ejs template : vendor.bundle.js
- run npm build
- compile Node
    - run npm compile
    - change babel presets to:
        - "presets": ["@babel/preset-react", "@babel/preset-typescript" ["@babel/preset-env": { "targets": { "node": "current" } }]]
    - change webpack configuration to compile to browsers
        - use: { loader: "babel-loader", options: { presets: ["react", "env","other","plugins"] }}
-run npm startProd

## Built With

* React, React-DOM
* Redux
* Express
* react-router
* Webpack
* Babel


## Authors

* **Diego Vega
# Typescript with Webpack
Simple web application to demonstrate the bundling of Typescript with Webpack including Bootstrap, SCSS, Assets.

## Why this project? Experimentation..

The idea started with building a simple web application. As of this writing (Oct 2020), there are tons of frameworks and stacks that can either eimplify (as they say) the build. But this brings a complexity of it's own.

So going back to Frist Principles of website development.. we will need:
- a html page
- styles to make the ui look better
- javascript to manage & process user interactions

Even with the above, we have lots of options. 

I started experimenting using [Typescript](https://www.typescriptlang.org/) (becasue it has some improvements on Javascript) and at the same time do not want ot RE-INVENT the WHEEL.

### Part 1: HTML
This is the easy part. We can create a simple HTML page. But HTML does not have appearance/presentation and functionality/behvior.   

### Part 2: Add styles
Added styles using SCSS. This is ore refined version of CSS.

### Part 3: Add javascript (but used Typescript)
I could have written basic Javascript. But chose to add Typescript, since it has more features and control.

### Part 4: Bringing them all together - Bundling

Great. My sample web application/page works. 1 html, 1 SCSS and 1 ts(typescript). But delivering the app as a whole needed a litte more than just a folder. Browsers do not run Typescript, so we need a compiler, like [tsc aka Typescript Compiler](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler).

To make things simple, [Webpack](https://webpack.js.org/) is a great tool that compiles & bundles a web application (small or large), making it easy to deploy to a server. This is equaly important as development. Although there are equaly good tools like [Yarn](https://yarnpkg.com/), [Gulp](https://gulpjs.com/), [Bower](https://bower.io/), [Grunt](https://gruntjs.com/).. i chose, Webpack. 

**Why Webpack?**
- I had some previous experience with it
- [Angular's CLI](https://angular.io/cli/build) tool uses Webpack
- React's [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) uses Webpack.


## Code Organization

```
/project-root
  /dist              [Deliverable build folder]
    /assets
    /css
    bundle.js
    index.html
  /public            [Includes html's for the project]
    index.html 
  /src
    /assets          [Holds digital assets like images, docs]
    /styles          [Holds css, scss files]
    main.ts          [Primary typescript file]      
  package.json       [Node/npm config file]      
  tsconfig.json
  webpack.config.js  [Webpack config file]
```

### What's included
The following are added as dependencies in `package.json`

- dependencies
  - Bootstrap
- dev dependencies
  - Typescript
  - Webpack dev server
  - Webpack and plugins
    - copy-webpack-plugin
    - css-loader
    - extract-loader
    - file-loader
    - html-webpack-plugin
    - mini-css-extract-plugin
    - node-sass
    - postcss-loader
    - sass-loader
    - style-loader
    - ts-loader
    -  

## Builds

To build the coompiled/deliverable code, the command `npm run build` will generate a `dist` folder.

```
/dist
  /assets
     icon.png
  /css
     main.css [all SCSS files compiled and bundled to this single css]
  bundle.js   [all javascript compiled and bundled to this single file]
  index.html  [primary html to load the application]
```

## Run

This application has `webpack dev server` incorporated. Please use `npm run start:dev` to start development server. The default server starts at localhost:9000

Note:
- The defaul port can be chnaged in `webpack.config.js` following details [here](https://webpack.js.org/configuration/dev-server/).

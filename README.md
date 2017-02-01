# React + Redux / ES6+ Starter!

A boilerplate using the power and simplicity of React, Redux, Webpack 2 + HMR, and ES6 + JSX via Babel. Includes `Webpack's Tree Shaking` configuration. It's suitable for scalable applications and organized using the custom variation of [the Ducks pattern](https://github.com/nicksp/ducks-modular-redux) — approach when each module's entry file (`feature-name.js`) contains all of its related constants, actions/action creators, selectors and its reducer.


The provided boilerplate is powered by the following technology stack:
<details>
- [x] [Yarn](https://yarnpkg.com) — package manager and task runner
- [x] [Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7)
- [x] [webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) — client-side module builder and module loader
- [x] [Case Sensitive Paths - Webpack Plugin](https://github.com/Urthen/case-sensitive-paths-webpack-plugin) — This Webpack plugin enforces the entire path of all required modules
- [x] [Babel 6](http://babeljs.io/) — transpiler from ES6 / JSX to ES5
- [x] [husky](https://github.com/typicode/husky) - Husky can prevent bad commit, push and more! 
- [x] [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg) - This provides you a binary that you can use as a githook to validate the commit message.
- [x] [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) — a virtual DOM JavaScript library for rendering UI.  It's about rendering view as a function of state, making JavaScript-driven UI declarative the way HTML is declarative.
- [x] [Redux](http://redux.js.org/) — an incredibly simple way of modelling your data app state, with great community support
- [x] [React Hot Loader 3](https://github.com/gaearon/react-hot-boilerplate/pull/61) — combines the best of React Hot Loader and React Transform and fixes some [long-standing issues](https://twitter.com/dan_abramov/status/722040946075045888)
- [x] [React Router v3](https://github.com/reactjs/react-router/blob/next/CHANGES.md) — to allow [dynamic routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux) — simple bindings to keep React Router and Redux in sync
- [ ] [Reselect](https://github.com/reactjs/reselect) — provides a way to access Redux state in components and build composable selectors that are automatically memoized
- [x] [autobind-decorator](https://github.com/andreypopp/autobind-decorator) - Decorator to automatically bind methods to class instances
- [x] [Redux DevTools](https://github.com/gaearon/redux-devtools) — a live-editing environment for your Redux apps (and as a [browser extension](https://github.com/zalmoxisus/redux-devtools-extension))
- [x] [ESLint](http://eslint.org/docs/user-guide/configuring) — reporter for syntax and style issues
- [x] [Flow](https://flowtype.org/docs/getting-started.html) — static type checker for JavaScript aimed at catching common bugs in JavaScript programs. The flow type annotations get ripped out of the source by the webpack build step. You have no obligation to use flow within your code and can even uninstall the dependency (`flow-bin`) without breaking the project.
- [x] [PostCSS](http://postcss.org/) — ecosystem of custom plugins like [Autoprefixer](https://github.com/postcss/autoprefixer) and tools aimed at transforming extended syntaxes and features into modern, browser-friendly CSS
- [x] [CSS Modules](https://github.com/css-modules/css-modules) — guarantee that all the styles for a single component, designed to fix the problem of the global scope in CSS
- [ ] [stylelint](https://github.com/stylelint/stylelint) - A mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.
- [x] [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) & [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype) — additional React/Flow type specific linting rules for ESLint
- [x] [Sass](http://sass-lang.com/) — compiler of CSS styles with variables, mixins, and more
- [x] [react-bootstrap](https://react-bootstrap.github.io/) - React-Bootstrap is a library of reusable front-end components.
- [x] [bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes, and an advanced grid system.
- [ ] [Mocha](https://mochajs.org/) — well-known and flexible test framework that you can use to run your JavaScript tests on the server or in the browser
- [ ] [Enzyme](http://airbnb.io/enzyme/) — makes unit testing React components an absolute pleasure
- [ ] [Chai](http://chaijs.com/) — BDD assertion library that works along with `Mocha`
- [ ] [Sentry](https://sentry.io/) — real-time error tracking for your app
</details>

## Getting Started

### Prerequisites

Support for Node.js >= 7.4.0

### Installation

```sh
$ git clone https://github.com/Jayser/redux-boilerplate
$ cd redux-boilerplate
$ yarn install
```

## Development

* Hot reloading via webpack middlewares:
    * `npm start`
    * Point your browser to `http://localhost:8000/`, page hot reloads automatically when there are changes

* Mocks
    * `npm run mock`
    * Point your browser to `http://localhost:8005/`, mocks all http request according to `app/data/mock`
    
* Static analyzes
    * `npm run stylint` This will check stylesheets on defects      
    * `npm run lint` This will check javascript on defects
    * `npm run analyze`
        * This will create `reports/webpack-stats.json` file for [analyse](https://webpack.github.io/analyse/) webpack service

## Production
* `npm run build`
* This will build production version and put in the build folder

## Git config
* git config user.name "User Name"
* git config user.email "user_email@email.com"
* git config color.ui true
* git config core.ignorecase false
* git config merge.ff no
* git config merge.commit no
* git config pull.ff yes

## Commit Validation Message
* feat - A new feature
* fix - A bug fix
* docs - Documentation only changes
* style - Changes that don't affect the meaning of the code 
* refactor - A code change that neither fixes a bug or adds a feature
* perf - A code change that improves performance
* test - Adding missing tests
* build - Changes to the build process or auxiliary tools and libraries such as documentation generation
* revert - A revert some changes 
* chore - something else
* merge - A merge some changes
* rebase - A merge some changes
* cherry-pick - A cherry-pick some changes

<details>
```sh
{
  "types": ["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "revert", "merge", "rebase", "cherry-pick"],
  "scope": {
    required: false, // default,
    allowed: ['button', 'card'], // default is '*' for anything,
    validate: false, // default,
    multiple: false // default
  },
  "warnOnFail": false, // default
  "maxSubjectLength": 100, // default
  "subjectPattern": ".+", // default
  "subjectPatternErrorMsg": "subject does not match subject pattern!", // default
  "helpMessage": "", // default
  "autoFix": false // default
}
```
</details>

### Example
* "docs: some docs msg"
* "feat: some feat msg"
* "build: some build msg"

## Style Guide
* [git-flow](https://github.com/petervanderdoes/gitflow-avh)

## Debugging

For debugging purposes please use:
- [Redux DevTools
](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) plugin for Chrome to simplify debugging React apps.
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## FAQ

### What's this for?

This starter kit implements best practices like testing (`unit testing`), minification, bundling, and so on. It saves you from the long, painful process of wiring it all together into an automated dev environment and build process.

### What's happening under the hood when I run `npm start`?

Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is `/src`, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to `/build` folder and the app is served from `/build`.

### How is Sass being processed?

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into app.js. Sounds weird, but it works!
 3. app.js contains code that loads styles into the &lt;head&gt; section of index.html via JavaScript. This is why there is no stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

### How do I deploy this?

`npm run build`. This will prepare and build the project for production use. It does the following:

- Minifies all JS and CSS
- Inline base64 URLs for images and fonts if their size is less than specified limit
- Sets NODE_ENV to `production` so that React is built in production mode
- Places the resulting built project files into `/build` directory. (This is the folder you'll expose to the world).

## TODO

- MOCKS
- flow
- CALL API,
- style lint
- pre commit(test) 
 
## Author
* [Sarhan Azizov](https://github.com/Jayser/)

## Contributors
* [Alex Podobed](https://github.com/AlexPodobed)

## License
MIT - do anything with the code, but don't blame me if it does not work.


Will be remove
* https://github.com/nicksp/redux-webpack-es6-boilerplate
* https://github.com/Stanko/react-redux-webpack2-boilerplate
* https://github.com/sunstorymvp/playground
* https://github.com/Jayser/angularjs
* https://github.com/Jayser/reactjs-tz
* https://github.com/sergey-trotsyuk/test-task-ed
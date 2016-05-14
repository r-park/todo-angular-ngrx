[![Build Status](https://travis-ci.org/r-park/todo-angular2-ngrx.svg?branch=master)](https://travis-ci.org/r-park/todo-angular2-ngrx)


# Todo app with Angular2 and ngrx/store
A simple Todo app example featuring <a href="https://github.com/ngrx/store" target="_blank">ngrx/store</a> — RxJS powered state management inspired by Redux for Angular2 apps.

- Angular
- Express
- NgRx/store
  - RxJS implementation of Redux
- RxJS
- SASS
- Typescript
- Webpack
  - Inlines external SCSS files
  - Inlines external HTML templates
  - Bundles and minifies release builds
  - Injects style and script tags into index.html


Getting Started
---------------

#### Prerequisites
- `node >=5.11`

#### Quick Start
```shell
$ git clone https://github.com/r-park/todo-angular2-ngrx.git
$ cd todo-angular2-ngrx
$ npm install
$ npm start
```


Usage
-----

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000` and api server @ `localhost:3001`|
|`npm run build`|Lint, test, and build the application to `./target`|
|`npm run lint`|Lint `.ts` and `.js` files|
|`npm run lint:js`|Lint `.js` files with eslint|
|`npm run lint:ts`|Lint `.ts` files with tslint|
|`npm run server:api`|Start api server @ `localhost:3001`|
|`npm run server:dev`|Start webpack development server @ `localhost:3000`|
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|

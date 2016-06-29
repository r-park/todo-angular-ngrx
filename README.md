[![Build Status](https://travis-ci.org/r-park/todo-angular2-ngrx.svg?branch=master)](https://travis-ci.org/r-park/todo-angular2-ngrx)


# Todo app with Angular2 and ngrx/store
A simple Todo app example featuring [ngrx/store](https://github.com/ngrx/store) — RxJS powered state management inspired by Redux for Angular2 apps.

- Angular `2.0.0-rc.3`
- [ngrx/store](https://github.com/ngrx/store)
- [ngrx/router](https://github.com/ngrx/router)
- [ngrx/effects](https://github.com/ngrx/effects)
- [ngrx-store-logger](https://github.com/btroncone/ngrx-store-logger)
- RxJS
- SASS
- Typescript
- Express
- Webpack
  - Inline external SCSS files
  - Inline external HTML templates
  - Bundle and minify release builds
  - Inject style and script tags into index.html


Getting Started
---------------

#### Prerequisites
- `node >=5.12`

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

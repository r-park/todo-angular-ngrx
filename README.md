[![CircleCI](https://circleci.com/gh/r-park/todo-angular2-ngrx.svg?style=shield&circle-token=dd1325d92e93517cb5c52669e92c7f1698b55bc0)](https://circleci.com/gh/r-park/todo-angular2-ngrx)


# Todo app with Angular2 and ngrx/store
A simple Todo app example featuring [ngrx/store](https://github.com/ngrx/store) — RxJS powered state management inspired by Redux for Angular2 apps.


Stack
-----

- Angular 2
- [ngrx/store](https://github.com/ngrx/store)
- [ngrx/effects](https://github.com/ngrx/effects)
- [ngrx/store-devtools](https://github.com/ngrx/store-devtools)
- RxJS
- SASS
- Typescript 2
- Webpack 2


Getting Started
---------------

#### Recommended
- `node >= 6`

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
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|

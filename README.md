[![Build Status](https://travis-ci.org/r-park/todo-angular2-ngrx.svg?branch=master)](https://travis-ci.org/r-park/todo-angular2-ngrx)


# Todo app with Angular 2 ngrx/store
A simple Todo app example featuring <a href="https://github.com/ngrx/store" target="_blank">ngrx/store</a> (a RxJS implementation of Redux).

- Angular `2.0.0-beta.0`
- Express
- Gulp `4.0.0-alpha.2`
- NgRx/store `~1.0.7`
  - RxJS implementation of Redux
- RxJS `5.0.0-beta.0`
- SASS
- Typescript `~1.7.5`
- Webpack
  - Inlines external SCSS files
  - Inlines external HTML templates
  - Bundles and minifies release builds
  - Injects style and script tags into index.html


## Quick Start
```bash
$ git clone https://github.com/r-park/todo-angular2-ngrx.git
$ cd todo-angular2-ngrx
$ npm install
$ ./node_modules/.bin/gulp
```


## Developing
### Prerequisites
- `node >=4.2`

### Installing Global Dependencies
```bash
$ npm install -g karma-cli
```

##### Webpack (optional)
```bash
$ npm install -g webpack
$ npm install -g webpack-dev-server
```

##### Gulp v4 (optional)
```bash
$ npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```bash
$ ./node_modules/.bin/gulp run
```


### Installing Project-local Dependencies
```bash
$ npm install
```


## Commands
#### Develop
```bash
$ gulp
```
- Start the Webpack dev server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>
- Watch for changes to your source files
- Live-reload the browser

#### Lint (tslint)
```bash
$ gulp lint
```

#### Test (single-run)
```bash
$ gulp test
```

#### Test (watch mode)
```bash
$ gulp test.watch
```

#### Build
```bash
$ gulp build
```

#### Dist build
```bash
$ gulp dist
```
Executes the following:
- `gulp lint`
- `gulp test`
- `gulp build`


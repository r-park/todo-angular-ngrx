import { NgIf } from 'angular2/common';
import { Component, View } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Tasks } from '../tasks/tasks';

const styles: string = require('./app.scss');


@Component({
  selector: 'app'
})

@View({
  directives: [
    NgIf,
    RouterOutlet
  ],
  styles: [styles],

  template: `
    <header class="header">
      <div class="g-row">
        <div class="g-col">
          <h1 class="header__title">Todo Angular2 NgRx</h1>
          <a class="header__link" href="https://github.com/r-park/todo-angular2-ngrx"></a>
        </div>
      </div>
    </header>

    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `
})

@RouteConfig([
  {path: '/', component: Tasks, as: 'Tasks'}
])

export class App {}

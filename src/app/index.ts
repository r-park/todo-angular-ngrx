import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TasksModule, taskReducer } from 'src/tasks';
import { AppComponent } from './components/app';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'tasks'}
];


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: false}),
    StoreModule.provideStore({
      tasks: taskReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    TasksModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppModule {}

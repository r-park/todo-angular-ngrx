import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { ApiService } from './services/api';


@NgModule({
  exports: [
    CommonModule
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule {}


export { ApiService };

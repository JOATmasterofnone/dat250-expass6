import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import {TodoComponent} from "./todo.component";

@NgModule({
  declarations: [
     TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }

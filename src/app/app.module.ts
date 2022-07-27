import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DetailPageComponent} from "./user/detail-page/detail-page.component";
import {HomeComponent} from "./user/home/home.component";

@NgModule({
  declarations: [
    AppComponent, DetailPageComponent, HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

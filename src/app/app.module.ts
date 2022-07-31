import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {DetailPageComponent} from "./user/detail-page/detail-page.component";
import {HomeComponent} from "./user/home/home.component";
import {LoginUserComponent} from "./user/login-user/login-user.component";
import { RegisterUserComponent } from './user/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent, DetailPageComponent, HomeComponent, LoginUserComponent, RegisterUserComponent



  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

<<<<<<< Updated upstream
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
=======
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SlideBarComponent} from './slide-bar/slide-bar.component';
import {ContentComponent} from './content/content.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {SearchComponent} from './search/search.component';
import {NewsapiservicesService} from "./service/newsapiservices.service";
>>>>>>> Stashed changes

import {DetailPageComponent} from "./user/detail-page/detail-page.component";
import {HomeComponent} from "./user/home/home.component";
import {LoginUserComponent} from "./user/login-user/login-user.component";
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { InvoiceComponent } from './user/invoice/invoice.component';

<<<<<<< Updated upstream
@NgModule({
  declarations: [
<<<<<<< Updated upstream
    AppComponent, DetailPageComponent, HomeComponent, LoginUserComponent, RegisterUserComponent, InvoiceComponent



=======
=======
// import {DetailPageComponent} from "./user/detail-page/detail-page.component";
// import {HomeComponent} from "./user/home/home.component";
import {LoginUserComponent} from "./component/login-user/login-user.component";
import {RegisterUserComponent} from "./component/register-user/register-user.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path:'about', component:AboutComponent},
  // {path:'contact', component:ContactComponent}
];

@NgModule({
  declarations: [
>>>>>>> Stashed changes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideBarComponent,
    ContentComponent,
<<<<<<< Updated upstream
    ChangePasswordComponent,
    ForgotPasswordComponent
>>>>>>> Stashed changes
=======
    SearchComponent,
    LoginUserComponent,
    RegisterUserComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

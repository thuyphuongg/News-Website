import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { HomeComponent } from './component/home/home.component';

import { ComponentComponent } from './component/component.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { SlidebarComponent } from './component/slidebar/slidebar.component';
import { FootterComponent } from './component/footter/footter.component';
import { LoginUserComponent } from './component/login-user/login-user.component';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentComponent,
    TopbarComponent,
    SlidebarComponent,
    FootterComponent,
    LoginUserComponent,
    RegisterUserComponent,
    MenuComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

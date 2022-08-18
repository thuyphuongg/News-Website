import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app.routing.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { ContentComponent } from './content/content.component';

// import {DetailPageComponent} from "./user/detail-page/detail-page.component";
// import {HomeComponent} from "./user/home/home.component";
// import {LoginUserComponent} from "./user/login-user/login-user.component";
// import { RegisterUserComponent } from './user/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideBarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

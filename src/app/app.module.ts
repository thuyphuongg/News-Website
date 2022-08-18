import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { ContentComponent } from './content/content.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import { SearchComponent } from './search/search.component';


// import {DetailPageComponent} from "./user/detail-page/detail-page.component";
// import {HomeComponent} from "./user/home/home.component";
// import {LoginUserComponent} from "./user/login-user/login-user.component";
// import { RegisterUserComponent } from './user/register-user/register-user.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  // {path:'about', component:AboutComponent},
  // {path:'contact', component:ContactComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideBarComponent,
    ContentComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

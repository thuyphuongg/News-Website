import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { ContentComponent } from './content/content.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import { SearchComponent } from './search/search.component';
import {RestService} from "./service/rest.service";
// import {NewsapiservicesService} from "./service/newsapiservices.service";



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
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

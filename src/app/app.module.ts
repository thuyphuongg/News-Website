import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { ContentComponent } from './content/content.component';
import {RouterModule, Routes} from "@angular/router";
import { SearchComponent } from './search/search.component';
import {RestService} from "./service/rest.service";
import {Ng2OrderModule} from "ng2-order-pipe";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import { SearchPageComponent } from './search-page/search-page.component';
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {path:'home', component:ContentComponent},
  {path:'', redirectTo:'home',pathMatch:'full' },
  {path:'searchPage',component: SearchPageComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideBarComponent,
    ContentComponent,
    SearchComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [RestService],
  exports: [
    ContentComponent,
    SlideBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import {RestService} from "./service/rest.service";
import {Ng2OrderModule} from "ng2-order-pipe";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {SearchPageComponent} from "./search-page/search-page.component";
import {AppRoutingModule} from "./app-routing.module";
// import {NewsapiservicesService} from "./service/newsapiservices.service";

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
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [RestService],
  exports: [
    ContentComponent,
    SlideBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

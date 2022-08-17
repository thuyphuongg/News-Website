import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from "@angular/router";
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideBarComponent,
    ContentComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

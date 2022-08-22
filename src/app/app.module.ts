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
import {environment} from "../environments/environment";
import {SearchPageComponent} from "./search-page/search-page.component";
import { DetailPageComponent } from './detail-page/detail-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {VarifyEmailComponent} from "./component/varify-email/varify-email.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ForgotPasswordComponent} from "./component/forgot-password/forgot-password.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {AngularFireModule} from "@angular/fire/compat";
// import {NewsapiservicesService} from "./service/newsapiservices.service";
const routes: Routes = [
  {path:'home', component:ContentComponent},
  {path:'', redirectTo:'home',pathMatch:'full' },
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'searchPage',component: SearchPageComponent},
  {path:'news/:newTitle', component:DetailPageComponent},

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideBarComponent,
    ContentComponent,
    SearchComponent,
    SearchPageComponent,
    DetailPageComponent,
    VarifyEmailComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [RestService],
  exports: [
    ContentComponent,
    SlideBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

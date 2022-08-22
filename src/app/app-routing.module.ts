import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ContentComponent} from "./content/content.component";
import {SearchPageComponent} from "./search-page/search-page.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ForgotPasswordComponent} from "./component/forgot-password/forgot-password.component";

const routes: Routes = [
  {path: '', redirectTo: '/first-component', pathMatch: 'full'},
  {path: 'content', component: ContentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'searchPage', component: SearchPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: ContentComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


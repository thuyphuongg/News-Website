import { NgModule } from "@angular/core";
import {RouterModule ,Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {DetailPageComponent} from "./detail-page/detail-page.component";

const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'detail', component:DetailPageComponent},
];
@NgModule({
    declarations: [HomeComponent, AboutComponent,ContactComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

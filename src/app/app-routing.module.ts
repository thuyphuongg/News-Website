import { NgModule } from "@angular/core";
import {RouterModule ,Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
// import {SearchComponent} from "./search/search.component";


const routes: Routes = [
    {path:'home', component:HomeComponent},
    // {path:'resultSearch',component: SearchComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent}
];
@NgModule({
    declarations: [HomeComponent, AboutComponent,ContactComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

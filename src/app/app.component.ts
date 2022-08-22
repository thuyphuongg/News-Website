import {Component} from '@angular/core';
import {New} from "./Class/new";
import {RestService} from "./service/rest.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: '<app-content [news] = "news"></app-content>',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'untitled3';
    news: New[] = [];
    constructor(public rs: RestService) {}
    ngOnInit(): void {
        this.rs.getNews().subscribe((reponse) => {
            this.news = reponse;
            console.log(this.news);
        })
    }
    // sendData(){
    //     this.rs.sendData()
    // }
}

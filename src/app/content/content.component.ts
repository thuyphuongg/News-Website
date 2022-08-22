import {Component, Input, OnInit} from '@angular/core';
import {RestService} from "../service/rest.service";
import {New} from "../Class/new";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    //Phần này để chạy API và test thử các chức năng
    //
    // constructor(private  _service:NewsapiservicesService) { }
    // contentDisplay: any=[];
    // ngOnInit(): void {
    //   this._service.content().subscribe((result)=>{
    //     this.contentDisplay = result.articles;
    //   })
    // }
//Phần này để chạy data crawl được
    news: New[] = []
    p: number = 1;

    constructor(public rs: RestService) {
    }

    ngOnInit(): void {
        this.rs.getNews().subscribe((reponse) => {
            this.news = reponse;
            console.log(this.news);
        })
    }

}

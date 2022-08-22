import {Component, OnInit} from '@angular/core';
import {RestService} from "../service/rest.service";
import {New} from "../Class/new";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
   detailNew: New| undefined;
    news: New[] = [];
    constructor(public rs: RestService, public route: ActivatedRoute) {}
    getData(){
        this.rs.getNews().subscribe((reponse) => {
            this.news = reponse;
            console.log(this.news);
        })
    }
    ngOnInit(): void {
        this.getData();
       const routeParam = this.route.snapshot.paramMap;
       const newTitleFromRoute = String(routeParam.get('newTitle'));
       this.detailNew = this.news.find(detailNew=>detailNew.chapterTitle === newTitleFromRoute);
    }

}

import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../service/rest.service";
import {New} from "../Class/new";

// import * as console from "console";

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
    // @Input() news;
    data: New[] = [];
    news: New[] = [];
    keyWords = '';

    constructor(public rs: RestService) {
    }

    // ngOnInit() {
    // }

    ngOnInit(): void {
        this.rs.getNews().subscribe((reponse) => {
            this.news = reponse;
        })
    }

    Search() {
        if (this.keyWords == "") {
            this.ngOnInit();
        } else {
            this.data = this.news.filter(res =>{
                return res.chapterTitle.toLocaleLowerCase().match(this.keyWords.toLocaleLowerCase())}
                    // Object.keys(res).some(k => res[k] != null &&
                    //     res[k].toString().toLowerCase().includes(this.keyWords.toLowerCase()));
                // res;
            );

        }
    }


    //--------------------------------------------------------------------------------------------

}

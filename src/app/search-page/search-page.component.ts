import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../service/rest.service";
import {New} from "../Class/new";
import {DataTranfersService} from "../service/data-tranfers.service";

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
    keyWords: any;

    constructor(public rs: RestService, private dts: DataTranfersService) {
    }

    // ngOnInit() {
    // }

    ngOnInit(): void {
        this.rs.getNews().subscribe((reponse) => {
            this.news = reponse;
        })
        this.dts.receivedMessage().subscribe((res)=>{
            this.keyWords = res;
        })
    }

    Search() {
        if (this.keyWords == "") {
            this.data=[];
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

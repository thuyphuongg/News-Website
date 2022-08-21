import {Component, OnInit} from '@angular/core';
import {RestService} from "../service/rest.service";
import {New} from "../Class/new";

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
    news: New[]=[];
    keyWord: any;
    constructor(public rs: RestService) {}

    ngOnInit(): void {
        this.rs.getNews().subscribe((reponse) => {
            this.news = reponse;
            console.log(this.news);
        })
    }

    Search() {

        if (this.keyWord == "") {
            this.ngOnInit();
        } else {
            this.news = this.news.filter(res =>
                    Object.keys(res).some(k => res[k] != null &&
                        res[k].toString().toLowerCase().includes(this.keyWord.toLowerCase()))
                // restoLocaleLowerCase().match(this.keyWord.toLocaleLowerCase());

            );
        }
    }


    //--------------------------------------------------------------------------------------------

}

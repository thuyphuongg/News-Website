import { Component, OnInit } from '@angular/core';
import {New} from "../Class/new";
import {RestService} from "../service/rest.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  keyWord: any;
  news: New[] = [];

  constructor(public rs: RestService) {
  }
  ngOnInit(): void {
    this.rs.getNews().subscribe((reponse)=>{
      this.news = reponse;
      console.log(this.news);
    })
  }
  Search() {

    if (this.keyWord == "") {
      this.ngOnInit();
    } else {
      this.news = this.news.filter(res =>
              Object.keys(res).some(k=>res[k] != null &&
                  res[k].toString().toLowerCase().includes(this.keyWord.toLowerCase()))
          // restoLocaleLowerCase().match(this.keyWord.toLocaleLowerCase());

      );
    }
  }


}

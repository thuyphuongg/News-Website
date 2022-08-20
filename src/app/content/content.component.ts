import { Component, OnInit } from '@angular/core';
// import {NewsapiservicesService} from "../service/newsapiservices.service";
import {New} from "../Class/new";
import {RestService} from "../service/rest.service";

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
  news: New[] = [];
  keyWord: any;
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

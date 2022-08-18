import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from "../service/newsapiservices.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private  _service:NewsapiservicesService) { }
  contentDisplay: any=[];
  ngOnInit(): void {
    this._service.content().subscribe((result)=>{
      this.contentDisplay = result.articles;
    })
  }

}

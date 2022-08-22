import { Component, OnInit } from '@angular/core';
import {New} from "../Class/new";
import {Router} from "@angular/router";
import {DataTranfersService} from "../service/data-tranfers.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  constructor(private router: Router, private dts: DataTranfersService ) {
  }
  ngOnInit(): void {}
  btnClick() {
    this.router.navigateByUrl('/searchPage');
  }

  sendMessage(message: HTMLInputElement){
    this.dts.sendMessage(message.value);
  }

}

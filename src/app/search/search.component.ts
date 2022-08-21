import { Component, OnInit } from '@angular/core';
import {New} from "../Class/new";
import {Router} from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  keyWord='';
  constructor(private router: Router) {
  }
  ngOnInit(): void {}
  btnClick() {
    this.router.navigateByUrl('/searchPage');
  }
}

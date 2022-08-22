import { Component, OnInit } from '@angular/core';
import {RestService} from "../service/rest.service";
import {Category} from "../Class/category";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 categories: Category[]=[];
  constructor(private rs:RestService) { }

  ngOnInit(): void {
    this.rs.getCategory().subscribe((reponse) => {
      this.categories = reponse;
      console.log(this.categories);
    })
  }

}

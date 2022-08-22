import { Injectable } from '@angular/core';
import {New} from "../Class/new";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Category} from "../Class/category";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private _http: HttpClient) {}
  url: string="http://localhost:3000/News";
  url2: string="http://localhost:3000/Category";
  getCategory(){
      return this._http.get<Category[]>(this.url2);
  }
  getNews(){
    return this._http.get<New[]>(this.url);
  }
  // sendData(){
  //   this.subject;
  // }
  // receivedData(): Observable<New[]>{
  //   return this.subject.asO;
  // }
}

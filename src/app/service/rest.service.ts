import { Injectable } from '@angular/core';
import {New} from "../Class/new";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) {}
  url: string="http://3000/News";
  getNews(){
    return this._http.get<New[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  newsApiUrl="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0d62ed53a33147e6940d23337588f594"
  content():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
}

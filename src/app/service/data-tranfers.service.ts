import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTranfersService {
  private subject = new Subject<string>();
  sendMessage(message: string){
    this.subject.next(message);
  }
  receivedMessage(): Observable<string>{
    return this.subject.asObservable();
  }

  constructor() { }
}

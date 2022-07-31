import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 dataToSend = new BehaviorSubject<any>({});
  dataToSend$ = this.dataToSend.asObservable();

  constructor() { }

  setData(data: any) {
    this.dataToSend.next(data);
  }
}

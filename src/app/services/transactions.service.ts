import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { transactions } from '../mockData/transactions.js';
import { delay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  getTransactions() {

    let transactionsWithDateObject = transactions.map(trans => {
      trans.dateObj = new Date(trans.date);
      return trans;
    })

    let dateRange = {
      start: new Date("2020-1-1"),
      end: new Date("2020-1-30")
    }

    transactionsWithDateObject = transactionsWithDateObject.filter(trans => {
      return trans.dateObj >= dateRange.start && trans.dateObj <= dateRange.end;
    })




     let fakeObservable = of(transactionsWithDateObject).pipe(delay(1000));
     return fakeObservable;

    
    // return new Observable(observer => {
      
    // })
  }
}

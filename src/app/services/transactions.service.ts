import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { transactions } from '../mockData/transactions.js';
import { delay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  getTransactions(dateRange) {
    let to;
    let from;
    if(dateRange) {
       from = new Date(dateRange.from.year, dateRange.from.month - 1, dateRange.from.day);
       to = new Date(dateRange.to.year, dateRange.to.month - 1, dateRange.to.day);
      }

    let transactionsWithDateObject = transactions.map(trans => {
      trans.dateObj = new Date(trans.date);
      return trans;
    })
   
    transactionsWithDateObject = transactionsWithDateObject.filter(trans => {
      return trans.dateObj >= from && trans.dateObj <= to;
    })




     let fakeObservable = of(transactionsWithDateObject).pipe(delay(1000));
     return fakeObservable;

    
    // return new Observable(observer => {
      
    // })
  }
}

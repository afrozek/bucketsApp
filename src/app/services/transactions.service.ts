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

     let fakeObservable = of(transactions).pipe(delay(1000));
     return fakeObservable;

    
    // return new Observable(observer => {
      
    // })
  }
}

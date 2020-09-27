import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'app/services/transactions.service';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navItems: { displayText: string; iconPath: string; anchorLink: string; }[];
  transactions: any;
  myData: any[];
  overviewChartData: any[][];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.initNav();
    this.getTransactions();
  }

  initNav() {
    this.navItems = [
      {
        displayText: "Dashboard",
        iconPath: "/assets/images/dashboard-icon.svg",
        anchorLink: ""
      },
      {
        displayText: "Reports",
        iconPath: "/assets/images/reports-icon.svg",
        anchorLink: ""
      },
      {
        displayText: "Transactions",
        iconPath: "/assets/images/transactions-icon.svg",
        anchorLink: ""
      }
    ]

    this.myData = [
      ['London', 10],
      ['New York', 15],
      ['Paris', 20],
      ['Berlin', 30],
      ['Kairo', 35],
    ];
  }

  getTransactions() {
    let transactions = this.transactionsService.getTransactions().subscribe(data => {
      // console.log("transactions:", data);
      this.transactions = data;
      
      let grouped = this.groupByCategory(this.transactions);
      this.overviewChartData = Object.keys(grouped).map((key) => {
        // console.log("key ", key)
        let currentCategoryTransactions = grouped[key];
        // console.log("currentCategoryTransactions ", currentCategoryTransactions)
        let reduced = currentCategoryTransactions.reduce((accumaltor, currentValue) => {
        // console.log("accumaltor ", accumaltor)
        // console.log("currentValue.amount ", currentValue.amount)
          return accumaltor + currentValue.amount
        }, 0)
        // console.log("reduced", reduced);
        return [key, reduced]
      }).filter(e => e[1] > 0);
      console.log("overviewChartData ", this.overviewChartData)
    })
    
  }

  groupByCategory(transactions) {
    let transactionsGroupedByCategory = groupBy(transactions, "category");
    console.log(transactionsGroupedByCategory);
    return transactionsGroupedByCategory;
  }

}

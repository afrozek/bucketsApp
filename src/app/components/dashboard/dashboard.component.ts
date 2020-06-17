import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'app/services/transactions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navItems: { displayText: string; iconPath: string; anchorLink: string; }[];
  transactions: any;

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
  }

  getTransactions() {
    let transactions = this.transactionsService.getTransactions().subscribe(data => {
      console.log("transactions:", data);
      this.transactions = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navItems: { displayText: string; iconPath: string; anchorLink: string; }[];

  constructor() { }

  ngOnInit() {
    this.initNav();
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

}

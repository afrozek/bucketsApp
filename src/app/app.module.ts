import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/components/login/login.component';
import { SignupComponent } from './components/auth/components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardSidebarComponent } from './components/dashboard/components/dashboard-sidebar/dashboard-sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

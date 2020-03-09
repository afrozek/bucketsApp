import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component

})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', {static: true}) loginForm: NgForm;
  loginButtonText: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginButtonText = "Login";
  }

  onSubmit(loginForm: NgForm) {
    console.log('this.loginForm', this.loginForm);
    console.log('this.loginForm.value', this.loginForm.value);
    console.log(this.loginForm.value.email);

    this.loginButtonText = "Processing";

    this.authService.login(this.loginForm.value).subscribe((res)=>{
      console.log("yay logged in");
      console.log('res', res);
      this.loginButtonText = "Redirecting";
      this.router.navigate(['/dashboard']);

    },(err)=> {
      console.log('err: ', err);
    }) 
    
  }

}

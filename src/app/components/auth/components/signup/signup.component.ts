import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component

})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm: NgForm;
  @ViewChild('confirmCodeForm') confirmCodeForm: NgForm;

  signupButtonText: string;
  signupErrorText: string;
  showConfirmCodeForm: boolean;
  confirmCodeButtonText: string;
  confirmCodeErrorText: string;
  email: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signupButtonText = "Submit";
    this.confirmCodeButtonText = "Submit";
  }

  onSubmit(signupForm: NgForm) {
    console.log('this.signupForm', this.signupForm);
    console.log('this.signupForm.value', this.signupForm.value);
    console.log(this.signupForm.value.email);

    this.signupButtonText = "Processing";
    this.signupErrorText = "";

    this.authService.signup(this.signupForm.value)
    .subscribe((res)=>{
      this.signupErrorText = "";
      this.showConfirmCodeForm = true;
      this.email = res.username;
      console.log('res', res);
    },(err)=> {
      this.signupErrorText = "error";
      this.signupButtonText = "Submit";
      console.log('err: ', err);
    })  
  }


  onSubmitConfirmCode(confirmCodeForm: NgForm) {
    console.log('this.confirmCodeForm', this.confirmCodeForm);
    console.log('this.confirmCodeForm.value', this.confirmCodeForm.value);
    console.log(this.confirmCodeForm.value.email);

    this.confirmCodeButtonText = "Processing";
    this.confirmCodeErrorText = "";
    this.confirmCodeForm.value.email = this.email;

    this.authService.confirmCode(this.confirmCodeForm.value)
    .subscribe((res)=>{
      this.confirmCodeErrorText = "";
      this.router.navigate(['/login']);
      console.log('res', res);
    },(err)=> {
      this.confirmCodeErrorText = "error";
      this.confirmCodeButtonText = "Submit";
      console.log('err: ', err);
    })  
  }


}

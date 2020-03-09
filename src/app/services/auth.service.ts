import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';

const poolData = {
  UserPoolId: 'us-east-1_nKfOaix3d', // Your user pool id here
  ClientId: '2p3lcbndmnp4h6savk7d3up2f4'
};

const userPool = new CognitoUserPool(poolData);



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: CognitoUser;

  constructor(private http: HttpClient) { }

  signup(formData): Observable<any> {

    return new Observable((observer) => {



      console.log(formData);
      // return formData;

      const attrList: CognitoUserAttribute[] = [];
      const emailAttr = {
        Name: 'email',
        Value: formData.email
      }

      attrList.push(new CognitoUserAttribute(emailAttr))

      userPool.signUp(formData.email, formData.password, attrList, null, (err, result) => {
        if (result) {
          this.User = result.user;
          console.log(result);
          observer.next(this.User)

        } else {
          console.log(err);
          observer.error(err);
        }
      })

    })
    // return this.http.post("http://example.com/signup", formData);
  }

  confirmCode(formData) {
    return new Observable((observer) => {

      console.log(formData);
      // return formData;



      const cognitoUser = new CognitoUser({ Username: formData.email, Pool: userPool })
      cognitoUser.confirmRegistration(formData.confirmCode, true, (err, result) => {
        if (result) {
          console.log(result);
          observer.next(result)
        } else {
          console.log(err);
          observer.error(err);
        }
      })

    })

  }

  login(formData) {
    console.log(formData);

    return new Observable((observer) => {
      const authData = new AuthenticationDetails({
        Username: formData.email,
        Password: formData.password
      })

      const userData = {
        Username: formData.email,
        Pool: userPool
      }

      const cognitoUser = new CognitoUser(userData);
      cognitoUser.authenticateUser(authData, {
        onSuccess(result: CognitoUserSession) {
          observer.next(result)
        },
        onFailure(err) {
          observer.error(err);
        } 
      })
      

    })

  }
}

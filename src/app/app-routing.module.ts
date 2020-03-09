import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/components/login/login.component';
import { SignupComponent } from './components/auth/components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

class login {

}


const routes: Routes = [
  { 
    path: '',
    component: AuthComponent,
    children: [
      { path: '',   redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
  // { path: 'characters', component: CharactersComponent, children: [
  //   { path: '', component: CharactersHomeComponent },
  //   { path: ':id/detail', component: CharacterDetailComponent }
  // ]},
  // { path: '',   redirectTo: 'LoginComponent', pathMatch: 'full' },
  // { path: '**',   redirectTo: 'LoginComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {EmployeeComponent } from '../app/employee/employee.component';
import { AuthenticationService } from './service/authentication.service';
import {AuthguardService } from './service/authguard.service';
import {UserComponent} from './user/user/user.component';
import {AddnewemployeeComponent} from './addnewemployee/addnewemployee.component';
const routes: Routes = [

  { path : 'home' , component : HomeComponent , canActivate: [AuthguardService]},
  { path : 'login' , component : LoginComponent},
  { path : 'addnewemployee' , component : AddnewemployeeComponent, canActivate:[AuthguardService]},
  { path : 'logout' , component : LogoutComponent , canActivate: [AuthguardService]},
  { path : '' , redirectTo: 'user', pathMatch: 'full'},
  { path : 'user' , component : UserComponent , canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

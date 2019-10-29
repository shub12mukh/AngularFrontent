import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserallComponent} from './userall/userall.component';
import {UserarchitectComponent} from './userarchitect/userarchitect.component';
import {Routes,RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import {AuthguardService } from '../service/authguard.service';
const routes : Routes = [
  {
    path : "user",
    component : UserComponent,
    children : [
      {
        path : "userall",
        component : UserallComponent,
        canActivate: [AuthguardService]
      },
      {
        path : "userarchitect",
        component : UserarchitectComponent,
        canActivate: [AuthguardService]
      }
    ]
  }
];


@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class UserRoutingModule { }

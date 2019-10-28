import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserallComponent} from './userall/userall.component';
import {UserarchitectComponent} from './userarchitect/userarchitect.component';
import {Routes,RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
const routes : Routes = [
  {
    path : "user",
    component : UserComponent,
    children : [
      {
        path : "userall",
        component : UserallComponent
      },
      {
        path : "userarchitect",
        component : UserarchitectComponent
      }
    ]
  }
];


@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class UserRoutingModule { }

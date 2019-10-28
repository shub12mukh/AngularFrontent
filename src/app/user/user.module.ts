import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserallComponent } from './userall/userall.component';
import { UserarchitectComponent } from './userarchitect/userarchitect.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [ UserallComponent, UserarchitectComponent, UserComponent],
  imports: [
    CommonModule, UserRoutingModule , 
  ]
})
export class UserModule { }

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  constructor(private route : Router, private authentication : AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin(){
    if(this.authentication.authentication(this.username,this.password)){
      this.route.navigate(['user'])
      this.invalidLogin = false
      console.log("Valid user and pass")
    }
    else {
      this.invalidLogin = true
    }
  }

  userLogin(){
    console.log(this.username+''+this.password);
    this.authentication.attemptAuth(this.username,this.password).subscribe(
      data =>{
        console.log(data);
      }
    );
  }
}

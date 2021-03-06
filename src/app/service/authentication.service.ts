import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpclientService} from './httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpclientservice:HttpclientService) { }
  private username= "shub12";
  private password= "abcd1234";


  authentication(username,password){
    if(this.username == username && this.password == password){
      localStorage.setItem('username',username)
      return true;
    }
    else return false;
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('token');
    return !(user === null)
  }

  userLogOut(){
    localStorage.removeItem('username');
  }

  attemptAuth(username:String,password:String){
    return this.httpclientservice.getValidToken(username,password);
  }

  saveTokenToLocalStorage(token){
    localStorage.setItem('token', token.authtoken);
  }

  getTokenFromLocalStorage(){
    return localStorage.getItem('token');
  }
}

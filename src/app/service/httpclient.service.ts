import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http : HttpClient) { }

  private url = "http://demo2350168.mockable.io";

  getEmployeeDetails(){
    return this.http.get("http://demo2350168.mockable.io/alluser");
  }

  getValidToken(username:String,password:String){
    const credential = {username:username,password:password}
    console.log('Attemting Token Login');
    return this.http.post(this.url+'/loginuser',credential);
  }

}

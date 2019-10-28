import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http : HttpClient) { }

  private url = "";

  getEmployeeDetails(){
    return this.http.get("http://demo2350168.mockable.io/alluser");
  }

  getEmployeeArchitecture(){
    return this.http.get("http://demo2350168.mockable.io/architecture");
  }

}

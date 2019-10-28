import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
@Component({
  selector: 'app-userarchitect',
  templateUrl: './userarchitect.component.html',
  styleUrls: ['./userarchitect.component.css']
})
export class UserarchitectComponent implements OnInit {

  

  constructor(private http : HttpclientService) { }
  
    employees : any[];
    ngOnInit() {
      this.http.getEmployeeArchitecture().subscribe(
        response => this.handleProperRequest(response),
      );
    }
  
    handleProperRequest(response){
      this.employees = response;
    }

}

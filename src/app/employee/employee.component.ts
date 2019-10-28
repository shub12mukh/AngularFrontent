import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {

  constructor(private http : HttpclientService) { }
  employees : any[];
  ngOnInit() {
    this.http.getEmployeeDetails().subscribe(
      response => this.handleProperRequest(response),
    );
  }

  handleProperRequest(response){
    this.employees = response;
  }

}

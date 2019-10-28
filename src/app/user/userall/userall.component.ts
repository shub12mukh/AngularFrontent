import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
@Component({
  selector: 'app-userall',
  templateUrl: './userall.component.html',
  styleUrls: ['./userall.component.css']
})
export class UserallComponent implements OnInit {

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

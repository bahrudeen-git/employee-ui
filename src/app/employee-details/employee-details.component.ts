import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  constructor(private employeeService: EmployeeService){}
e: any;
  ngOnInit() {
    this.e = this.employeeService.getEmployees().subscribe((data:any) => {
      this.e = data;
    console.log("Employee Details:", this.e);
    })
  }

}

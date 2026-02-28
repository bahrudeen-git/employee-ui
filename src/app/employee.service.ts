import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
//import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  httpData: any;
  private apiUrl = "http://54.224.46.64:8080/emp-service/employees";
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}

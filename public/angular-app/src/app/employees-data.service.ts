import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from './employees/employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {
  private apiBaseUrl: string= "http://localhost:3000/api"

  constructor(private http:HttpClient) { }

  public getEmployees(pageNumber: number): Observable<EmployeeData> {
    const url: string= this.apiBaseUrl + "/employees?offset=" + pageNumber * 5;
    
    return this.http.get<EmployeeData>(url);
  }

  public getCity(employeeId: string): Observable<Employee> {
    const url: string= this.apiBaseUrl + "/employees/" + employeeId;
    
    return this.http.get<Employee>(url);
  }

  public searchEmployees(name: string): Observable<EmployeeData> {
    const url = `${this.apiBaseUrl}/employees?name=${name}`;
    return this.http.get<EmployeeData>(url); 
  }

  public encryptPassword(employeeId: string): Observable<any> {
    const url = `${this.apiBaseUrl}/employees/${employeeId}`;
    return this.http.patch<null>(url, {});
  }
}
class EmployeeData {
  #count!: number;
  #employees!: Employee[];

  get count(): number {return this.#count}
  get employees(): Employee[] {return this.#employees}
}
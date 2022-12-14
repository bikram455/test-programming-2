import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesDataService } from '../employees-data.service';
import { Employee } from '../employees/employees.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // employee:Employee= new Employee({_id: "123", employeeId: "123", location: {address: {street1: "", employee: "", state: "", zip: ""}, geo: {}}});
  employee:Employee= new Employee();
  dob!: Date;
  message!: string;
  constructor(private employeeService: EmployeesDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const employeeId: string= this.route.snapshot.params["employeeId"];
    
    this.employeeService.getCity(employeeId).subscribe({
      next: (employee)=> this.fillCity(employee),
      error: (error:any)=>{this.employee= new Employee(); console.log(error);
      },
    });
  }

  private fillCity(employee: Employee): void {
    this.employee= employee;
    // this.dob = new Date(employee.dob);
    console.log("this.employee",this.employee);
    
  }

  encryptpassword(): void {
    const employeeId = this.route.snapshot.params['employeeId'];
    this.employeeService.encryptPassword(employeeId).subscribe(res => {
      console.log('Password encrypted successfully!');
      this.message = res;
    }, err => {
      console.error(err);
    });
  }

}

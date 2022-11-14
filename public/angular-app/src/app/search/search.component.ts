import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeesDataService } from '../employees-data.service';
import { Employee } from '../employees/employees.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name!: string;
  employees: Employee[] = [];
  @ViewChild('searchForm')
  searchForm!: NgForm;
  constructor(private _employeesService: EmployeesDataService) { }

  ngOnInit(): void {
  }

  searchEmployees(search: NgForm): void {
    console.log(search.value);
    this._employeesService.searchEmployees(search.value.name).subscribe(res => {
      this.employees = res['employees'];
    }, err => {
      this.employees = [];
      console.error(err);
    });
  }

}

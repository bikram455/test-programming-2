import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    EmployeesComponent,
    EmployeeComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "employees",
        component: EmployeesComponent
      },
      {
        path: "employees/:employeeId",
        component: EmployeeComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

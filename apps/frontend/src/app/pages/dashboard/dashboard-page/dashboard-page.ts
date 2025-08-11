import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../../core/services/employee/employee/employee';
import { DepartmentService } from '../../../core/services/department/department/department';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage implements OnInit {
  private employeeService = inject(EmployeeService);
  private departmentService = inject(DepartmentService);

  employeeCount = 0;
  departmentCount = 0;

  ngOnInit(): void {
    this.employeeService.count().subscribe(n => this.employeeCount = n);
    this.departmentService.count().subscribe(n => this.departmentCount = n);
  }
}



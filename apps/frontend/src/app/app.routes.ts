import { Routes } from '@angular/router';
import { EmployeesList } from './pages/employees/employees-list/employees-list';
import { DashboardPage } from './pages/dashboard/dashboard-page/dashboard-page';
import { LoginPage } from './pages/login/login-page/login-page';
import { EmployeeDetail } from './pages/employees/employee-detail/employee-detail';
import { DepartmentsList } from './pages/departments/departments-list/departments-list';
import { DepartmentDetail } from './pages/departments/department-detail/department-detail';
import { NotFoundPage } from './pages/not-found/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', component: DashboardPage},
  { path: 'login', component: LoginPage },
  { path: 'employees', component: EmployeesList },
  { path: 'employees/:id', component: EmployeeDetail },
  { path: 'departments', component: DepartmentsList },
  { path: 'departments/:id', component: DepartmentDetail },
  { path: '**', component: NotFoundPage },
  { path: 'employees/new', component: EmployeeDetail},

];


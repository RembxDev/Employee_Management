import { Injectable, inject } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { Observable }         from 'rxjs';
import { Employee }           from '../../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly http = inject(HttpClient);
  private readonly base = 'http://localhost:8080/api/employees';

  count(): Observable<number> {
    return this.http.get<number>(`${this.base}/count`);
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.base);
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.base}/${id}`);
  }

  create(emp: Partial<Employee>): Observable<Employee> {
    return this.http.post<Employee>(this.base, emp);
  }

  update(id: number, emp: Partial<Employee>): Observable<Employee> {
    return this.http.put<Employee>(`${this.base}/${id}`, emp);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }



}

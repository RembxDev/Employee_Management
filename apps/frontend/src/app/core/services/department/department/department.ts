import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../../../models/department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private readonly http = inject(HttpClient);
  private readonly base =          'http://localhost:8080/api/departments';

  count(): Observable<number> {
    return this.http.get<number>(`${this.base}/count`);
  }

  getAll(): Observable<Department[]> {
    return this.http.get<Department[]>(this.base);
  }

  getById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.base}/${id}`);
  }

  create(dep: Partial<Department>): Observable<Department> {
    return this.http.post<Department>(this.base, dep);
  }

  update(id: number, dep: Partial<Department>): Observable<Department> {
    return this.http.put<Department>(`${this.base}/${id}`, dep);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }


}

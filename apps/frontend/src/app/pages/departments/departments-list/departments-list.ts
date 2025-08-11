import { Component, OnInit, inject } from '@angular/core';
import { DepartmentService }          from '../../../core/services/department/department/department';
import { Department }                 from '../../../core/models/department';

@Component({
  selector: 'app-departments-list',
  standalone: true,
  templateUrl: './departments-list.html',
  styleUrls: ['./departments-list.scss'],
})
export class DepartmentsList implements OnInit {
  private svc = inject(DepartmentService);
  departments: Department[] = [];

  ngOnInit(): void {
    this.svc.getAll().subscribe(data => this.departments = data);
  }
}

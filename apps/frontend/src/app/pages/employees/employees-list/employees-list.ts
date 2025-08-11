import { ChangeDetectionStrategy, Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { EmployeeService } from '../../../core/services/employee/employee/employee';
import { Employee } from '../../../core/models/employee';

type SortKey = 'id' | 'firstName' | 'lastName' | 'email' | 'position' | 'hireDate';
type SortDir = 'asc' | 'desc';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './employees-list.html',
  styleUrls: ['./employees-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesList implements OnInit {
  private readonly svc = inject(EmployeeService);

  // stany
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  // dane + UI
  employees = signal<Employee[]>([]);
  query = signal('');
  sortKey = signal<SortKey>('id');
  sortDir = signal<SortDir>('asc');

  // lista po filtrze + sortowaniu
  filtered = computed(() => {
    const q = this.query().toLowerCase().trim();
    const key = this.sortKey();
    const dir = this.sortDir();
    const collator = new Intl.Collator('pl', { sensitivity: 'base', numeric: true });

    const getVal = (e: Employee): string | number => {
      switch (key) {
        case 'id':        return e.id ?? 0;
        case 'firstName': return e.firstName ?? '';
        case 'lastName':  return e.lastName ?? '';
        case 'email':     return e.email ?? '';
        case 'position':  return e.position ?? '';
        case 'hireDate':  return (e.hireDate ?? '').toString();
      }
    };

    let list = this.employees();
    if (q) {
      list = list.filter(e =>
        `${e.id} ${e.firstName} ${e.lastName} ${e.email} ${e.position} ${e.hireDate}`
          .toLowerCase()
          .includes(q)
      );
    }

    return [...list].sort((a, b) => {
      const av = getVal(a);
      const bv = getVal(b);
      const res =
        typeof av === 'number' && typeof bv === 'number'
          ? av - bv
          : collator.compare(String(av), String(bv));
      return dir === 'asc' ? res : -res;
    });
  });

  ngOnInit(): void {
    this.svc
      .getAll()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (data) => {
          this.employees.set(Array.isArray(data) ? data : []);
          this.loading.set(false);
        },
        error: (err) => {
          console.error(err);
          this.error.set('Nie udało się pobrać listy pracowników.');
          this.loading.set(false);
        },
      });
  }

  setSort(col: SortKey) {
    if (this.sortKey() === col) {
      this.sortDir.set(this.sortDir() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortKey.set(col);
      this.sortDir.set('asc');
    }
  }
}

import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { EmployeeService } from '../../../core/services/employee/employee/employee';
import { Employee } from '../../../core/models/employee';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './employee-detail.html',
  styleUrls: ['./employee-detail.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetail implements OnInit {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly svc = inject(EmployeeService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  loading = false;
  saving = false;
  submitted = false;

  readonly form = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(50)]],
    lastName:  ['', [Validators.required, Validators.maxLength(50)]],
    email:     ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    phone:     ['', [Validators.pattern(/^[+0-9\s-]{7,}$/)]],
    position:  ['', [Validators.required, Validators.maxLength(80)]],
    hireDate:  ['', [Validators.required]], // 'YYYY-MM-DD'
  });

  id: number | null = null;

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param && param !== 'new') {
      this.id = Number(param);
      this.loading = true;

      this.svc.getById(this.id)
        .pipe(takeUntilDestroyed())
        .subscribe({
          next: (e: Employee) => {
            this.form.patchValue({
              firstName: e.firstName ?? '',
              lastName:  e.lastName ?? '',
              email:     e.email ?? '',
              phone:     e.phone ?? '',
              position:  e.position ?? '',

              // input[type=date] wymaga 'YYYY-MM-DD'
              hireDate:  (e.hireDate ?? '').toString().slice(0, 10),
            });
          },
          error: () => { this.loading = false; },
          complete: () => { this.loading = false; },
        });
    }
  }

  save(): void {
    this.submitted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const dto = this.form.getRawValue();
    this.saving = true;

    const req$ = this.id != null
      ? this.svc.update(this.id, dto)
      : this.svc.create(dto);

    req$
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: () => this.router.navigate(['/employees']),
        error: () => { this.saving = false; },
        complete: () => { this.saving = false; },
      });
  }
}

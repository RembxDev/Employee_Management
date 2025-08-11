import { TestBed } from '@angular/core/testing';

import { DepartmentServiceTs } from './department.service.ts';

describe('DepartmentServiceTs', () => {
  let service: DepartmentServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

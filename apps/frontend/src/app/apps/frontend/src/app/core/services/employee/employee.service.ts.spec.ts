import { TestBed } from '@angular/core/testing';

import { EmployeeServiceTs } from './employee.service.ts';

describe('EmployeeServiceTs', () => {
  let service: EmployeeServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

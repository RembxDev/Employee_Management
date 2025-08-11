import { TestBed } from '@angular/core/testing';

import { LeaveServiceTs } from './leave.service.ts';

describe('LeaveServiceTs', () => {
  let service: LeaveServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

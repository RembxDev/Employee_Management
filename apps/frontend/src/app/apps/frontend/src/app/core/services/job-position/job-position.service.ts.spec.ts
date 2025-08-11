import { TestBed } from '@angular/core/testing';

import { JobPositionServiceTs } from './job-position.service.ts';

describe('JobPositionServiceTs', () => {
  let service: JobPositionServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobPositionServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

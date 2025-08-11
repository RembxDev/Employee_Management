import { TestBed } from '@angular/core/testing';

import { PerformanceReviewServiceTs } from './performance-review.service.ts';

describe('PerformanceReviewServiceTs', () => {
  let service: PerformanceReviewServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceReviewServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

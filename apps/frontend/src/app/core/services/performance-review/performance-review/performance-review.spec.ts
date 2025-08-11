import { TestBed } from '@angular/core/testing';

import { PerformanceReview } from './performance-review';

describe('PerformanceReview', () => {
  let service: PerformanceReview;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceReview);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

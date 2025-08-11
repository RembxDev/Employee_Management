import { TestBed } from '@angular/core/testing';

import { ContractServiceTs } from './contract.service.ts';

describe('ContractServiceTs', () => {
  let service: ContractServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

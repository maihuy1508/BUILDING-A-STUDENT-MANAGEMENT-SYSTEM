import { TestBed } from '@angular/core/testing';

import { BdtService } from './bdt.service';

describe('BdtService', () => {
  let service: BdtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

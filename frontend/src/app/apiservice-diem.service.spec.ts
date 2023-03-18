import { TestBed } from '@angular/core/testing';

import { ApiserviceDiemService } from './apiservice-diem.service';

describe('ApiserviceDiemService', () => {
  let service: ApiserviceDiemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiserviceDiemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

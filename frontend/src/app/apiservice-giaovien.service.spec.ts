import { TestBed } from '@angular/core/testing';

import { ApiserviceGiaovienService } from './apiservice-giaovien.service';

describe('ApiserviceGiaovienService', () => {
  let service: ApiserviceGiaovienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiserviceGiaovienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

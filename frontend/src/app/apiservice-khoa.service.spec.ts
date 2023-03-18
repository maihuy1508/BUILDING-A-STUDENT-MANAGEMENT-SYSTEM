import { TestBed } from '@angular/core/testing';

import { ApiserviceKhoaService } from './apiservice-khoa.service';

describe('ApiserviceKhoaService', () => {
  let service: ApiserviceKhoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiserviceKhoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

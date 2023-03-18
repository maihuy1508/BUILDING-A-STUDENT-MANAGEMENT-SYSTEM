import { TestBed } from '@angular/core/testing';

import { ApiserviceMonhocService } from './apiservice-monhoc.service';

describe('ApiserviceMonhocService', () => {
  let service: ApiserviceMonhocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiserviceMonhocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

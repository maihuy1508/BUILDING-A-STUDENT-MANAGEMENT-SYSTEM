import { TestBed } from '@angular/core/testing';

import { ApilophocService } from './apilophoc.service';

describe('ApilophocService', () => {
  let service: ApilophocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApilophocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

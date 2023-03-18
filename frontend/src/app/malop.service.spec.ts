import { TestBed } from '@angular/core/testing';

import { MalopService } from './malop.service';

describe('MalopService', () => {
  let service: MalopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

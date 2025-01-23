import { TestBed } from '@angular/core/testing';

import { ButikService } from './butik.service';

describe('ButikService', () => {
  let service: ButikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

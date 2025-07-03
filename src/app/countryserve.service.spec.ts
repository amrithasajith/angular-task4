import { TestBed } from '@angular/core/testing';

import { CountryserveService } from './countryserve.service';

describe('CountryserveService', () => {
  let service: CountryserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

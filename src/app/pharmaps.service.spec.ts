import { TestBed } from '@angular/core/testing';

import { PharmapsService } from './pharmaps.service';

describe('PharmapsService', () => {
  let service: PharmapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

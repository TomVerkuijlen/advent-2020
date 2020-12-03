import { TestBed } from '@angular/core/testing';

import { Day1Service } from './day-1.service';

describe('Day1Service', () => {
  let service: Day1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Day1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Day2Service } from './day-2.service';

describe('Day2Service', () => {
  let service: Day2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Day2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

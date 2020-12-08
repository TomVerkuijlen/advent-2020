import { TestBed } from '@angular/core/testing';

import { Day7Service } from './day-7.service';

describe('Day7Service', () => {
  let service: Day7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Day7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can check if a bag can hold a gold bag', () => {
    let data = {
      'bright white': {'shiny gold': 1},
      'dark olive': {'faded blue': 3, 'dotted black': 4},
      'dark orange': {'bright white': 3, 'muted yellow': 4},
      'dotted black': null,
      'faded blue': null,
      'light red': {'bright white': 1, 'muted yellow': 2},
      'muted yellow': {'shiny gold': 2, 'faded blue': 9},
      'shiny gold': {'dark olive': 1, 'vibrant plum': 2},
      'vibrant plum': {'faded blue': 5, 'dotted black': 6}
    };

    expect(service.canHoldBag(data, data['muted yellow'])).toBeTrue();
    expect(service.canHoldBag(data, data['dark orange'])).toBeTrue();
    expect(service.canHoldBag(data, data['vibrant plum'])).toBeFalse();
  });

  it('can calculate the amount of bags needed', () => {
    let data = {
      'shiny gold': { 'dark red': 2 },
      'dark red': { 'dark orange': 2 },
      'dark orange': { 'dark yellow': 2 },
      'dark yellow': { 'dark green': 2 },
      'dark green': { 'dark blue': 2 },
      'dark blue': { 'dark violet': 2 },
      'dark violet': null 
    };

    expect(service.amountOfBags(data, 'shiny gold') - 1).toBe(126);

    let data2 = {
      'shiny gold': { 'dark olive': 1, 'vibrant plum': 2 },
      'dark olive': { 'faded blue': 3, 'dotted black': 4 },
      'faded blue': null,
      'dotted black': null,
      'vibrant plum': { 'faded blue': 5, 'dotted black': 6 }
    }

    expect(service.amountOfBags(data2, 'shiny gold') - 1).toBe(32);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTenComponent } from './day-ten.component';

describe('DayTenComponent', () => {
  let component: DayTenComponent;
  let fixture: ComponentFixture<DayTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run the example', () => {
    const numbers = [
      28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3
    ];

    expect(component.calculate(numbers)).toBe(220);
  });

  it('should run the example for part 2', () => {
    const numbers = [
      28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3
    ];

    expect(component.calculateDistinctWays(numbers)).toBe(19208);
  });
});

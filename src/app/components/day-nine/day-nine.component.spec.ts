import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNineComponent } from './day-nine.component';

describe('DayNineComponent', () => {
  let component: DayNineComponent;
  let fixture: ComponentFixture<DayNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run the example', () => {
    const numbers = [35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576];

    expect(component.calculate(numbers, 5)).toBe(127);
  });
});

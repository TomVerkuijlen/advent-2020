import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayFiveComponent } from './day-five.component';

describe('DayFiveComponent', () => {
  let component: DayFiveComponent;
  let fixture: ComponentFixture<DayFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to get the id', () => {
    expect(component.getId('BFFFBBFRRR')).toBe(567);
    expect(component.getId('FFFBBBFRRR')).toBe(119);
    expect(component.getId('BBFFBBFRLL')).toBe(820);
  });

  // it('should return the correct row', () => {
  //   expect(component.getId('FBFBBFFRLR')).toBe(44);
  // })
});

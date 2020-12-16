import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTwelveComponent } from './day-twelve.component';

describe('DayTwelveComponent', () => {
  let component: DayTwelveComponent;
  let fixture: ComponentFixture<DayTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

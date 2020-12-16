import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayThirteenComponent } from './day-thirteen.component';

describe('DayThirteenComponent', () => {
  let component: DayThirteenComponent;
  let fixture: ComponentFixture<DayThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

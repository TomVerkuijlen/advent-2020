import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySevenComponent } from './day-seven.component';

describe('DaySevenComponent', () => {
  let component: DaySevenComponent;
  let fixture: ComponentFixture<DaySevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaySevenComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run the example', () => {
    const input = 'light red bags contain 1 bright white bag, 2 muted yellow bags.\ndark orange bags contain 3 bright white bags, 4 muted yellow bags.\nbright white bags contain 1 shiny gold bag.\nmuted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\nshiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\ndark olive bags contain 3 faded blue bags, 4 dotted black bags.\nvibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\nfaded blue bags contain no other bags.\ndotted black bags contain no other bags.'
  
    expect(component.calculate(input)).toBe(4);
  });
});

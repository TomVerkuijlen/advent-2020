import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayEightComponent } from './day-eight.component';

describe('DayEightComponent', () => {
  let component: DayEightComponent;
  let fixture: ComponentFixture<DayEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform the example', () => {
    const input = 'nop +0\nacc +1\njmp +4\nacc +3\njmp -3\nacc -99\nacc +1\njmp -4\nacc +6';
    const convertedInput = component.convert(input);

    expect(component.partOne(convertedInput).acc).toBe(5);
  });

  it('can toggle between nop and jmp', () => {
    expect(component.toggle('jmp')).toBe('nop');
    expect(component.toggle('nop')).toBe('jmp');
  })
});

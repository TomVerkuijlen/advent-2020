import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySixComponent } from './day-six.component';

describe('DaySixComponent', () => {
  let component: DaySixComponent;
  let fixture: ComponentFixture<DaySixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaySixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('case 1 should run on the example', () => {
    expect(component.count1('abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb')).toBe(11);
  });

  it('case 2 should run on the example', () => {
    expect(component.count2('abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb')).toBe(6);
  });

  it('can return the same answers from an 2d array', () => {
    expect(component.getSameAnswers([['a', 'b'], ['c', 'd']])).toEqual([]);
    expect(component.getSameAnswers([['a', 'b'], ['a', 'd']])).toEqual(['a']);
    expect(component.getSameAnswers(['a', 'b', 'c'])).toEqual([]);
  })
});

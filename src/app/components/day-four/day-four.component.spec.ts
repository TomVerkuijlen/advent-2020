import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayFourComponent } from './day-four.component';

describe('DayFourComponent', () => {
  let component: DayFourComponent;
  let fixture: ComponentFixture<DayFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate if it\'s required', () => {
    component.fields = { test: { required: true } };

    const valid = component.validateLine('test', null);

    expect(valid).toBeFalse();

    const valid2 = component.validateLine('test', 'test');

    expect(valid2).toBeTrue();
  });

  it('should validate the min length', () => {
    component.fields = { test: { min: 2000 } };

    const valid = component.validateLine('test', 100);

    expect(valid).toBeFalse();

    const valid2 = component.validateLine('test', 2001);

    expect(valid2).toBeTrue();

    const valid3 = component.validateLine('test', 2000);

    expect(valid3).toBeTrue();
  });

  it('should validate the max length', () => {
    component.fields = { test: { max: 2000 } };

    const valid = component.validateLine('test', 100);

    expect(valid).toBeTrue();

    const valid2 = component.validateLine('test', 2001);

    expect(valid2).toBeFalse();

    const valid3 = component.validateLine('test', 2000);

    expect(valid3).toBeTrue();
  });

  it('should validate the length of a string', () => {
    component.fields = { test: { length: 7 }};

    const valid = component.validateLine('test', '#abcdef');

    expect(valid).toBeTrue();

    const valid2 = component.validateLine('test', 'hi');

    expect(valid2).toBeFalse();
  });

  it('should validate the length of a number', () => {
    component.fields = { test: { length: 7 }};

    const valid = component.validateLine('test', 1234567);

    expect(valid).toBeTrue();

    const valid2 = component.validateLine('test', 123);

    expect(valid2).toBeFalse();
  });

  it('should validate an enum', () => {
    component.fields = { test: { enum: ['hi', 'hi2', 'hi3', 'hi4'] }};

    const valid = component.validateLine('test', 'hi');

    expect(valid).toBeTrue();

    const valid2 = component.validateLine('test', 'nope');

    expect(valid2).toBeFalse();
  });

  it('should validate a starts with on a number', () => {
    component.fields = { test: { startswith: '0' }};

    const valid = component.validateLine('test', '01234');

    expect(valid).toBeTrue();

    const valid2 = component.validateLine('test', '1234');

    expect(valid2).toBeFalse();
  });

  it('should validate a regex', () => {
    component.fields = { test: { regex: '#[0-9a-f]{6}' }};

    const valid = component.validateLine('test', '#abcdef');

    expect(valid).toBeTrue();

    const valid2 = component.validateLine('test', '#i0');

    expect(valid2).toBeFalse();
  });

  it('should validate a height', () => {
    component.fields = { test: { height: true }};

    const valid = component.validateLine('test', '76in');

    expect(valid).toBeTrue();

    const valid2 = component.validateLine('test', '78in');

    expect(valid2).toBeFalse();

    const valid3 = component.validateLine('test', '193cm');

    expect(valid3).toBeTrue();

    const valid4 = component.validateLine('test', '148cm');

    expect(valid4).toBeFalse();
  });

  it('should validate these values', () => {
    expect(component.validateLine('byr', 2002)).toBeTrue();
    expect(component.validateLine('byr', 2003)).toBeFalse();

    expect(component.validateLine('hgt', '60in')).toBeTrue();
    expect(component.validateLine('hgt', '190cm')).toBeTrue();
    expect(component.validateLine('hgt', '190in')).toBeFalse();
    expect(component.validateLine('hgt', '190')).toBeFalse();

    expect(component.validateLine('hcl', '#123abc')).toBeTrue();
    expect(component.validateLine('hcl', '#123abz')).toBeFalse();
    expect(component.validateLine('hcl', '123abc')).toBeFalse();

    expect(component.validateLine('ecl', 'brn')).toBeTrue();
    expect(component.validateLine('ecl', 'wat')).toBeFalse();

    expect(component.validateLine('pid', '000000001')).toBeTrue();
    expect(component.validateLine('pid', '0123456789')).toBeFalse();
  });
});

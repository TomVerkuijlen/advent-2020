import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animations';

import * as _ from 'lodash';

@Component({
  selector: 'app-day-four',
  templateUrl: './day-four.component.html',
  styleUrls: ['./day-four.component.css']
})
export class DayFourComponent implements OnInit {

  fields: any = {
    byr: { required: true, min: 1920, max: 2002 },
    iyr: { required: true, min: 2010, max: 2020 },
    eyr: { required: true, min: 2020, max: 2030 },
    hgt: { required: true, height: true },
    hcl: { required: true, regex: '#[0-9a-f]{6}' },
    ecl: { required: true, enum: ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'] },
    pid: { required: true, length: 9 },
    cid: { required: false }
  };

  constructor() { }

  ngOnInit(): void {
  }

  validate(input) {
    const passports = input.split('\n\n').map(i => i.split(/[ \n]/));
    let invalid = 0;

    let defaults = {};
    Object.keys(this.fields).forEach((key) => {
      defaults[key] = null;
    });

    for (let fields of passports) {
      let object = fields.reduce((a, b) => {
        return (a[b.split(':')[0]] = b.split(':')[1], a);
      }, {});

      _.defaults(object, defaults);

      for (const key of Object.keys(object)) {
        if (!this.validateLine(key, object[key])) {
          console.log('invalid', object);
          invalid++;
          break;
        }
      }
    }

    console.log(passports.length - invalid);
  }

  validateLine(key: string, value) {
    const validations = this.fields[key];

    if (validations.required && !value) return false;
    if (validations.min && parseInt(value) < validations.min) return false;
    if (validations.max && parseInt(value) > validations.max) return false;
    if (validations.length && value.toString().length !== validations.length) return false;
    if (validations.enum && !validations.enum.includes(value)) return false;
    if (validations.startswith && !value.startsWith(validations.startswith)) return false;
    if (validations.regex && !new RegExp(validations.regex).test(value)) return false;
    if (validations.height && new RegExp(/\d{2,3}(cm|in)/).test(value)) {
      const split = value.length - 2;
      const num = value.substr(0, split);
      const type = value.substr(split);

      if (type === 'cm' && !(num >= 150 && num <= 193)) return false;
      else if (type === 'in' && !(num >= 59 && num <= 76)) return false;
    } else if (validations.height) {
      return false;
    }

    return true;
  }
}

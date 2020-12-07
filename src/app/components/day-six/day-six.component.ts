import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-day-six',
  templateUrl: './day-six.component.html',
  styleUrls: ['./day-six.component.css']
})
export class DaySixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  go(input) {
    alert(this.count2(input));
  }

  /**
   * First exercise
   * 
   * @param input 
   */
  count1(input) {
    return input.split('\n\n').map(group => _.uniq(group.split('\n').map(a => a.split('')).flat())).reduce((a, b) => a + b.length, 0);
  }

  count2(input) {
    return input.split('\n\n').map(group => this.getSameAnswers(group.split('\n').map(a => a.split('')))).reduce((a, b) => a + b.length, 0);
  }

  getSameAnswers(array) {
    if (array.length) {
      let results = Array.isArray(array[0]) ? array[0] : [...array[0]];

      for (let i = 1; i < array.length; i++) {
        results = _.filter(Array.isArray(array[i]) ? array[i] : [...array[i]], (val) => results.includes(val));
      }

      return results;
    }

    return [];
  }
}

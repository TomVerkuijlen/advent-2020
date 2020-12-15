import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-ten',
  templateUrl: './day-ten.component.html',
  styleUrls: ['./day-ten.component.css']
})
export class DayTenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  convert(input) {
    return input.split('\n').map(i => parseInt(i));
  }

  partOne(input) {
    console.log(this.calculate(this.convert(input)));
  }

  calculate(numbers: number[]) {
    const differenceCount = { 1: 0, 2: 0, 3: 0 }

    numbers.sort((a, b) => a - b);
    numbers.unshift(0);
    numbers.push(numbers[numbers.length - 1] + 3);

    for (let i = 0; i < numbers.length; i++) {
      if (i + 1 >= numbers.length) break;

      const diff = numbers[i + 1] - numbers[i];

      if (diff > 3) return 0;

      differenceCount[diff]++;
    }

    return differenceCount[1] * differenceCount[3];
  }

  partTwo(input) {
    this.calculateDistinctWays(this.convert(input));
  }

  calculateDistinctWays(numbers: number[]) {
    numbers.sort((a, b) => a - b);
    numbers.unshift(0);
    numbers.push(numbers[numbers.length - 1] + 3);

    const array = [];
    const used = {};

    for (let i = 0; i < numbers.length; i++) {
      if (i + 1 >= numbers.length) break;

      let index = i + 1;
      let options = 0;

      console.log('for:', numbers[i]);

      while (numbers[index] - numbers[i] <= 3 && !used[numbers[index]]) {
        used[numbers[index]] = true;
        console.log('option:', numbers[index]);
        options++;
        index++;
      }

      array.push(options);
    } 

    console.log(array);

    return array.reduce((acc, v) => acc * v);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-nine',
  templateUrl: './day-nine.component.html',
  styleUrls: ['./day-nine.component.css']
})
export class DayNineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  partOne(input) {
    input = this.convert(input);

    console.log(this.calculate(input));
  }

  partTwo(input) {
    input = this.convert(input);

    const number = this.calculate(input);

    console.log(this.getEncryptionWeakness(input, number));
  }

  convert(input) {
    return input.split('\n').map(x => parseInt(x));
  }

  calculate(numbers: number[], preamble_size = 25) {
    for (let i = preamble_size; i < numbers.length; i++) {
      if (!this.findSum(numbers, i, preamble_size)) {
        return numbers[i];
      }
    }
  }

  findSum(numbers: number[], i: number, preamble_size: number) {
    const previousNumbers = numbers.slice(i - preamble_size, i);
    for (let prev of previousNumbers) {
      if (previousNumbers.includes(numbers[i] - prev)) {
        return true;
      }
    }

    return false;
  }

  getEncryptionWeakness(numbers: number[], number) {
    for (let i = 0; i < numbers.length; i++) {
      const contiguousSet: number[] = [];
      let total = 0, index = i;

      while (total < number) {
        total += numbers[index];
        contiguousSet.push(numbers[index]);

        index++;
      }

      if (total === number) {
        return Math.min(...contiguousSet) + Math.max(...contiguousSet);
      }
    }
  }
}

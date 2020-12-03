import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Day1Service {
  list = [1721, 979, 366, 299, 675, 1456];

  constructor() { }

  calculate(sum: number, list?: number[]) {
    this.list = list ? list : this.list;

    this.list.sort((a, b) => a - b);

    console.log(this.list);

    const numbers = this.findSum(sum);

    if (numbers.length === 0) {
      console.error('oopsie');

      return 0;
    }

    return numbers[0] * numbers[1] * numbers[2];
  }

  private findSum(sum: number): number[]
  {
    let numbers = [];

    // loop through each value
    for (let value of this.list) {
      for (let value2 of this.list) { // without this for loop is the first version which compares 2
        if (value !== value2) {
          let remaining = sum - value - value2;

          if (remaining <= this.list[this.list.length - 1] && remaining >= this.list[0])
          {
            let x = this.binary(remaining, 0, this.list.length - 1);
            
            if (x) {
              numbers[0] = value;
              numbers[1] = value2;
              numbers[2] = x;
            };
          }
        }
      }
    }

    return numbers;
  }

  private binary(x: number, start, end): number
  {
    if (start > end) return 0;

    let mid = Math.floor((start + end) / 2);

    if (this.list[mid] === x) return x;

    if (this.list[mid] > x)
      return this.binary(x, start, mid - 1);
    else
      return this.binary(x, mid + 1, end);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-five',
  templateUrl: './day-five.component.html',
  styleUrls: ['./day-five.component.css']
})
export class DayFiveComponent implements OnInit {

  ROWS = 128;
  COLS = 8;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(input) {
    const results: number[] = [];

    for (let row of input.split('\n')) {
      results.push(this.getId(row));
    }

    results.sort((a, b) => a - b);
    for (let i = 1; i < results.length; i++) {
      if (results[i] - results[i - 1] != 1) {
        alert(results[i] - 1);
      }
    }
    // alert(Math.max(...results));
  }

  getId(string) {
    const rows = [...string.substr(0, string.length - 3)];
    const cols = [...string.substr(string.length - 3)];

    return this.binary(rows, 0, 128) * 8 + this.binary(cols, 0, 8);
  }

  private binary(array, start, end): number {
    const letter = array[0];
    array.shift();

    if (letter === 'F' || letter === 'L') {
      return this.binary(array, start, Math.floor((start + end) / 2))
    } else if (letter === 'B' || letter === 'R') {
      return this.binary(array, Math.floor((start + end) / 2), end)
    } else {
      return start;
    }
  }
}

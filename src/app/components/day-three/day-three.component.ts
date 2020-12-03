import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.css']
})
export class DayThreeComponent implements OnInit {
  MAX_STEPS_RIGHT = 7;

  map: string[][];

  steps = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  generate(input) {
    let array = input.split('\n');

    array = array.map((row: string) => {
      const repeatTimes = Math.ceil(array.length * this.MAX_STEPS_RIGHT / row.length);
      row = row.repeat(repeatTimes);

      return [...row];
    });

    this.map = array;
  }

  go() {
    const results = [];

    // loop through each step and push the amount of encountered trees to the results array
    for (let step of this.steps) {
      let x = 0, y = 0, trees = 0;

      while (y < this.map.length) {
        if (this.map[y][x] === '#') {
          trees++;
        }
  
        x += step.x;
        y += step.y;
      }

      results.push(trees);
    }

    alert(results.reduce((a, b) => a * b)); // reduce function to multiply each value in array.
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-thirteen',
  templateUrl: './day-thirteen.component.html',
  styleUrls: ['./day-thirteen.component.css']
})
export class DayThirteenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  convert(input) {
    const splitted = input.split('\n');

    return [
      parseInt(splitted[0]),
      splitted[1].split(',').filter(i => i !== 'x').map(i => parseInt(i))
    ];
  }

  partOne(input) {
    const [ estimate, busses ] = this.convert(input);

    const busWithTime: { id: number, time: number }[] = [];

    for (let bus of busses) {
      busWithTime.push({ id: bus, time: estimate + (bus - (estimate % bus)) });
    }

    busWithTime.sort((a, b) => a.time - b.time);

    const fastest = busWithTime[0];

    console.log(fastest.id * (fastest.time - estimate));
  }
}

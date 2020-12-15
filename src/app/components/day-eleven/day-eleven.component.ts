import { Component, OnInit } from '@angular/core';
import { Map } from './models/map';
import { Seat } from './models/seat';

@Component({
  selector: 'app-day-eleven',
  templateUrl: './day-eleven.component.html',
  styleUrls: ['./day-eleven.component.css']
})
export class DayElevenComponent implements OnInit {

  map: Map;
  
  constructor() { }

  ngOnInit(): void {
  }

  partOne(input) {
    let previousMap = null;
    this.map = new Map(input);

    while (previousMap === null || previousMap.toString() !== this.map.toString()) {
      previousMap = this.map.clone();

      this.map.simulate();
    }

    console.log(this.map.getTiles().flat().filter(t => (t as Seat).isTaken).length);
  }

  partTwo(input) {
    const t0 = performance.now();

    let previousMap = null;
    this.map = new Map(input);

    while (previousMap === null || previousMap.toString() !== this.map.toString()) {
      previousMap = this.map.clone();

      this.map.simulate();
    }

    console.log(this.map.getTiles().flat().filter(t => (t as Seat).isTaken).length);

    const t1 = performance.now();

    console.log("Execution time: ", (t1 - t0));
  }
}

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

      this.map.print();
    }

    console.log(this.map.tiles.flat().filter(t => (t as Seat).isTaken).length);
  }

  partTwo(input) {
    let previousMap = null;
    this.map = new Map(input);
    
    while (previousMap === null || previousMap.toString() !== this.map.toString()) {
      previousMap = this.map.clone();

      this.map.simulate();

      this.map.print();
    }

    console.log(this.map.tiles.flat().filter(t => (t as Seat).isTaken).length);
  }
}

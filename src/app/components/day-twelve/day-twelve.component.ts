import { Component, OnInit } from '@angular/core';
import { Ship } from './models/ship';

@Component({
  selector: 'app-day-twelve',
  templateUrl: './day-twelve.component.html',
  styleUrls: ['./day-twelve.component.css']
})
export class DayTwelveComponent implements OnInit {

  ship: Ship;

  constructor() { }

  ngOnInit(): void {
  }

  partOne(input: string) {
    this.ship = new Ship();

    const actions = input.split('\n').map(l => [ l.substr(0, 1), l.substr(1) ]);

    for (let action of actions) {
      if (['L', 'R'].includes(action[0])) {
        this.ship.rotate(action[0], parseInt(action[1]));
      } else {
        this.ship.move(action[0], parseInt(action[1]));
      }
    }

    console.log(Math.abs(this.ship.x()) + Math.abs(this.ship.y()));
  }
}

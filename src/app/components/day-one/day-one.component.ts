import { Component, OnInit } from '@angular/core';
import { Day1Service } from 'src/app/services/day-1/day-1.service';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {

  list = [];

  sum = 2020;

  constructor(
    private day1Service : Day1Service
  ) { }

  ngOnInit(): void {
  }

  calculate() {
    if (this.list.length)
      alert(this.day1Service.calculate(this.sum, this.list))
    else
      alert(this.day1Service.calculate(this.sum));
  }

  /**
 * Converts an list of numbers to an array.
 * 
 * @param event 
 */
  convert(event) {
    let lines = event.split(/\n/);

    for (let line of lines) {
      if (line)
        this.list.push(parseInt(line, 0));
    }
  }
}

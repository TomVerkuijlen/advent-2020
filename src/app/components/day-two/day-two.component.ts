import { Component, OnInit } from '@angular/core';
import { Day2Service } from 'src/app/services/day-2/day-2.service';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent implements OnInit {
  list = [];

  constructor(
    private day2Service: Day2Service
  ) { }

  ngOnInit(): void {
  }

  calculate() {
    alert(this.day2Service.calculate(this.list));
  }

    /**
   * Converts an list of strings to an array.
   * 
   * @param event 
   */
  convert(event)
  {
    let lines = event.split(/\n/);

    for (let line of lines)
    {
      if (line)
        this.list.push(line);
    }
  }
}

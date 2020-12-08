import { Component, OnInit } from '@angular/core';
import { Day7Service } from 'src/app/services/day-7/day-7.service';

@Component({
  selector: 'app-day-seven',
  templateUrl: './day-seven.component.html',
  styleUrls: ['./day-seven.component.css']
})
export class DaySevenComponent implements OnInit {
  bags = {};

  constructor(
    private day7Service: Day7Service
  ) { }

  ngOnInit(): void {
  }

  go(input) {
    this.bags = this.day7Service.convertStringInputToBags(input);

    console.log(this.bags);

    alert(this.day7Service.amountOfBags(this.bags, 'shiny gold') - 1);
    // alert(this.calculate(input));
  }

  calculate(input) {
    this.bags = this.day7Service.convertStringInputToBags(input);
    let canHoldbag = 0;

    for (let bag of Object.keys(this.bags)) {
      if (this.day7Service.canHoldBag(this.bags, this.bags[bag])) {
        canHoldbag++;
      }
    }

    return canHoldbag;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Day7Service {

  constructor() { }

  convertStringInputToBags(input) {
    const kvRegex = /(.+) bags contain (.+)\./;
    const ruleRegex = /(\d+) ([a-z]+ [a-z]+) bags?/

    let bagsToReturn = {};

    for (let line of input.split('\n')) {
      const [_full, key, parts] = line.match(kvRegex);
      let bags = parts.split(', ') || [];

      let value = {};

      for (let bag of bags) {
        const match = bag.match(ruleRegex);

        if (match) {
          const [_full, count, color] = match;
          value[color] = count;
        } else {
          value = null;
        };
      }

      bagsToReturn[key] = value;
    }

    return bagsToReturn;
  }

  canHoldBag(bags, value, bag = 'shiny gold') {
    if (!value) return false;

    for (let key of Object.keys(value)) {
      if (key === bag || this.canHoldBag(bags, bags[key], bag)) return true;
    }

    return false;
  }

  amountOfBags(bags, key) {
    if (!bags[key]) return 1;

    return Object.entries(bags[key]).reduce((a, b: any) => a + b[1] * this.amountOfBags(bags, b[0]), 1);
  }
}

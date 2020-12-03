import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Day2Service {
  list = [
    '1-3 a: abcde',
    '1-3 b: cdefg',
    '2-9 c: ccccccccc'
  ]

  constructor() { }

  calculate(list?: string[])
  {
    let counter = 0;

    this.list = list.length ? list : this.list;

    for (let item of this.list)
    {
      if (this.validate(item))
        counter++;
    }

    return counter;
  }

  validate(input: string) {
    var parts = input.split(' ');

    if (parts.length === 3) {
      const positions = parts[0].split('-').map(p => parseInt(p, 0));

      const char = parts[1].substr(0, 1);

      const value = parts[2].split('');

      let valid = 0;
      for (let position of positions) {
        if (value[position - 1] === char)
          valid++;
      }

      return valid === 1;
    }

    return false;
  }

  /**
   * First exercise
   * 
   * @param input 
   */
  validateOld(input: string) {
    var parts = input.split(' ');

    if (parts.length === 3) {
      const occ = parts[0].split('-');
      const minOcc = parseInt(occ[0], 0);
      const maxOcc = parseInt(occ[1], 0);

      const char = parts[1].substr(0, 1);

      const value = parts[2];

      const occurences = value.replace(new RegExp('[^' + char + ']', 'g'), "").length

      if (occurences >= minOcc && occurences <= maxOcc) {
        return true;
      }
    }

    return false;
  }
}

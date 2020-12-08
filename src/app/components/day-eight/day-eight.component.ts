import { Component, OnInit } from '@angular/core';

interface Line {
  action: string,
  value: string,
  visited: boolean
}

@Component({
  selector: 'app-day-eight',
  templateUrl: './day-eight.component.html',
  styleUrls: ['./day-eight.component.css']
})
export class DayEightComponent {

  constructor() { }

  go(input: string) {
    const lines = this.convert(input);

    const { acc, infinite } = this.partTwo(lines);

    console.log(acc);

    return acc;
  }

  convert(input: string) {
    return input.split('\n').map(line => {
      const [action, value] = line.split(' ');

      return { action, value, visited: false }
    });
  }

  partOne(lines: Line[]) {
    return this.loop(lines);
  }

  partTwo(lines: Line[]) {
    for (let line of lines) {
      if (['jmp', 'nop'].includes(line.action)) {
        line.action = this.toggle(line.action);

        const result = this.loop(JSON.parse(JSON.stringify(lines)));

        if (!result.infinite) return result;

        line.action = this.toggle(line.action);
      }
    }

    return { acc: -1, infinite: false };
  }

  toggle(action) {
    return action === 'jmp' ? 'nop' : 'jmp';
  }

  loop(lines: Line[]): { acc: number, infinite: boolean } {
    let iter = { i: 0, acc: 0 };

    while (iter.i < lines.length) {
      const line = lines[iter.i];

      if (line.visited) return { acc: iter.acc, infinite: true }

      line.visited = true;

      if (!this.perform(line, iter)) iter.i++;
    }

    return { acc: iter.acc, infinite: false };
  }

  /**
   * @returns boolean, based on a jump. If false iterate
   */
  perform(line: Line, iter: { i: number, acc: number }): Boolean {
    switch (line.action) {
      case 'acc':
        iter.acc = iter.acc + eval(line.value);
        return false;
      case 'jmp':
        iter.i = iter.i + eval(line.value);
        return true;
      default:
        return false;
    }
  }
}

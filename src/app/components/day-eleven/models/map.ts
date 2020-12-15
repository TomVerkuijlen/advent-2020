import { Floor } from "./floor";
import { Seat } from "./seat";
import { Tile } from "./tile";

export class Map {
    tiles: Tile[][];

    constructor(input: string) {
        this.convert(input);
    }

    simulate() {
        const seatsToChange: Seat[] = [];

        for (let row of this.tiles) {
            for (let tile of row) {
                if (tile.type === 'floor') continue;

                const seat = tile as Seat;
                if (seat.shouldToggle(this)) {
                    seatsToChange.push(seat);
                }                
            }
        }

        seatsToChange.forEach(s => s.toggle());
    }

    sizeX() {
        return this.tiles[0].length;
    }

    sizeY() {
        return this.tiles.length;
    }

    toString() {
        return this.tiles.map(line => line.map(t => t.symbol()).join('')).join('\n');
    }

    print() {
        console.log(this.toString());
    }

    private convert(input: string) {
        this.tiles = input.split('\n').map((line, y) => line.split('').map((t, x) => t === '.' ? new Floor(x, y) : new Seat(x, y, t === '#')));
    }

    clone() {
        return new Map(this.toString());
    }
}
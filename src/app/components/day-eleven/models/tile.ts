import { Map } from "./map";
import { Seat } from "./seat";

export abstract class Tile {
    x: number;
    y: number;
    type = 'tile';

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    abstract symbol();

    adjacentSeats(map: Map): Seat[] {
        return [
            this.seatInLine(map, -1, -1),
            this.seatInLine(map, 0, -1),
            this.seatInLine(map, 1, -1),
            this.seatInLine(map, -1, 0),
            this.seatInLine(map, 1, 0),
            this.seatInLine(map, -1, 1),
            this.seatInLine(map, 0, 1),
            this.seatInLine(map, 1, 1),
        ].filter(i => i);
    }

    // Part 1
    // adjacentSeats(map: Map): Seat[] {
    //     return [
    //         map.get(this.x - 1, this.y - 1) as Seat,
    //         map.get(this.x, this.y - 1) as Seat,
    //         map.get(this.x + 1, this.y - 1) as Seat,

    //         map.get(this.x - 1, this.y) as Seat,
    //         map.get(this.x + 1, this.y) as Seat,

    //         map.get(this.x - 1, this.y + 1) as Seat,
    //         map.get(this.x, this.y + 1) as Seat,
    //         map.get(this.x + 1, this.y + 1) as Seat,

    //     ].filter(i => i);
    // }

    takenSeats(map: Map): Seat[] {
        return this.adjacentSeats(map).filter(s => s.isTaken);
    }

    private seatInLine(map: Map, x: number, y: number): Seat {
        let tile = map.get(this.x + x, this.y + y);

        while (tile) {
            if (tile.type === 'seat') {
                return tile as Seat;
            }

            tile = map.get(tile.x + x, tile.y + y);
        }

        return null;
    }
}
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
    //     const tiles = [];

    //     const top = this.y - 1 >= 0;
    //     const left = this.x - 1 >= 0;
    //     const bottom = this.y + 1 < map.sizeY();
    //     const right = this.x + 1 < map.sizeX();

    //     if (top) {
    //         if (left) tiles.push(map.tiles[this.y - 1][this.x - 1]);
    //         tiles.push(map.tiles[this.y - 1][this.x]);
    //         if (right) tiles.push(map.tiles[this.y - 1][this.x + 1]);
    //     }

    //     if (left) tiles.push(map.tiles[this.y][this.x - 1]);
    //     if (right) tiles.push(map.tiles[this.y][this.x + 1]);

    //     if (bottom) {
    //         if (left) tiles.push(map.tiles[this.y + 1][this.x - 1]);
    //         tiles.push(map.tiles[this.y + 1][this.x]);
    //         if (right) tiles.push(map.tiles[this.y + 1][this.x + 1]);
    //     }

    //     return tiles.filter(t => <Seat>t);
    // }

    takenSeats(map: Map): Seat[] {
        return this.adjacentSeats(map).filter(s => s.isTaken);
    }

    private seatInLine(map: Map, x: number, y: number): Seat {
        let currX = this.x + x;
        let currY = this.y + y;

        while ((currX >= 0 && currX < map.sizeX()) && (currY >= 0 && currY < map.sizeY())) {
            const tile = map.tiles[currY][currX];

            if (tile.type === 'seat') {
                return tile as Seat;
            }

            currX += x;
            currY += y;
        }

        return null;
    }
}
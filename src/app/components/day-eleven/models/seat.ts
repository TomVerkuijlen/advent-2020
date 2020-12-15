import { Map } from "./map";
import { Tile } from "./tile";

const OCCUPIED_SIZE = 5;

export class Seat extends Tile {
    isTaken = false;
    type = 'seat';

    constructor(x: number, y: number, taken: boolean) {
        super(x, y);

        this.isTaken = taken;
    }

    toggle() {
        this.isTaken = !this.isTaken;
    }

    symbol() {
        return this.isTaken ? '#' : 'L';
    }

    shouldToggle(map: Map) {
        const takenSeats = this.takenSeats(map);

        if (!this.isTaken) {
            return !takenSeats.length;
        }
        
        return takenSeats.length >= OCCUPIED_SIZE;
    }
}
import { Tile } from "./tile";

export class Floor extends Tile {
    type = 'floor';
    
    symbol() {
        return '.';
    }
}
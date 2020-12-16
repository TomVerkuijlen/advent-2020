import { Movement } from "./movement";

export class Waypoint extends Movement {
   
    constructor(position) {
        super();

        this.position = position;
    }

    rotate(direction: string, degrees: number) {
        for (let i = 0; i < degrees / 90; i++) {
            this.singleRotate(direction);
        }
    }

    move(direction: string, units: number) {
        this.position[direction] += units;
    }

    private singleRotate(direction: string) {
        this.position = direction === 'R' 
            ? { N: this.position.W, E: this.position.N, S: this.position.E, W: this.position.S }
            : { N: this.position.E, E: this.position.S, S: this.position.W, W: this.position.N }
    }
}
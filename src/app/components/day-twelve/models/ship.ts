import { Movement } from "./movement";
import { Waypoint } from "./waypoint";

export class Ship extends Movement {
    waypoint: Waypoint;

    constructor() {
        super();

        this.waypoint = new Waypoint({ N: 1, S: 0, E: 10, W: 0 });
    }

    rotation = 0;

    move(direction: string, units: number) {
        if (direction !== 'F') {
            return this.waypoint.move(direction, units);
        }

        this.position.N += this.waypoint.position.N * units;
        this.position.E += this.waypoint.position.E * units;
        this.position.S += this.waypoint.position.S * units;
        this.position.W += this.waypoint.position.W * units;
    }

    rotate(direction: string, degrees: number) {
        this.waypoint.rotate(direction, degrees);
    }

    // first part
    // move(direction: string, units: number) {
    //     direction = direction === 'F' ? this.direction() : direction;

    //     this.position[direction] += units;
    // }

    // first part
    // rotate(direction: string, degrees: number) {
    //     this.rotation = direction === 'L' ? this.rotation - degrees : this.rotation + degrees;

    //     if (this.rotation >= 360) this.rotation -= 360;
    //     else if (this.rotation < 0) this.rotation = 360 - Math.abs(this.rotation); ;
    // }

    direction() {
        switch (this.rotation) {
            case 0: return 'E';
            case 90: return 'S';
            case 180: return 'W';
            case 270: return 'N';
        }
    }
}
export abstract class Movement {
    position = {
        N: 0,
        S: 0,
        E: 0,
        W: 0
    };

    abstract rotate(direction: string, degrees: number);
    abstract move(direction: string, units: number);

    x() {
        return Math.abs(this.position.N - this.position.S);
    }

    y() {
        return Math.abs(this.position.E - this.position.W);
    }
}
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ship } from './ship';

describe('Ship', () => {
    let ship: Ship;

    beforeEach(() => {
        ship = new Ship();
    });

    it('should rotate', () => {
        ship.rotate('R', 180);

        expect(ship.rotation).toBe(180);

        ship.rotate('R', 90);

        expect(ship.rotation).toBe(270);

        ship.rotate('L', 270);

        expect(ship.rotation).toBe(0);
        
        ship.rotate('L', 90);

        expect(ship.rotation).toBe(270);
    });
});

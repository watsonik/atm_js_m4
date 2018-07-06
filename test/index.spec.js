'use strict';

let calculator = require('../index');

describe('calculator', () => {
    let instance;

    beforeAll(() => {
        instance = new calculator();
    });

    it('should allow to call add() for instance of calculator', () => {
        expect(instance.add).toBeDefined();
        expect(typeof instance.add).toBe('function');
    });

    it('check add() with various parameters', () => {
        expect(instance.add(2, 3)).toBe(5);
        expect(instance.add(0, 3)).toBe(3);
        expect(instance.add(2, -3)).toBe(-1);
        expect(instance.add(-5, -2)).toBe(-7);
    });

    it('should allow to call multiply() for instance of calculator', () => {
        expect(instance.multiply).toBeDefined();
        expect(typeof instance.multiply).toBe('function');
    });

    it('check multiply() with various parameters', () => {
        expect(instance.multiply(2, 3)).toBe(6);
        expect(instance.multiply(0, 3)).toBe(0);
        expect(instance.multiply(2, 0)).toBe(0);
        expect(instance.multiply(2, -3)).toBe(-6);
    });
});
import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames function', () => {
    test('should return a string', () => {
        expect(typeof classNames('test')).toBe('string');
    });

    test('should return the correct class string when only the cls parameter is provided', () => {
        expect(classNames('test')).toBe('test');
    });

    test('should filter out falsy additional classes', () => {
        const additional = ['extra', '', null, 'class', undefined, 'name'];
        expect(classNames('test', {}, additional)).toBe('test extra class name');
    });

    test('should add mods classes when the boolean value is true', () => {
        const mods = {
            mod1: true,
            mod2: false,
            mod3: 'string',
            mod4: '',
        };
        expect(classNames('test', mods)).toBe('test mod1 mod3');
    });

    test('should handle combination of all parameters correctly', () => {
        const mods = {
            mod1: true,
            mod2: false,
        };
        const additional = ['extra', '', 'class'];
        expect(classNames('test', mods, additional)).toBe('test extra class mod1');
    });

    test('should handle empty string as cls parameter', () => {
        const mods = {
            mod1: true,
            mod2: false,
        };
        const additional = ['extra', '', 'class'];
        expect(classNames('', mods, additional)).toBe('extra class mod1');
    });
});

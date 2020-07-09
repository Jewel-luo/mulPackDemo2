import { textSpanContainsPosition } from "typescript";

import { sum } from '../mytest';

test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);  
});
test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);  
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    // expect(n).toBeUndefined();
    expect(n).toBeDefined();
    // expect(n).toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    // expect(z).toBeUndefined();
    expect(z).not.toBeTruthy();
    // expect(z).toBeFalsy();
});

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('there is not I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

test('the shopping list has beer on it', () => {
    const shoppingList = ['diapers','kleenex','paper towel','trash bags', 'beer'];
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

function compileAndroidCode() {
    throw Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
    
});

//异步函数测试
test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch(e) {
            done(e);
        }
    }
    new Promise((resolve, reject) => {
        resolve('peanut butter')
    }).then(callback);
});
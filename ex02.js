const arr = [3, 5, 8];
const plus_one = arr.map(n => n + 1);

const double = arr => arr.map(val => val * 2);

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const { a, b } = obj.numbers;

const add = (a, b) => {
    a = a === 0 ? 0 : a || 10;
    b = b === 0 ? 0 : b || 10;
    return a + b;
};

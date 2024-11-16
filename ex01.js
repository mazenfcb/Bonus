let v1
let v2
[v1, v2] = [v2, v1]

const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];
const combined = numbers.concat(letters,foods);

const x = "hello";
const Xarray = [...x];

function fn(a, b, ...args) {
    //...
}
//a
// a = 1
// b = 2
// args = [3, 'A', 'B', 'C']

//b
// a = 1
// b = 2
// args = []

//c
// a = 'a'
// b = 'b'
// args = ['c', 'd']







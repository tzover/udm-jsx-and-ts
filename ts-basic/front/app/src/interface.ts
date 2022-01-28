interface Human {
    name: string | number;
    age: number;
    greeting(msg: string): void;
}

const human: Human = {
    name: 397,
    age: 23,
    greeting: (msg: string): void => console.log('aaa'),
};

class Developer implements Human {
    constructor(public name: string, public age: number) {}
    greeting = (msg: string) => console.log(msg);
}

// type addFunc = (num1: number, num2: number) => number;
// let addFunc: addFunc;
// addFunc = (n1: number, n2: number) => {
//     return n1 + n2;
// };

interface addFunc {
    (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
};

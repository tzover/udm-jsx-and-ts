// "experimentalDecorators": true を有効にする
// classに対してデコレーションできる？

// function Logging(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

function Logging(msg: string) {
    return function Logging(constructor: Function) {
        console.log(msg);
        console.log(constructor);
    };
}

// @Logging
@Logging('Logging user')
class User {
    name = 'Will';
    constructor() {
        console.log(`User name is ${this.name}`);
    }
}

const user1 = new User();
const user2 = new User();
const user3 = new User();

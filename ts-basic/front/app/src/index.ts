// 型注釈と型推論　:number 型注釈（アノテーション）　付けないと自動的に推論が走る

let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = `hello`;

let hello; //any型になる　→　初期化しない時はアノテーションを付ける方が良い

const person: {
    name: string;
    age: number;
} = {
    name: 'jack',
    age: 21,
};

console.log(person.name);

const person1: object = {
    name: 'jack',
    age: 21,
};
// console.log(person1.name);   // errorになる

// 配列
const fruits: string[] = ['Apple', 'Banana', 'Grape'];

console.log(fruits);

// tuple型
const book1: [string, number, boolean] = ['Business', 1500, true];
// const book2: [string, number, boolean] = ['Business', true, 1500];  // Error

// book1[1] = 'hello'; // Error
book1.push(21);
// console.log(book1[3]);  // pushは出来るが呼び出しは失敗する

// Enum型　（列挙型）　→　オブジェクト化される

// const CoffeeSize = {
//     SHORT: 'SHORT',
//     TALL: 'TALL',
//     GRANDE: 'GRANDE',
// };

enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
}

enum CoffeeSize1 { // idxが割り当てられる
    SHORT,
    TALL,
    GRANDE,
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
// coffee.size = 'hello'; //Error
// coffee.size = 'GRANDE'; //Error
coffee.size = CoffeeSize.GRANDE;

// Any型（なんでも入る）
let anything: any = true;
anything = 'hello';
anything = 1;
anything = ['hello', 12, true];
anything = {};
anything.aaa = 'aaa';
let something: string = 'Good';
something = anything; // やりたい放題 (anyはなるべく使わないように努力)

// Union型(複数の型を扱いたい時)
let unionType: boolean | number = 10;
unionType = true;
// unionType = null;
// unionType = 'aaa'; // Error

// リテラル型（その値しか扱えなくなる）
// const apple1: 'apple' = 'hello'; //Error
const apple2: 'apple' = 'apple';

// リテラル+Union型　（Enumのようなオブジェクトではない）

let clothSize: 'small' | 'medium' | 'large' = 'large';

const cloth: {
    color: string;
    size: 'small' | 'medium' | 'large';
} = {
    color: 'white',
    // size: clothSize.small  //Error
    // size: clothSize  // largeに限られる
    size: 'medium',
};

// alias

type clothSize2 = 'small' | 'medium' | 'large';
const cloth2: {
    color: string;
    size: clothSize2;
} = {
    color: 'white',
    size: 'medium',
};

// function

const add = (Num1: number, Num2: number): number => Num1 + Num2;

const anotherAdd1 = add;
const anotherAdd2: (n1: number, n2: number) => number = add; //ややこしい

const sayHello = (): void => console.log('sss'); // 戻り値がない時はvoid型を当てる

console.log(sayHello()); // undefined

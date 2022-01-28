// // Jenerics = 型を引数として受け取る

// const copy = <T>(value: T): T => {
//     return value;
// };

// console.log(copy<string>('hello').toUpperCase());

// // class * Jenerics

// class LightDatabase<T extends string | number | boolean> {
//     private data: T[] = [];
//     add(item: T) {
//         this.data.push(item);
//     }
//     remove(item: T) {
//         this.data.splice(this.data.indexOf(item), 1);
//     }

//     get() {
//         return this.data;
//     }
// }

// const stringLightDatabase = new LightDatabase();
// stringLightDatabase.add('apple');
// stringLightDatabase.add('banana');
// stringLightDatabase.add('grape');
// stringLightDatabase.remove('banana');
// // console.log(stringLightDatabase.data);  // Error
// console.log(stringLightDatabase.get());

// // interface * Jenerics

// interface TmpDatabase<T> {
//     id: number;
//     data: T[];
// }
// const tmpDatabase: TmpDatabase<number> = {
//     id: 3,
//     data: [32],
// };

// // Utillity ライブラリ

// interface Todo {
//     title: string;
//     text: string;
// }

// type Todoable = Partial<Todo>;
// type ReadTodo = Readonly<Todo>;

// const fetchData: Promise<string> = new Promise((resolve) => {
//     setTimeout(() => {
//         'hello';
//     }, 3000);
// });

// fetchData.then((data) => {
//     data.toUpperCase();
// });

// const vegetables: Array<string> = ['tomato', 'Broccoli', 'Asparagus'];

// // interface ResponseData<T = string> {
// interface ResponseData<T extends { msg: string } = any> {
//     data: T;
//     status: number;
// }
// let temp2: ResponseData;

// // MappedTypes これ便利？？

// interface Vegetables {
//     tomato: string;
//     pumpkin: string;
// }

// // type MappedTypes = {
// //     [P in 'tomato' | 'pumpkin']: P;
// // };

// let tmp3: keyof Vegetables;

// type MappedTypes = {
//     [P in keyof Vegetables]: string;
// };

// // conditional Types

// type ConditionalTypes = 'tomato' extends string ? number : boolean;

// // infer は型推論してくれる
// type ConditionalTypesInfer = { tomato: 'tomato' } extends { tomato: infer R }
//     ? R
//     : boolean;

// // distributiveConditionalTypes はUnionの判定時に使える？
// type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
// let tmp4: DistributiveConditionalTypes<'tomato' | 'pumpkin'>;

// let tmp5: NonNullable<string | null>;

// type Engineer = {
//     name: string;
//     role: string;
// };

// type Blogger = {
//     name: string;
//     follower: number;
// };

// type EngineerBlogger = Engineer & Blogger;

interface Engineer {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

interface EngineerBlogger extends Engineer, Blogger {}

const quill2: EngineerBlogger = {
    name: 'quill',
    role: 'front-end',
    follower: 23,
};

const toUpperCase = (x: string | number) => {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return;
};

// interface NomadWorker extends Engineer, Blogger {}
type NomadWorker = Engineer | Blogger;

const descriveProfile = (nomadWorker: NomadWorker) => {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
};

class Dog {
    speak() {
        console.log('bow-wow');
    }
}

class Bird {
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
const havePet = (pet: Pet) => {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
};

havePet(new Bird());

// 型アサーション　強制的に何かを教えてあげる

const input1 = <HTMLInputElement>document.getElementById('input');
const input2 = document.getElementById('input') as HTMLInputElement; // jsx推奨

input1.value = 'initial input value';

(document.getElementById('input') as HTMLInputElement).value =
    'initial input value';

// Non null アサーション  !を付けるとnull型が消える
const input3 = document.getElementById('input')!;

interface TempFunc {
    (x: string): number;
    (x: number): number;
}

const upperHello: TempFunc = (x: string | number) => {
    return 0;
};

const peter = {
    name: 'Peter',
    age: 38,
} as const;

// type PeterType = peter;    // Error
type PeterType = typeof peter;

class Person {
    static isAdult(age: number) {
        if (age > 18) return true;
        return;
    }
    constructor(public name: string, protected age: number) {}

    incrementAge(this: Person) {
        this.age++;
    }

    greeting(this: Person) {
        console.log(`Hello ${this.name}`);
    }
}

const quill = new Person('quill', 26);
console.log(quill);
quill.greeting();
quill.incrementAge();
quill.name = 'aaa';
// quill.age = 12;

let Person2: Person;

const anotherQuill = {
    name: 'anotherQuill',
    age: 38,
    incrementAge: quill.incrementAge,
    greeting: quill.greeting,
};

anotherQuill.age = 34;

// anotherQuill.greeting();

class Teacher extends Person {
    get subject() {
        if (!this._subject) {
            throw new Error('there is no subject');
        }
        return this._subject;
    }

    set subject(value) {
        this._subject = value;
    }
    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }
    greeting() {
        console.log(
            `Hello ${this.name} I'm ${this.age} ,I like ${this.subject}`
        );
    }
}

const teacher = new Teacher('tojima', 27, 'English');
teacher.greeting();

teacher.subject = 'baseball';

console.log(Person.isAdult(38)); //new しなくても使える

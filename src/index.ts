class Human {
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const miku = new Human("miku", 27, "female")

const sayHi = (person: Human): string  => {
    return `Hello ${person.name}, you are ${person.age} years old, you are a ${person.gender}!`;
};

console.log(sayHi(miku));

export {};

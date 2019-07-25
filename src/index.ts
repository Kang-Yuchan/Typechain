interface Human {
    name: string,
    age: number,
    gender: string;
}

const person = {
    name: "miku",
    age: 27,
    gender: "female"
};

const sayHi = (person: Human): string  => {
    return `Hello ${person.name}, you are ${person.age} years old, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};

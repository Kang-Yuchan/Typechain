const name = "Yuchan",
    age = 23,
    gender="male";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age} years old, you are a ${gender}`);
};

sayHi(name, age);

export {};

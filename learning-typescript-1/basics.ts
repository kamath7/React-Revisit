let age: number = 24; //now you can't declar number ='24'

let userName: string;

userName = "Kams";

let isPriv: boolean;
isPriv = true;

let hobbies: null; //don't really do this

let food: string[];
food = ["Paneer ", " Naan"];

let foo: any; //hehe why don't i use js instead

foo = {
  a: "good",
  b: 1,
};

let bar: { a: string; b: boolean };
bar = {
  a: "toni kroos",
  b: true,
};

let something: {
  name: string;
  b: boolean;
}[];

//type inference

let someFood = "Panner and Naan";
// course = 1 //cant do this. since typescript understands it is a string.

//union inference- to allow more than one type

let someMovie: string | number = "The Usual Suspects";
someMovie = 100;

//Type alias
type Food = {
  name: string;
  b: boolean;
};

let myFood: Food[];

//functions

//no need to explicitly mention return type. typescript infers it
function multi(a: number, b: number): number {
  return a + b;
}
//return type void below
function saySomething(vtext: any) {
  console.log(vtext);
}

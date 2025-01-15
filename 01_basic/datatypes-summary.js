// # primitives Datatypes 

// 7 types :-  String , Number ,Boolean , Null , undefined , Symbol, Bigint. 


const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =123456789788945n


// Reference type ( Non- primitives)

// Arrays, objects, Functions

const heros = ["IronMan", "Captian"]; // these is the example of arrays

let myObj={
    name: "sidd",
    age : 20,
} // these is the example of objects

 const myFunction =function(){
    console.log("Hello World");

}// these the Example of Functions

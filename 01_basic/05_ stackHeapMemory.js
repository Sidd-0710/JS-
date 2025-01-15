//Memory is of two types 1) Stack 2) Heap

// Stack is use in Primitive Datatypes
// Heap is used in Non-primitive Datatypes

// Example for stack 

let myName = "Sidd"

let myId = myName
myId = "Vilas"

console.log(myName);
console.log(myId);

// Example for Heap

let user1= {
    email:"user@gmail.com",
    upi :"user@ybl",
}

let user2 = user1

user2.email = "Sidd@ylm"

console.log(user1.email);
console.log(user2.email);


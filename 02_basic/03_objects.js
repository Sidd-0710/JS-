
// objects literals

const mySym = Symbol("key1")


const jsUser ={
     name : "sidd", 
     "full name" :"sidd chirkute",
     [mySym] : "myKey1",
     age:20,
     location: "pen",
     email:"sidd@mail",
     isloggedIn: false,
     
}

console.log(jsUser.email); //not best ways 

console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
console.log(  jsUser [mySym]);

 jsUser.email ="Sidd@hi"
 Object.freeze(jsUser)
 jsUser.name ="siid"
 jsUser.email ="sidd"

 console.log(jsUser.name);
 console.log(jsUser.email);
 



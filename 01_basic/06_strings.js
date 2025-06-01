// const name= "sidd"
// const repocount= 5

// // console.log(name + repocount + " Value ");  old ways to write a string



// console.log(` Hello My name is ${name} and my repo Count is ${repocount} `); //New Way to write string in js




// const name = "sidd"
// const repoCount = 5

// // console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sidd    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));



let name = "Harry"
// console.log(name.length)
console.log(name[0])
console.log(name[1])
let friend = 'Prakash'
console.log(friend)
// let myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

// Escape Sequence Characters
// let fruit = 'Bana\'na'
// console.log(fruit)
let fruit = "Bana\"na"
console.log(fruit)

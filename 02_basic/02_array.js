// const marvel_heros =["Thor"," SpiderMan", "IronMAn"]

// const dc_heros = [" Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
 

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[4]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const allNewHeros = [ ...marvel_heros,...dc_heros]

// console.log(allNewHeros);


// const anotherArray =[1,2,3,[4,5,6],[7,8,[1,2],9]]

// const  useableAnotherArray = anotherArray.flat(Infinity)

// console.log(useableAnotherArray);

// console.log(Array.isArray("Sidd"))
// console.log(Array.from("Sidd"))


// let p =100;
// let q= 200;
// let e =300;

// console.log(Array.of(p,q,e)); 



let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)




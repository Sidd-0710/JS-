const marvel_heros =["Thor"," SpiderMan", "IronMAn"]

const dc_heros = [" Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros)
 

console.log(marvel_heros);
console.log(marvel_heros[3]);
console.log(marvel_heros[4]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const allNewHeros = [ ...marvel_heros,...dc_heros]

console.log(allNewHeros);


const anotherArray =[1,2,3,[4,5,6],[7,8,[1,2],9]]

const  useableAnotherArray = anotherArray.flat(Infinity)

console.log(useableAnotherArray);

console.log(Array.isArray("Sidd"))
console.log(Array.from("Sidd"))


let p =100;
let q= 200;
let e =300;

console.log(Array.of(p,q,e)); 



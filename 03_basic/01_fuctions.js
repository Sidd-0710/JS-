 
function sayMyname(){
    console.log("s");
    console.log("i");
    console.log("d");
    console.log("d");
    
}

//  

function addTwoNumbers(number1, number2 ){

   let result = number1 + number2
    return result 

return number1 + number2
       
} 

 const result = addTwoNumbers(90,10)

//  console.log("Result : ",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Plzz Enter a Username");
        return 
      
    }

    return `${username} just Logged in`

}
  
// console.log(loginUserMessage("sidd"));
// console.log(loginUserMessage("sidd"));

function  CartPrice(...num1){
    return num1
}

// console.log(CartPrice(200, 4000,800 ,500));

const user = {
    username : "sidd",
    prices : 199
}
 
function handleObject(anyobject){
 
    console.log(`username is = ${anyobject.username} and price is = ${anyobject.price}`);

    
}

// handleObject(user)
handleObject({
    username : "baaa",
    price : 700,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
// const user ={
//     username : "Sidd",
//     price :133,

//         welcomeMessage : function(){
//             console.log(`${this.username}, welcome to website `);
//             console.log(this);
            
//     }
    
// }

// user.welcomeMessage()
// user.username = "sam"
// user.price =899
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username ="sidd"
//     console.log(this.username);
    
// }

// one()


// const chai = function(){
//     let username ="sidd"
//         console.log(this.username);
// }

// const chai = () => {
//         let username ="sidd"
//             console.log(this);
//     }
// chai()

 
//   const addtwo = (num1 , num2) => {
//     return num1 + num2
//   }

//if u take {} then return has to be written 
// if u use ()then no need of return 

//   const addtwo = (num1 , num2) =>   num1 + num2  //implicit return works same as upper format

// const addtwo = (num1 , num2) =>  () num1 + num2 ) //implicit return works same as upper format
/// works as same 

const addtwo = (num1 , num2) =>   ({ username :"sidd"}) // if u have to return an object 
   
  console.log( addtwo(3,9));
  
   
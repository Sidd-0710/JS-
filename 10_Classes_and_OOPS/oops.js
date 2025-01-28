// object literal

const user = {
    username: "sidd",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);
// constructor Function
// const promise1 = new Promise()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // it will not effect the code it is there by default 
}

const userOne = new User("Sidd", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);
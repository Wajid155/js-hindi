const user = {
    username: "Wajid",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// uer.welcomeMessage()

// console.log(this);

// const chai = function () {
//     let username = "wajid"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "Wajid"
    
    // console.log(this.username);
    
}


const addTwo = (num1 , num2) => {
    return num1+num2
}

// const addTwo = (num1 , num2) => num1 + num2

console.log(addTwo(5,4));


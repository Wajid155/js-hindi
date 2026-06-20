const isLoggedIn = true
const tempreture = 41

// if( tempreture < 50) {
//     console.log("Tempreture less than 50");  
// } else {
//     console.log("tempreture greater than 50");
    
// }

// console.log("Executed");

// const score = 200

// if ( score > 100 ) {
//     let power = "Fly"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`); error in this line 

// const balance = 1000 

// if ( balance < 500 ) {
//     console.log("less than 500");
    
// } else if ( balance < 750) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCart = true
const loggedInFromGoogle = true
const loggedInFromGmail = false

if ( userLoggedIn && debitCart ) {
    console.log("Alllow to buy a couse ");
    
}

if ( loggedInFromGoogle || loggedInFromGmail ) {
    console.log("User logged in ");
    
}
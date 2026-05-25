// object literals 

const mySym = Symbol("Key1")

const JsUser = {
    name: "Wajid",
    "full name": "Wajid Hussain",
    [mySym]: "myKey1",
    age: 18,
    location: "Siwan",
    email: "wajid@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// cahnging the values

JsUser.email = "wajid@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "wajid@microsoft.com"
// console.log(JsUser.email);

JsUser.greeting = function() {
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






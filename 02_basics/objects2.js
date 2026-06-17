const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@example.com",
    fullname: {
        userfullname: {
            firstname: "Wajid",
            lastname: "Hussain"
        }
    }
}

// console.log(regularUser.fullname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty(`isLogged`));

// object destructring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//json format in js

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
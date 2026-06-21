// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);  
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char in ${greet}`);
    
}


// Map in javaSCript

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
    // console.log(key ,` :- `, value );
    
}



const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    //    console.log(`${key} are the shorcut for ${myObject[key]}`);
       
}


const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(key);
    
}

const map1 = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map1) {
    console.log(key);
    
}
const name = "wajid"
const repoCount = 50

// console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`WajidHussain`)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`H`));

// slicing of string

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,7 )
console.log(anotherString)

const newStringOne = "    wajid    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://wajid.com/wajid%20hussain"

console.log(url.replace(`%20`, `-`));

const sent = "The moon of the sky"

console.log(sent.split(" "));
console.log(sent.split(""));
















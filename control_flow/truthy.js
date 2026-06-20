const userEmail = [] 

if ( userEmail ) {
    console.log("Got user Email");
    
} else {
    console.log("Don't have user email");
    
}

// falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

// checking array is empty or not

if ( userEmail.length === 0 ) {
    console.log("Array is empty");
    
}

// for the object

const emptyObj = {} 

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coaleshing Operator (??)

let val1;

// val1 = null ?? 10
// val1 = undefined ?? 10





console.log(val1);

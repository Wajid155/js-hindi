// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DBB CONNECTED`);
    
})();

(() =>  {
    console.log(`DBB CONNECTED TWO`);
    
})();

// arguments in iife

((name) =>  {
    console.log(`DBB CONNECTED TWO ${name}`);
    
})("Wajid")
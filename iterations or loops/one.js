// for loop

for(let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);  

}

for ( let i = 0; i <= 10; i++) {

    for (let j = 0; j <= 10; j++) {
    //    console.log(`Inner loop value ${j} and outer loop ${i}`);
      
    // console.log(i + `*` + j + ` = ` + i*j);
    
        
    }
}

let myArray = ["flash", "batman", "superman"]

for (let index= 0; index< myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}



for (let index = 1; index < 20; index++) {
    if(index == 5) {
        console.log("5 is detected");
        continue;
        
    }
    console.log(index);
    
}

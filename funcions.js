
let rootArray = [2,1,3,2,7,2,8,4,3,6,10,9,12]; 
let repitedArray = new Array(...rootArray);     // copy the array 
let greaterThan5 = []; //   array for return of lorger than number 5 
let max = Math.max(...rootArray) // the max number 
console.log(max);

let min = Math.min(...rootArray)//  the min number 
console.log(min);


greaterThan5= rootArray.filter((item)=>{return item>5})      // use filtering for filter the number greater than 5
console.log(greaterThan5);

let ascendingArray= new Array (...rootArray);    
let decendingArray= new Array (...rootArray);
ascendingArray.sort((a,b)=>{return a-b});
decendingArray.sort((a,b)=>{return b-a});               /// sortig 

console.log(ascendingArray);
console.log(decendingArray);



let uniqeArray = function filtering(repitedArray){
    let filterdArray= [] ;      // the return value before removing duplicates
    for(index in repitedArray){       // loop on all elements                                       
        for(compared in repitedArray){    // to compare with another elements
         if (index != compared && repitedArray[index]== repitedArray[compared])   // check  the repited elemnt
      repitedArray.splice( compared,1);          // romove the repited elment 
    }
    }
    return repitedArray;
}

console.log(uniqeArray(repitedArray));


//Write a JavaScript function to get the last element of an array. 
//Passing the parameter 'n' will return the last 'n' elements of the array.
//For Example, function name 
//lstArrayElement([1,2,3,4]); returns 4
//lstArrayElement(['a','b','c','d','e']); returns e
//lstArrayElement(['one','two','three','four','five']); returns five

function lstArrayElement(arr, n=1){         //create function to get the last element of an arry 
if(n === 1){                                //condition applied 
    return arr[arr.length-1];               //retrun arrays length through method 
}else{
    return arr.slice(-n);
}
}

console.log(lstArrayElement([1,2,3,4]));                                //call the function for the last element of an array
console.log(lstArrayElement(['a','b','c','d','e']));
console.log(lstArrayElement(['one','two','three','four','five']));







//Write a javascript function that concatenates all string elements of an array
function concatStringElements(arr) {                                            //create javascript function co cancat string element 
    return arr.filter(item => typeof item === 'string').join('');               //create method to concat the arrays 

}

console.log(concatStringElements(['one','two','3','4']));                       //call the function 
console.log(concatStringElements(['a','b','c','d','e']));
console.log(concatStringElements(['one','two','three','four','five']));

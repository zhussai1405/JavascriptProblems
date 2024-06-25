//Problem 
//Write a javascript function that RETURNS the temperature converted value - give the function and the parameters an appropriate name
//the function definition will take 2 parameters, the first parameter will be a number, 
//the 2nd parameter will be the type of temperature which can only be C - celsius and F - Fahrenheit
//For example if I have a function call with the following parameters -  tempConvert(32, F) will return 0, i want to know what the temp is in celsius
//You will need to look up the formula of temperature conversion
//Look up celsius to fahrenheith chart conversion scale


//write function definition with 2 paramters
function tempConvert(temp , type){                      //Create a function that return the two parameters 
    if(type === 'F'){                                   //condition to check the type of temp, 1st we take fahreheight
        // Convert Celsius to Fahrenheit
        return (temp - 32) * 5/9                       //Method applied to convert temp celsius to fahrenheit

    }else if (type === 'C') {                           //condition to check the type of temp, 2nd we take celsius 
        // Convert Fahrenheit to Celsius
        return (temp * 9/5) + 32;                     //Method applied to convert temp fahreheight into the celsius 


    }else {
        //Invalid type
        return('Invalid type');
    }

}

//write steps for your logic for the conversion
//function define tempreature convert with two parameters value 32, and type is F/C.
//function check the value of type celsius or fahrenhight
//if the type is in fahrenhigh than we using the formula F= (C*9/5)+32
//if the type is in celsius than we using the formula C = (F-32)*5/9


//return function value




//This should return a 0 value
console.log("The temperature converted from Fahrenheit to Celsius is: " + tempConvert(32, 'F'));


//This should return a 32 degrees value
console.log("The temperature converted from Celsius to Fahrenheit is: " + tempConvert(0, 'C'));

//console.log("The temperature converted from Celsius to Fahrenheit is: " + tempConvert(42, C));


//console.log("What is 100 degrees celsisus in fahrenheit: " + tempConvert(100, C));

//console.log("What is 212 degrees fahrenheit in celsius: " + tempConvert(212, F));
 
//Practice questions for Objects


// Create an object called 'person' with properties: name, age, and city
// Access and log each property to the console
let person = {
    name : "Faraz",
    age : 39,
    city : "Rawalpindi",
}
console.log(person);



// Add a new property 'job' to the 'person' object
// Modify the 'age' property to be 2 years older
// Log the updated object to the console

let person_ = {
    name : "Faraz",
    age : 39,
    city : "Rawalpindi",
};
person_.job = "Manager";
person_.age +=2;
console.log(person_);


// Create an object using computed property names
// Use a variable 'key' set to "favoriteColor"
// Set the value of this computed property to "blue"

let key = "favouriteColor";
let value = "blue";

let obj = {
    [key]:value
};

console.log(obj);
console.log(obj.favouriteColor);


// Create variables 'name' and 'age' with values
// Use property value shorthand to create an object 'user' with these properties
// Log each property name and value to the console

let name_ = "Faraz";
let age_ = 39;
// Use property value shorthand to create an object 'user' with these properties
let user = { name_ , age_};

console.log('user:', user.name_);
console.log('age:', user.age_);



// Check if the 'person' object has a property 'gender'
// Use both the 'in' operator and comparing with undefined
// Log the results to the console
let person1 = {
    name : "Faraz",
    age: 39,
};
let genderIn = 'gender' in person1;                 //using the in operator, no property of gender in person
console.log('using in operator:' ,genderIn);

let genderUndefined = person1.gender !==undefined;      //comparing with undefined 
console.log('comparing with undefined:' , genderUndefined);




// Use a for...in loop to iterate over all properties of the 'person' object
// Log each property name and value to the console

let person2 = {
    name : "faraz",
    age  : 39,
    city : 'Rawalpindi',
    job : 'abc',
};
for(let property in person2){
    console.log(person2[property]);
}




// Add a method 'greet' to the 'person' object that logs a greeting message
// Call the 'greet' method

let person3 = {
    name  : "Faraz",
    age : 39,
    city : "Rawalpindi",
greet:function(){
    console.log('Hello!');
}
};
person3.greet();




// Create a shallow copy of the 'person' object using Object.assign()
// Modify a property in the copy and log both objects to see the difference
let person4 = {
    name : "Faraz",
    age : 39,
    city : 'Rawalpindi',
};
let person4Copy = Object.assign({},person4);               //Create a shallow copy to Object.assing
person4Copy.name = "Faraz Hassan";
person4Copy.age =+1;

console.log("Orignal person Object:", person4);
console.log("shallow copy object : " , person4.Copy);






// Create an object 'company' with nested objects for 'department' and 'employee'
// Access and log a nested property
let company = {
    name : "ABC",
    department:{
    name : "Admin",
    employee :{
    name : "Faraz",
    age: 39,
    position: "xyz",
}
}
};
console.log(company.department.employee.name);






// Use object destructuring to extract 'name' and 'age' from the 'person' object
// Log the extracted values
let person5= {
    name: 'Ahmed Hassan',
    age : 6,
};
let {name, age} = person5;
console.log(`Name: , ${name}`);
console.log(`Age: , ${age}`);

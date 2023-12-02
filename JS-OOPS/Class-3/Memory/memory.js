// primitive and non-primitive data types

// let person1 = "Adam";
// let person2 = "steve";

// person2 = person1;
// person2 = "uttam";

// console.log(person1);
// console.log(person2);

let person1 = {
  name: "Adam",
  age: 25,
  address: {
    city: "London",
    pincode: "123456",
  },
  getFullInfo: function () {
    console.log(this.name);
  },
};

let person2 = {
  name: "Steve",
  age: 25,
};

// reference address but need copy
// person2 = person1;
// person2.age = 40;

// console.log(person2);
// console.log(person1);

// shallow & deep copy

// shallow
// reference data type to primitive
// person2 = { ...person1 };
// person2.name = "uttam";
// person2.address.city = "Hyderabad";
// console.log(person1);
// console.log(person2);

// console.log(JSON.stringify(person1));
// console.log(typeof JSON.stringify(person1));

// deep copy -> i have figure out a way to pass object by value instead
// of reference
// obj -> string (primitive value) -> variable -> any changes
console.log(JSON.stringify(person1));
person2 = JSON.parse(JSON.stringify(person1));
// person2.name = "uttam";
// person2.address.city = "Hyderabad";
// console.log(person1);
console.log(person2);

/*
Shallow Copy: A shallow copy creates a new object or array, 
but the contents within it remain references to the original data. 
It copies the top-level structure without recursively copying nested 
objects or arrays.

Deep Copy: A deep copy creates a completely independent copy of 
an object or array, 
including all nested objects or arrays. 
It ensures that changes made to the copied 
structure do not affect the original.
*/

// HOF -> function that accept or return function
//  map, reduce, filter

// call, bind, apply
// to change the context of this keyword
function getEmail(obj) {
  // this was pointing window
  console.log(this);
  console.log(`${this.firstName}.${this.lastName}@gmail.com`);
}

function getFullInfo(city, school, modeOfTravel) {
  console.log(this);
  console.log(`${this.firstName}.${this.lastName}`);
  console.log(
    "school name: " +
      school +
      ", mode of travel:  " +
      modeOfTravel +
      ", city: " +
      city
  );
}

const arr = ["Hyderabad", "Delhi Public School", "School Bus"];

const student = {
  firstName: "Harish",
  lastName: "Kumar",
  age: 23,
  getEmail: function () {
    // this is pointing student obj
    console.log(`${this.firstName}.${this.lastName}@gmail.com`);
  },
};

const Teacher = {
  firstName: "Anushuman",
  lastName: "Singh",
  age: 40,
};

// call
// getEmail.call(student);
// student.getEmail.call(Teacher);
// getFullInfo.call(student, ...arr);

//getEmail.apply(student);
//getFullInfo.apply(Teacher, arr);

// example how bind can be used with dynamic context and properties
// function PeopleInfo(context, arrayParam) {
//   return getFullInfo.bind(context, ...arrayParam);
// }

// const PeopleInfo = getFullInfo.bind(student, ...arr);
// console.log(PeopleInfo);
// PeopleInfo();

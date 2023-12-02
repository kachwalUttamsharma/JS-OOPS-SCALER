Function.prototype.myCall = function (thisContext, ...args) {
  // if the context for this is given, context should be overrided
  // else point to window {}
  thisContext = thisContext || window;
  // creating a new key using symbol
  const uniqueKey = Symbol();
  // Attach the function to the context object using a unique key
  thisContext[uniqueKey] = this;
  const result = thisContext[uniqueKey](...args);
  delete thisContext[uniqueKey];
  return result;
};

let Student = {
  firstname: "chandra",
  lastname: "sekhar",
  subject: "history",
};

function getFullInfo(city, school, modeOfTravel) {
  console.log("this keyword", this);
  console.log(
    "My Name is",
    this.firstname,
    this.lastname,
    "and I learn/teach ",
    this.subject
  );
  console.log(
    "school name",
    school,
    "city",
    city,
    "mode of travel",
    modeOfTravel
  );
}
console.log(getFullInfo);
getFullInfo.myCall(Student, "Hyderabad", "Scaler Tech", "Bike");

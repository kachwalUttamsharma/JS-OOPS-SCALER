function printAllPeopleInfo(item1, item2, item3) {
  const obj = this;
  console.log(item1, item2, item3);
  obj.map((info) => {
    console.log(info.firstName + " " + info.lastName);
  });
}

function printAllPeopleInfo(arr) {
  const obj = this;
  console.log(arr);
  obj.map((info) => {
    console.log(info.firstName + " " + info.lastName);
  });
}

const serverResponse = [
  {
    firstName: "1",
    lastName: "2",
  },
  {
    firstName: "3",
    lastName: "4",
  },
  {
    firstName: "5",
    lastName: "6",
  },
  {
    firstName: "7",
    lastName: "8",
  },
  {
    firstName: "9",
    lastName: "10",
  },
  {
    firstName: "11",
    lastName: "12",
  },
];

printAllPeopleInfo.call(serverResponse, serverResponse);

printAllPeopleInfo.apply(serverResponse, serverResponse);

const bindFunc = printAllPeopleInfo.bind(
  serverResponse,
  serverResponse[0],
  serverResponse[1],
  serverResponse[2]
);
bindFunc();

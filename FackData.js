const UserList = [
  {
    id: 1,
    name: "Krupal",
    username: "JK",
    age: 20,
    nationality: "India",
    married: false,
    friends: [
      {
        id: 2,
        name: "Trupal",
        username: "VT",
        age: 20,
        nationality: "USA",
        married: false,
      },
      {
        id: 3,
        name: "Harsh",
        username: "SH",
        age: 25,
        nationality: "Canada",
        married: true,
      },
    ],
  },
  {
    id: 2,
    name: "Trupal",
    username: "VT",
    age: 20,
    nationality: "USA",
    married: false,
    friends: [
      {
        id: 4,
        name: "Dhrupal",
        username: "DT",
        age: 35,
        nationality: "Brazil",
        married: true,
      },
    ],
  },
  {
    id: 3,
    name: "Harsh",
    username: "SH",
    age: 25,
    nationality: "Canada",
    married: true,
  },
  {
    id: 4,
    name: "Dhrupal",
    username: "DT",
    age: 35,
    nationality: "Brazil",
    married: true,
  },
  {
    id: 5,
    name: "Jenish",
    username: "JC",
    age: 45,
    nationality: "China",
    married: true,
    friends: [
      {
        id: 3,
        name: "Harsh",
        username: "SH",
        age: 25,
        nationality: "Canada",
        married: true,
      },
      {
        id: 4,
        name: "Dhrupal",
        username: "DT",
        age: 35,
        nationality: "Brazil",
        married: true,
      },
    ],
  },
];

const MovieList = [
  {
    id: 1,
    name: "3 Idiots",
    year: 2013,
    run: false,
  },
  {
    id: 2,
    name: "Bahubali",
    year: 2016,
    run: true,
  },
  {
    id: 3,
    name: "83",
    year: 2013,
    run: false,
  },
  {
    id: 4,
    name: "m.s dhoni",
    year: 2015,
    run: true,
  },
  {
    id: 5,
    name: "Bramastra",
    year: 2022,
    run: true,
  },
];

module.exports = { UserList, MovieList };

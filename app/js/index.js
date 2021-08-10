/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("syntax");
/* coding examples */

// var name = {
//   name: "Fachrul",
//   age: 21,
//   address: {
//     ttl: "bandung",
//     ttl2: "cijeruk",
//   },
// };

// log(name.name);
// log(name.address.ttl);
// log(name.name + " type = " + typeof name.name);

// var names = ["alex", "agus", "alex2"];
// log(names[1]);
// log(names.length);

// for (var n of names) {
//   log(n);
// }

// names.forEach(function (n, index) {
//   log(index + " - " + n);
// });

// function addNum(n1, n2) {
//   var result = n1 + n2;
//   return result;
// }

// var result = addNum(10, 2);
// log(result);

// var person = [
//   { name: "fachrul", age: 22 },
//   { name: "agus", age: 21 },
// ];

// for (let i = 0; i < person.length; i++) {
//   log(person[i].name);
// }

// var number = 0;

// while (number < 5) {
//   number++;
//   if (number < 5) {
//     continue;
//   }
//   log(number);
// }

// var person = {
//   name: "fachrul",
//   age: 22,
// };

// if (person.age < 19) {
//   log("arg was true");
// } else {
//   log("arg was false");
// }

// var map = [1, 2, 3, 4, 5].map(function (n) {
//   return n * 2;
// });

// log(map);

// var filter = [1, 2, 3, 4, 5].filter(function (n) {
//   return n % 2 == 0;
// });

// log(filter);

// var reduce = [1, 2, 3, 4, 5].reduce(function (n, t) {
//   return n + t;
// });

// log(reduce);
// function callbackEX(name, callback) {
//   log(callback(name));
// }

// var callback = function (name) {
//   return "Hello " + "name";
// };

// callbackEX("Fachrul ", callback);

// const name = "Anna";
// const age = 21;
// //dapat menambah javascript operation
// log(`Name : ${name} Age : ${age}`);

// const arrayTwo = ["said", "ismail", "aisha"];
// const concatArray = [...arrayTwo];

// concatArray.forEach((name) => {
//   log(name);
// });

// const addNumber = function (n1, n2, n3) {
//   return n1 + n2 + n3;
// };
// const number = [1, 5, 9];
// const addition = addNumber(...number);
// log(addition);

// const adress = {
//   city: "LA",
//   country: "Indonesia",
// };

// const person = { ...adress };
// log(JSON.stringify(person));

// const hello = () => {
//   const es6 = "ES6";
//   return `Hello ${es6}`;
// };

// const powers = [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));

// const add = (n1, n2) => n1 + n2;

// const milesToKm = (miles) => miles * 1.60934;

// log(hello());
// log(powers);
// log(add(100, 100));
// log(milesToKm(300));

// const person = {
//   name: "Alex",
//   cars: ["ferarry", "lambo"],
//   toString: function () {
//     // log(`${this.name} has ${this.cars}`);
//     this.cars.forEach((car) => {
//       log(`${this.name} has ${car}`);
//     });
//   },
// };
// person.toString();

// const pricePropName = "PRICE";

// const calculator = (name, price) => {
//   return {
//     name,
//     add(n1, n2) {
//       return n1 + n2;
//     },
//     [pricePropName.toLowerCase()]: price,
//   };
// };

// const calc = calculator("casio", 19.88);

// log(calc.name);
// log(calc.add(20, 20));
// log(calc.price);

// const names = ["Anna", "Mariam", "Joe", "Mark", "Matt"];

// const [anna, , joe, ...restOfNames] = names;

// log(`${anna} ${joe}`);
// log(restOfNames);
// log(restOfNames.length);

// const getUser = () => {
//   return {
//     name: "John",
//     surname: "Doe",
//     gender: "male",
//     address: {
//       country: "United States",
//       city: "California",
//       postCode: "CA",
//       fullAddress: {
//         doorNumber: 22,
//         street: "LA st",
//       },
//     },
//     age: 29,
//   };
// };

// const user = getUser();

// // const name = user.name;
// // const age = user.age;
// // const country = user.address.country;
// const doorNumber = user.address.fullAddress.doorNumber;

// const {
//   name,
//   age,
//   address: { country: theCountry },
// } = user;

// const {
//   address: {
//     fullAddress: { doorNumber: number },
//   },
// } = user;

// log(name);
// log(age);
// log(theCountry);
// log(doorNumber);

// const calculatePlay = (
//   yearSalary,
//   bonus = {
//     teamBonus: 0,
//     emplyoyeeBonus: 0,
//   }
// ) => {
//   return yearSalary + bonus.teamBonus + bonus.emplyoyeeBonus;
// };

// log(calculatePlay(22000, { teamBonus: 10000, emplyoyeeBonus: 10000 }));
// const namespromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(["fachrul", "asep", "udin"]);
//   }, 3000);

//   setTimeout(() => {
//     reject("no data back from the server");
//   }, 5000);
// });

// const surnamespromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(["faathir", "bravo", "aass"]);
//   }, 3000);

//   setTimeout(() => {
//     reject("no data back from the server");
//   }, 5000);
// });

// Promise.all([namespromise, surnamespromise])
//   .then((data) => {
//     const [names, surnames] = data;
//     for (let i = 0; i < names.length; i++) {
//       const name = names[i];
//       const surname = surnames[i];
//       log(`${name} ${surname}`);
//     }
//   })
//   .catch((error) => {
//     log(error);
//   });

const getRandomUser = (n) => {
  const fetchRandomUser = fetch(`https://randomuser.me/api/?results=${n}`);
  fetchRandomUser.then((data) => {
    data.json().then((randomUsers) => {
      log(JSON.stringify(randomUsers.results.length));
      randomUsers.results.forEach((user) => {
        const {
          name: { first: fir },
        } = user;
        log(`${fir}`);
      });
    });
  });
};

getRandomUser(10);

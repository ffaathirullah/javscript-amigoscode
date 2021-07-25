/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("fundamentals");
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
function callbackEX(name, callback) {
  log(callback(name));
}

var callback = function (name) {
  return "Hello " + name;
};

callbackEX("Fachrul ", callback);

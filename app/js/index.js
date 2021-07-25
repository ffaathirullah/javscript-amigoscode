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

var names = ["alex", "agus", "alex2"];
log(names[1]);
log(names.length);

for (var n of names) {
  log(n);
}

names.forEach(function (n, index) {
  log(index + " - " + n);
});

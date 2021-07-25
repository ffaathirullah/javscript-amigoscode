/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("object dan variabel");
/* coding examples */

var name = {
  name: "Fachrul",
  age: 21,
  address: {
    ttl: "bandung",
    ttl2: "cijeruk",
  },
};

log(name.name);
log(name.address.ttl);
log(name.name + " type = " + typeof name.name);

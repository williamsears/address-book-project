/**
 * Module requirements.
 */

var Table = require('cli-table');

/* vertical */
var vertical_table = new Table();
vertical_table.push({
    "CATEGORIES": "        VALUES"
}, {
    "Name": "Nick"
}, {
    "Last Name": "Bakolias"
}, {
    "Phone": "5145504244"
}, {
    "Phone 2": "N/A"
}, {
    "Email": "bakoliasn@hotmail.com"
}, {
    "Address": "420 place Jacques Cartier"
});

console.log(vertical_table.toString());

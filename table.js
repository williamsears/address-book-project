/**
 * Module requirements.
 */

var Table = require('cli-table');

/* vertical */
var vertical_table = new Table();

if (contactlist[i].first === true) {
    vertical_table.push({
        'Name': contactlist[i].first + " " + contactlist[i].last
    });
}
if (contactlist[i].birthday === true) {
    vertical_table.push({
        'Birthday': contactlist[i].birthday
    });
}
if (contactlist[i].homeAddress === true) {
    vertical_table.push({
        'Home Address': contactlist[i].homeAddress
    });
}
if (contactlist[i].workAddress === true) {
    vertical_table.push({
        'Work Address': contactlist[i].workAddress
    });
}
if (contactlist[i].otherAddress === true) {
    vertical_table.push({
        'Other Address': contactlist[i].otherAddress
    });
}
if (contactlist[i].homePhone === true) {
    vertical_table.push({
        'Home Phone': contactlist[i].homePhone
    });
}
if (contactlist[i].workPhone === true) {
    vertical_table.push({
        'Work Phone': contactlist[i].workPhone
    });
}
if (contactlist[i].otherPhone === true) {
    vertical_table.push({
        'Other Phone': contactlist[i].otherPhone
    });
}
if (contactlist[i].email === true) {
    vertical_table.push({
        'E-mail': contactlist[i].email
    });
}
if (contactlist[i].email2 === true) {
    vertical_table.push({
        'Secondary E-mail': contactlist[i].email2
    });
}


console.log(vertical_table.toString());

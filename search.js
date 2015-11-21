var inquirer = require('inquirer');
var main = require('./callToAction');
var menu = require('./menu');
var Table = require('cli-table')

function searchFun() {
    inquirer.prompt([{
        name: 'ID',
        message: 'Enter first OR last name!: '
    }], function(searchID) {
        var counter = 0;
        for (var i = 0; i < main.contactList.length; i++) {
            if (searchID.ID === main.contactList[i].first || searchID.ID === main.contactList[i].last) {
                //need to put your table over here...
                var vertical_table = new Table();

                if (main.contactList[i].first) {
                    vertical_table.push({
                        'Name': main.contactList[i].first + " " + main.contactList[i].last
                    });
                }
                if (main.contactList[i].birthday) {
                    vertical_table.push({
                        'Birthday': main.contactList[i].birthday
                    });
                }
                if (main.contactList[i].homeAddress) {
                    vertical_table.push({
                        'Home Address': main.contactList[i].homeAddress
                    });
                }
                if (main.contactList[i].workAddress) {
                    vertical_table.push({
                        'Work Address': main.contactList[i].workAddress
                    });
                }
                if (main.contactList[i].otherAddress) {
                    vertical_table.push({
                        'Other Address': main.contactList[i].otherAddress
                    });
                }
                if (main.contactList[i].homePhone) {
                    vertical_table.push({
                        'Home Phone': main.contactList[i].homePhone
                    });
                }
                if (main.contactList[i].workPhone) {
                    vertical_table.push({
                        'Work Phone': main.contactList[i].workPhone
                    });
                }
                if (main.contactList[i].otherPhone) {
                    vertical_table.push({
                        'Other Phone': main.contactList[i].otherPhone
                    });
                }
                if (main.contactList[i].email) {
                    vertical_table.push({
                        'E-mail': main.contactList[i].email
                    });
                }
                if (main.contactList[i].email2) {
                    vertical_table.push({
                        'Secondary E-mail': main.contactList[i].email2
                    });
                }


                console.log(vertical_table.toString());
                main.currentIndex = i;
                counter++;
                main.searchMenu();
            }
            else {
                console.log('Contact not found!');
                main.searchMenu();
            }
        }

    });
}
searchFun();

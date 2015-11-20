var contactList = require('./new-contact-menu');
var Table = require('cli-table');
var inquirer = require('inquirer');
var prompt = ('prompt');


function search(cb) {
    inquirer.prompt([{
            name: 'name',
            message: 'Enter first or last name: '
        }], function(resp) {
            var current;
            for (var i = 0; i < contactList.list.length; i++) {

                if (resp.name === contactList.list[i].first || resp.name === contactList.list[i].last) {
                    //we need to replace this with the verticle cli-table
                    console.log(contactList.list[i]);
                    current = i;
                }

            }

            "use strict";

            console.log("                                             \n\
              _     _                     ____              _              \n\
     /\\      | |   | |                   |  _ \\            | |           \n\
    /  \\   __| | __| |_ __ ___  ___ ___  | |_) | ___   ___ | | __         \n\
   / /\\ \\ / _` |/ _` | '__/ _ \\/ __/ __| |  _ < / _ \\ / _ \\| |/ /      \n\
  / ____ \\ (_| | (_| | | |  __/\\__ \\__ \\ | |_) | (_) | (_) |   <       \n\
 /_/    \\_\\__,_|\\__,_|_|  \\___||___/___/ |____/ \\___/ \\___/|_|\\_\\  \n\
                                                                           \n\
                                                                           \n");

            var questions = [{
                type: "rawlist",
                name: "mainmenu",
                choices: ["Edit the current entry", "Delete the current entry", "Go back to the main menu"],
                message: "What would you like to do?"
            }];

            inquirer.prompt(questions, function(answers) {
                    //have to iterate over all elements of the object, can i just use a foreach()?
                    if (answers === "Edit the current entry") {
                        //have to put all the "});" at the end.
                        console.log(contactList.list[current].phone);
                        inquirer.prompt([{
                                type: 'confirm',
                                name: 'changeFirst',
                                message: 'Do you want to change the first name?'
                            }], function(ansFirst) {
                                if (ansFirst.changeFirst) {
                                    inquirer.prompt([{
                                        name: 'newFirst',
                                        message: 'Enter new first name: '
                                    }], function(newFirst) {
                                        contactList.list[current].first = ansFirst.newFirst;
                                    });
                                }

                                console.log(contactList.list[current].last);
                                inquirer.prompt([{
                                    type: 'confirm',
                                    name: 'changeLast',
                                    message: 'Do you want to change the last name?'
                                }], function(ansLast) {
                                    if (ansLast.changeLast) {
                                        inquirer.prompt([{
                                            name: 'newLast',
                                            message: 'Enter last name: '
                                        }], function(ansLast1) {
                                            contactList.list[current].first = ansLast1.newLast;
                                        });
                                    }

                                });



                                console.log(contactList.list[current].phone);
                                inquirer.prompt([{
                                    type: 'confirm',
                                    name: 'changePhone',
                                    message: 'Do you want to change the phone number?'
                                }], function(ansPhone) {
                                    if (ansPhone.changePhone) {
                                        inquirer.prompt([{
                                            name: 'newPhone',
                                            message: 'Enter new phone number: '
                                        }], function() {
                                            contactList.list[current].Phone = ansFirst.newPhone
                                        });
                                    }



                                    console.log(contactList.list[current].phone2);
                                    inquirer.prompt([{
                                        type: 'confirm',
                                        name: 'changePhone2',
                                        message: 'Do you want to change the 2nd phone number?'
                                    }], function(ansPhone2) {
                                        if (ansPhone2.change) {
                                            inquirer.prompt([{
                                                name: 'newPhone2',
                                                message: 'Enter : '
                                            }], function(ans1Phone2) {
                                                contactList.list[current].phone2 = ans1Phone2.newPhone2;
                                            });
                                        }

                                    });



                                    console.log(contactList.list[current].email);
                                    inquirer.prompt([{
                                        type: 'confirm',
                                        name: 'changeEmail',
                                        message: 'Do you want to change the E-mail?'
                                    }], function(ansEmail) {
                                        if (ansEmail.changeEmail) {
                                            inquirer.prompt([{
                                                name: 'newEmail',
                                                message: 'Enter new Email: '
                                            }], function(ansEmail1) {
                                                contactList.list[current].email = ansEmail1.newEmail;
                                            });
                                        }

                                    });
                                    
                                    
                                    console.log(contactList.list[current].address);
                                    inquirer.prompt([{
                                        type: 'confirm',
                                        name: 'changeAddress',
                                        message: 'Do you want to change the address?'
                                    }], function(ansAddress) {
                                        if (ansAddress.changeAddress) {
                                            inquirer.prompt([{
                                                name: 'newAddress',
                                                message: 'Enter new address: '
                                            }], function(ansAddress1) {
                                                contactList.list[current].address = ansAddress1.newAddress;
                                            });
                                        }

                                    });
                                    
                                    console.log(contactList.list[current].);
                                    inquirer.prompt([{
                                        type: 'confirm',
                                        name: 'change',
                                        message: 'Do you want to change the ?'
                                    }], function(ans) {
                                        if (ans.change) {
                                            inquirer.prompt([{
                                                name: 'new',
                                                message: 'Enter : '
                                            }], function(ans1) {
                                                contactList.list[current].first = ans1.new;
                                            });
                                        }

                                    });
                                    
                                    











                                });
                            }

                        }
                        else if (answers === "Delete the current entry") {

                        }
                        else {
                            cb();
                        }
                    });
            });
    }
}



module.exports = search;
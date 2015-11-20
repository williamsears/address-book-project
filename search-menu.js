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
                    if (answers === "Edit the current entry") {

                        console.log(contactList.list[current].first);
                        inquirer.prompt([{
                            type: 'confirm',
                            name: 'changeFirst',
                            message: 'Do you want to change the first name?'
                        }], function(answ) {
                            if (answ.changeFirst) {
                                inquirer.prompt([{
                                    name: 'newFirst',
                                    message: 'Enter first name: '
                                }], function(ansFirst) {
                                    contactList.list[current].first = ansFirst.newFirst
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
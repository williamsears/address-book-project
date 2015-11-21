// initializes the whole project

var inquirer = require('inquirer');
var contactList = [{
    first: 'nick',
    last: 'bakolias'
}];
var Table = require('cli-table')
var currentIndex;

function mainMenu() {

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
        choices: ["Create new entry", "Search the directory", "Quit", "Credits"],
        message: "What would you like to do?"
    }];

    inquirer.prompt(questions, function(answers) {
        if (answers.mainmenu.indexOf('Create new entry') > -1) {
            createContact();
        }
        else if (answers.mainmenu.indexOf('Search the directory') > -1) {
            searchFun();
        }
        else if (answers.mainmenu.indexOf('Quit') > -1) {
            return;
        }
        else if (answers.mainmenu.indexOf('Credits') > -1) {
            console.log('Written by Nick Bakolias and William Sears');
        }

    });
}

function searchMenu() {

    "use strict";

    var questions = [{
        type: "rawlist",
        name: "searchmenu",
        choices: ["Main Menu", "Edit Contact", "Delete Contact"],
        message: "What would you like to do?"
    }];

    inquirer.prompt(questions, function(answers) {
            if (answers.searchmenu.indexOf('Main Menu') > -1) {
                mainMenu();
            }
            else if (answers.searchmenu.indexOf('Edit Contact') > -1) {
                editContact();
            }
            else if (answers.searchmenu.indexOf('Delete Contact') > -1) {
                deleteContact();
            }
        }


    );
}

function createContact() {
    // Need to make sure user choses valid answers!
    inquirer.prompt([{
        name: 'first',
        message: 'Enter first name:'
    }, {
        name: 'last',
        message: 'Enter last name:'
    }, {
        name: 'birthday',
        message: 'Enter birthday (optional):'
    }, {
        type: 'checkbox',
        name: 'addressChoice',
        message: 'which address/es would you like to add?',
        choices: ['home', 'work', 'other']
    }, {
        type: 'checkbox',
        name: 'phoneChoice',
        message: 'which phone number/s would you like to add?',
        choices: ['home', 'work', 'other']
    }], function(choices) {

        var questions = [];

        if (choices.addressChoice.indexOf('home') > -1) {
            questions.push({
                name: 'homeAddressNum',
                message: 'Enter Home Address Line 1'
            }, {
                name: 'homeAddressStr',
                message: 'Enter Home Address Line 2 (optional)'
            }, {
                name: 'homeCity',
                message: 'Enter Home City'
            }, {
                name: 'homeProvince',
                message: 'Enter Home Province'
            }, {
                name: 'HomeCountry',
                message: 'Enter Home Country'
            });
        }
        if (choices.addressChoice.indexOf('work') > -1) {
            questions.push({
                name: 'workAddressNum',
                message: 'Enter Work Address Line 1'
            }, {
                name: 'workAddressStr',
                message: 'Enter Work Address Line 2 (optional)'
            }, {
                name: 'workCity',
                message: 'Enter City'
            }, {
                name: 'workProvince',
                message: 'Enter Province'
            }, {
                name: 'workCountry',
                message: 'Enter Country'
            });
        }
        if (choices.addressChoice.indexOf('other') > -1) {
            questions.push({
                name: 'otherAddressNum',
                message: 'Address Line 1'
            }, {
                name: 'otherAddressStr',
                message: 'Address Line 2 (optional)'
            }, {
                name: 'otherCity',
                message: 'Enter City'
            }, {
                name: 'otherProvince',
                message: 'Enter Province'
            }, {
                name: 'otherCountry',
                message: 'Enter Country'
            });
        }

        if (choices.phoneChoice.indexOf('home') > -1) {
            questions.push({
                name: 'homePhone',
                message: 'Enter Home Number'
            });
        }
        if (choices.phoneChoice.indexOf('work') > -1) {
            questions.push({
                name: 'workPhone',
                message: 'Enter Work Number'
            });
        }
        if (choices.phoneChoice.indexOf('other') > -1) {
            questions.push({
                name: 'otherPhone',
                message: 'Enter other Number'
            });

        }

        inquirer.prompt(questions, function(response) {
            var obj = {};
            obj.first = choices.first;
            obj.last = choices.last;

            if (choices.birthday) {
                obj.birthday = choices.birthday;
            }

            if (choices.addressChoice.indexOf('home') > -1) {
                var temp = [];
                temp.push(response.homeAddressNum, response.homeAddressStr, response.homeCity, response.homeProvince, response.homeCountry);
                obj.homeAddress = temp.join(" ");
                obj.homeAddressNum = response.homeAddressNum;
                obj.homeAddressStr = response.homeAddressStr;
                obj.homeCity = response.homeCity;
                obj.homeProvince = response.homeProvince;
                obj.homeCountry = response.homeCountry;
            }
            if (choices.addressChoice.indexOf('work') > -1) {
                var temp1 = [];
                temp1.push(response.workAddressNum, response.workAddressStr, response.workCity, response.workProvince, response.workCountry);
                obj.workAddress = temp1.join(" ");
                obj.workAddressNum = response.workAddressNum;
                obj.workAddressStr = response.workAddressStr;
                obj.workCity = response.workCity;
                obj.workProvince = response.workProvince;
                obj.workCountry = response.workCountry;
            }
            if (choices.addressChoice.indexOf('other') > -1) {
                var temp2 = [];
                temp2.push(response.otherAddressNum, response.otherAddressStr, response.otherCity, response.otherProvince, response.otherCountry);
                obj.otherAddress = temp2.join(" ");
                obj.otherAddressNum = response.otherAddressNum;
                obj.otherAddressStr = response.otherAddressStr;
                obj.otherCity = response.otherCity;
                obj.otherProvince = response.otherProvince;
                obj.otherCountry = response.otherCountry;
            }
            if (choices.phoneChoice.indexOf('home') > -1) {
                obj.homePhone = response.homePhone;
            }

            if (choices.phoneChoice.indexOf('work') > -1) {
                obj.workPhone = response.workPhone;
            }
            if (choices.phoneChoice.indexOf('other') > -1) {
                obj.otherPhone = response.otherPhone;
            }
            var vertical_table = new Table();

            if (obj.first) {
                vertical_table.push({
                    'Name': obj.first + " " + obj.last
                });
            }
            if (obj.birthday) {
                vertical_table.push({
                    'Birthday': obj.birthday
                });
            }
            if (obj.homeAddress) {
                vertical_table.push({
                    'Home Address': obj.homeAddress
                });
            }
            if (obj.workAddress) {
                vertical_table.push({
                    'Work Address': obj.workAddress
                });
            }
            if (obj.otherAddress) {
                vertical_table.push({
                    'Other Address': obj.otherAddress
                });
            }
            if (obj.homePhone) {
                vertical_table.push({
                    'Home Phone': obj.homePhone
                });
            }
            if (obj.workPhone) {
                vertical_table.push({
                    'Work Phone': obj.workPhone
                });
            }
            if (obj.otherPhone) {
                vertical_table.push({
                    'Other Phone': obj.otherPhone
                });
            }
            if (obj.email) {
                vertical_table.push({
                    'E-mail': obj.email
                });
            }
            contactList.push(obj);
            console.log(vertical_table.toString());
            currentIndex = contactList.length - 1;

            searchMenu();
        });
    });



}

mainMenu();







function searchFun() {
    inquirer.prompt([{
        name: 'ID',
        message: 'Enter first OR last name!: '
    }], function(searchID) {
        var counter = 0;
        for (var i = 0; i < contactList.length; i++) {
            if (searchID.ID === contactList[i].first || searchID.ID === contactList[i].last) {

                var vertical_table = new Table();

                if (contactList[i].first) {
                    vertical_table.push({
                        'Name': contactList[i].first + " " + contactList[i].last
                    });
                }
                if (contactList[i].birthday) {
                    vertical_table.push({
                        'Birthday': contactList[i].birthday
                    });
                }
                if (contactList[i].homeAddress) {
                    vertical_table.push({
                        'Home Address': contactList[i].homeAddress
                    });
                }
                if (contactList[i].workAddress) {
                    vertical_table.push({
                        'Work Address': contactList[i].workAddress
                    });
                }
                if (contactList[i].otherAddress) {
                    vertical_table.push({
                        'Other Address': contactList[i].otherAddress
                    });
                }
                if (contactList[i].homePhone) {
                    vertical_table.push({
                        'Home Phone': contactList[i].homePhone
                    });
                }
                if (contactList[i].workPhone) {
                    vertical_table.push({
                        'Work Phone': contactList[i].workPhone
                    });
                }
                if (contactList[i].otherPhone) {
                    vertical_table.push({
                        'Other Phone': contactList[i].otherPhone
                    });
                }
                if (contactList[i].email) {
                    vertical_table.push({
                        'E-mail': contactList[i].email
                    });
                }
                if (contactList[i].email2) {
                    vertical_table.push({
                        'Secondary E-mail': contactList[i].email2
                    });
                }


                console.log(vertical_table.toString());
                currentIndex = i;
                counter++;
            }

        }
        if (counter < 1) {

            console.log('Contact not found!');
            mainMenu();
        }
        else {

            searchMenu();
        }

    });
}



function deleteContact() {
    var temp = [];
    for (var i = 0; i < contactList; i++) {
        if (i !== currentIndex) {
            temp.push(contactList[i]);

        }
    }
    contactList = temp;
    mainMenu();
}

function editContact() {
    // Need to make sure user choses valid answers!
    inquirer.prompt([{
        name: 'first',
        message: 'Enter first name:',
        default: contactList[currentIndex].first
    }, {
        name: 'last',
        message: 'Enter last name:',
        default: contactList[currentIndex].last
    }, {
        name: 'birthday',
        message: 'Enter birthday (optional):',
        default: contactList[currentIndex].birthday
    }, {
        type: 'checkbox',
        name: 'addressChoice',
        message: 'which address/es would you like to add?',
        choices: ['home', 'work', 'other']

    }, {
        type: 'checkbox',
        name: 'phoneChoice',
        message: 'which phone number/s would you like to add?',
        choices: ['home', 'work', 'other']
    }], function(choices) {

        var questions = [];

        if (choices.addressChoice.indexOf('home') > -1) {
            questions.push({
                name: 'homeAddressNum',
                message: 'Enter Home Address Line 1',
                default: contactList[currentIndex].homeAddressNum
            }, {
                name: 'homeAddressStr',
                message: 'Enter Home Address Line 2 (optional)',
                default: contactList[currentIndex].homeAddessStr
            }, {
                name: 'homeCity',
                message: 'Enter Home City',
                default: contactList[currentIndex].homeCity
            }, {
                name: 'homeProvince',
                message: 'Enter Home Province',
                default: contactList[currentIndex].homeProvince
            }, {
                name: 'HomeCountry',
                message: 'Enter Home Country',
                default: contactList[currentIndex].homeCountry
            });
        }
        if (choices.addressChoice.indexOf('work') > -1) {
            questions.push({
                name: 'workAddressNum',
                message: 'Enter Work Address Line 1',
                default: contactList[currentIndex].workAddressNum
            }, {
                name: 'workAddressStr',
                message: 'Enter Work Address Line 2 (optional)',
                default: contactList[currentIndex].workAddressStr
            }, {
                name: 'workCity',
                message: 'Enter City',
                default: contactList[currentIndex].workCity
            }, {
                name: 'workProvince',
                message: 'Enter Province',
                default: contactList[currentIndex].workProvince
            }, {
                name: 'workCountry',
                message: 'Enter Country',
                default: contactList[currentIndex].workCountry
            });
        }
        if (choices.addressChoice.indexOf('other') > -1) {
            questions.push({
                name: 'otherAddressNum',
                message: 'Address Line 1',
                default: contactList[currentIndex].otherAddressNum
            }, {
                name: 'otherAddressStr',
                message: 'Address Line 2 (optional)',
                default: contactList[currentIndex].otherAddressStr
            }, {
                name: 'otherCity',
                message: 'Enter City',
                default: contactList[currentIndex].otherCity
            }, {
                name: 'otherProvince',
                message: 'Enter Province',
                default: contactList[currentIndex].otherProvince
            }, {
                name: 'otherCountry',
                message: 'Enter Country',
                default: contactList[currentIndex].otherCountry
            });
        }

        if (choices.phoneChoice.indexOf('home') > -1) {
            questions.push({
                name: 'homePhone',
                message: 'Enter Home Number',
                default: contactList[currentIndex].homePhone
            });
        }
        if (choices.phoneChoice.indexOf('work') > -1) {
            questions.push({
                name: 'workPhone',
                message: 'Enter Work Number',
                default: contactList[currentIndex].workPhone
            });
        }
        if (choices.phoneChoice.indexOf('other') > -1) {
            questions.push({
                name: 'otherPhone',
                message: 'Enter other Number',
                default: contactList[currentIndex].otherPhone
            });

        }

        inquirer.prompt(questions, function(response) {
            var obj = {};
            obj.first = choices.first;
            obj.last = choices.last;

            if (choices.birthday) {
                obj.birthday = choices.birthday;
            }

            if (choices.addressChoice.indexOf('home') > -1) {
                var temp = [];
                temp.push(response.homeAddressNum, response.homeAddressStr, response.homeCity, response.homeProvince, response.homeCountry);
                obj.homeAddress = temp.join(" ");
                obj.homeAddressNum = response.homeAddressNum;
                obj.homeAddressStr = response.homeAddressStr;
                obj.homeCity = response.homeCity;
                obj.homeProvince = response.homeProvince;
                obj.homeCountry = response.homeCountry;
            }
            if (choices.addressChoice.indexOf('work') > -1) {
                var temp1 = [];
                temp1.push(response.workAddressNum, response.workAddressStr, response.workCity, response.workProvince, response.workCountry);
                obj.workAddress = temp1.join(" ");
                obj.workAddressNum = response.workAddressNum;
                obj.workAddressStr = response.workAddressStr;
                obj.workCity = response.workCity;
                obj.workProvince = response.workProvince;
                obj.workCountry = response.workCountry;
            }
            if (choices.addressChoice.indexOf('other') > -1) {
                var temp2 = [];
                temp2.push(response.otherAddressNum, response.otherAddressStr, response.otherCity, response.otherProvince, response.otherCountry);
                obj.otherAddress = temp2.join(" ");
                obj.otherAddressNum = response.otherAddressNum;
                obj.otherAddressStr = response.otherAddressStr;
                obj.otherCity = response.otherCity;
                obj.otherProvince = response.otherProvince;
                obj.otherCountry = response.otherCountry;
            }
            if (choices.phoneChoice.indexOf('home') > -1) {
                obj.homePhone = response.homePhone;
            }

            if (choices.phoneChoice.indexOf('work') > -1) {
                obj.workPhone = response.workPhone;
            }
            if (choices.phoneChoice.indexOf('other') > -1) {
                obj.otherPhone = response.otherPhone;
            }
            var vertical_table = new Table();

            if (obj.first) {
                vertical_table.push({
                    'Name': obj.first + " " + obj.last
                });
            }
            if (obj.birthday) {
                vertical_table.push({
                    'Birthday': obj.birthday
                });
            }
            if (obj.homeAddress) {
                vertical_table.push({
                    'Home Address': obj.homeAddress
                });
            }
            if (obj.workAddress) {
                vertical_table.push({
                    'Work Address': obj.workAddress
                });
            }
            if (obj.otherAddress) {
                vertical_table.push({
                    'Other Address': obj.otherAddress
                });
            }
            if (obj.homePhone) {
                vertical_table.push({
                    'Home Phone': obj.homePhone
                });
            }
            if (obj.workPhone) {
                vertical_table.push({
                    'Work Phone': obj.workPhone
                });
            }
            if (obj.otherPhone) {
                vertical_table.push({
                    'Other Phone': obj.otherPhone
                });
            }
            if (obj.email) {
                vertical_table.push({
                    'E-mail': obj.email
                });
            }
            contactList[currentIndex] = obj;
            console.log(vertical_table.toString());

            searchMenu();
        });
    });



}

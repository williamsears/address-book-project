var inquirer = require('inquirer');

//var main = require('./callToAction');
var Table = require('cli-table');
var contactList = [];
var currentIndex;

function createContact(callback) {
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
            }
            if (choices.addressChoice.indexOf('work') > -1) {
                var temp1 = [];
                temp1.push(response.workAddressNum, response.workAddressStr, response.workCity, response.workProvince, response.workCountry);
                obj.workAddress = temp1.join(" ");
            }
            if (choices.addressChoice.indexOf('other') > -1) {
                var temp2 = [];
                temp2.push(response.otherAddressNum, response.otherAddressStr, response.otherCity, response.otherProvince, response.otherCountry);
                obj.otherAddress = temp2.join(" ");
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


        });
    });



}
createContact();

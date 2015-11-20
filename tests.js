var inquirer = require('inquirer');
//var main = require('./callToAction');
//var Table = require('cli-table');
var contactList = [{
    first: "nick",
    last: "bakolias"
}];

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
            questions.push([{
                name: 'homeAddressNum',
                message: 'Address Line 1'
            }, {
                name: 'homeAddressStr',
                message: 'Address Line 2 (optional)'
            }, {
                name: 'homeCity',
                message: 'Enter City'
            }, {
                name: 'homeProvince',
                message: 'Enter Province'
            }, {
                name: 'HomeCountry',
                message: 'Enter Country'
            }]);
        }
        if (choices.addressChoice.indexOf('work') > -1) {
                    questions.push({
                name: 'workAddressNum',
                message: 'Address Line 1'
            }, {
                name: 'workAddressStr',
                message: 'Address Line 2 (optional)'
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
        message: 'Enter Home Number:'
    });
        }
        if (choices.phoneChoice.indexOf('work') > -1) {
            questions.push({
        name: 'workPhone',
        message: 'Enter Work Number:'
    });
        }
        if (choices.phoneChoice.indexOf('other') > -1) {
        questions.push({
        name: 'otherPhone',
        message: 'Enter other Number:'
    });

        }
    
        inquirer.prompt(questions, function(response){
            console.log(response);
            console.log(choices);
        });        
        });



}
createContact();

















/*
    
                function(res1) {

                    var b = [res1.addressNum, res1.addressStr, res1.city, res1.province, res1.country];
                    res.address2 = b.join(' ');
                    var a = [res.addressNum, res.addressStr, res.city, res.province, res.country];
                    res.address = a.join(' ');
                    contactList.push(res);

                    console.log(contactList[contactList.length - 1]);
                    callback();
                });
        }
        else {
            var a = [res.addressNum, res.addressStr, res.city, res.province, res.country];
            res.address = a.join(' ');
            contactList.push(res);
            /* vertical 
            var vertical_table = new Table();
            vertical_table.push({
                "CATEGORIES": "        VALUES"
            }, {
                "Name": res.first
            }, {
                "Last Name": res.last
            }, {
                "Phone": res.phone
            }, {
                "Phone 2": res.phone2
            }, {
                "Email": res.email
            }, {
                "Address": res.address
            });

            console.log(vertical_table.toString());
            callback();
        }
    });

}
createContact();

module.exports = {
    create: createContact,
    list: contactList
};
*/
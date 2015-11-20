var prompt = require('prompt');
var inquirer = require('inquirer');
var main = require('./callToAction');
var Table = require('cli-table');
var contactList = [{first:"nick",last:"bakolias"}];

function createContact(callback) {
    // Need to make sure user choses valid answers!
    inquirer.prompt([{
        name: 'first',
        message: 'Enter First Name'
    }, {
        name: 'last',
        message: 'Enter Last Name'
    }, {
        name: 'phone',
        message: 'Enter Phone Number'
    }, {
        name: 'phone2',
        message: 'Enter 2nd Phone Number (optional)'
    }, {
        name: 'email',
        message: 'Enter E-mail'
    }, {
        name: 'addressNum',
        message: 'Enter Street Number'
    }, {
        name: 'addressStr',
        message: 'Enter Street'
    }, {
        name: 'city',
        message: 'Enter City'
    }, {
        name: 'province',
        message: 'Enter Province'
    }, {
        name: 'country',
        message: 'Enter Country'
    }, {
        type: 'confirm',
        name: 'address2',
        message: 'Would you like to enter another address?'
    }], function(res) {

        if (res.address2 === true) {
            inquirer.prompt([{
                    name: 'addressNum',
                    message: 'Enter Street Number'
                }, {
                    name: 'addressStr',
                    message: 'Enter Street'
                }, {
                    name: 'city',
                    message: 'Enter City'
                }, {
                    name: 'province',
                    message: 'Enter Province'
                }, {
                    name: 'country',
                    message: 'Enter Country'
                }],
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
            /* vertical */
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

module.exports = {
    create: createContact,
    list: contactList
};
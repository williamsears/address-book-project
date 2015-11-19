var prompt = require('prompt');
var contactList = [];
var inquirer = require('inquirer');
function createContact() {

    inquirer.prompt.get([{
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
    }], function(err, res) {
        if (err) {
            console.log('ERROR');
        }
        inquirer.prompt.get({
            name: 'yesno',
            message: 'Would you like to enter another address?'
        }, function(err, res1) {
            if (err) {
                console.log('ERROR');
            }
            if (res1.yesno === 'yes') {
                inquirer.prompt.get([{
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
                    function(err, res2) {
                        if (err) {
                            console.log('ERROR');
                        }
                        var b = [res2.addressNum, res2.addressStr, res2.city, res2.province, res2.country];
                        res.address2 = b.join(' ');
                        var a = [res.addressNum, res.addressStr, res.city, res.province, res.country];
                        res.address = a.join(' ');
                        contactList.push(res);

                        console.log(contactList[contactList.length - 1]);
                    });
            } else {
                var a = [res.addressNum, res.addressStr, res.city, res.province, res.country];
                res.address = a.join(' ');
                contactList.push(res);

                console.log(contactList[contactList.length - 1]);
            }
        });

    });
}
module.exports = {
    create: createContact,
    list: contactList
};
var contactList = require('./new-contact-menu');
var Table = require('cli-table');
var inquirer = require('inquirer');
var prompt = ('prompt');


function search(cb) {
    inquirer.prompt([{
        name: 'name',
        message: 'Enter first or last name: '
    }], function(resp) {

        for (var i = 0; i < contactList.list.length; i++) {

            if (resp.name === contactList.list[i].first || resp.name === contactList.list[i].last) {
                console.log(contactList.list[i]);
            }

        }
        cb();
    });
}
module.exports = search;
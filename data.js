var inquirer = require('inquirer');



function homeAddress() {
    inquirer.prompt([{
        name: 'addressNum',
        message: 'Address Line 1'
    }, {
        name: 'addressStr',
        message: 'Address Line 2 (optional)'
    }, {
        name: 'city',
        message: 'Enter City'
    }, {
        name: 'province',
        message: 'Enter Province'
    }, {
        name: 'country',
        message: 'Enter Country'
    }], function(answers) {
        var temp = answers.join(' ');
        choices.homeAdd = temp;
    });
}

function workAddress() {
    var workAnswers;
    inquirer.prompt([{
        name: 'addressNum',
        message: 'Address Line 1'
    }, {
        name: 'addressStr',
        message: 'Address Line 2 (optional)'
    }, {
        name: 'city',
        message: 'Enter City'
    }, {
        name: 'province',
        message: 'Enter Province'
    }, {
        name: 'country',
        message: 'Enter Country'
    }], function(answers) {
        var temp = answers.join(' ');
        choices.workAdd = temp;
    });
}

function otherAddress() {
    var otherAnswers;
    inquirer.prompt([{
        name: 'addressNum',
        message: 'Address Line 1'
    }, {
        name: 'addressStr',
        message: 'Address Line 2 (optional)'
    }, {
        name: 'city',
        message: 'Enter City'
    }, {
        name: 'province',
        message: 'Enter Province'
    }, {
        name: 'country',
        message: 'Enter Country'
    }], function(answers) {
        var temp = answers.join(' ');
        choices.workAdd = temp;
    });
}

function workPhone() {
    inquirer.prompt([{
        name: 'phone',
        message: 'Enter Street Number'
    }], function(answers) {
        var temp = answers.join(' ');
        choices.workPh = temp;
    });
}

function otherPhone() {
    inquirer.prompt([{
        name: 'phone',
        message: 'Enter phone number'
    }], function(answers) {
        var temp = answers.join(' ');
        choices.otherPh = temp;
    });
}

function homePhone() {
    inquirer.prompt([{
        name: 'phone',
        message: 'Enter Street Number'
    }], function(answers) {
        var temp = answers.join(' ');
        choices.homePh = temp;
    });
}

module.exports = {
    homeA: homeAddress,
    workA: workAddress,
    otherA: otherAddress,
    homeP: homePhone,
    workP: workPhone,
    otherP: otherPhone
}

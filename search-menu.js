//var contactList = require('./new-contact-menu');
var Table = require('cli-table');
var inquirer = require('inquirer');
var prompt = ('prompt');
var mainMenu = require('mainMenu')


var inquirer = require('inquirer');

// var createContact = require('./new-contact-menu');

function searchMenu(contact, cb) {

  "use strict";

  var questions = [{
    type: "rawlist",
    name: "searchmenu",
    choices: ["Main Menu", "Edit Contact", "Delete Contact"],
    message: "What would you like to do?"
  }];

  inquirer.prompt(questions, function(answers) {
   if (answers.choices.indexOf('Main Menu') > -1) {
     mainMenu();
   }
    cb(answers.searchmenu);
  });
}
searchMenu();
module.exports = searchMenu;
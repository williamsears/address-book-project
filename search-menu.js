var callToAction = require('./callToAction')
var table = require('cli-table');
var inquirer = require('inquirer');


// var createContact = require('./new-contact-menu');

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
     
     callToAction.mainMenu();
  } else if (answers.searchmenu.indexOf('Edit Contact') > -1){
      console.log('edit');
  }
    else if (answers.searchmenu.indexOf('Delete Contact') > -1){
    //   var temp = [];
    //   for(var i = 0; i < createContact.li; i++){
    //       if(i !== createContact.currentIndex){
    //             temp.push(createContact.li[i]);
    //      
    //    
    //}
}
    }
 

  );
}
module.exports = searchMenu;
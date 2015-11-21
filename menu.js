var inquirer = require('inquirer');


// var createContact = require('./new-contact-menu');

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
      create.createContact();
   } else if (answers.mainmenu.indexOf('Search the directory') > -1){
     console.log("test")
       searchMenu();
   }
    else if (answers.mainmenu.indexOf('Quit') > -1){
       return;
   }
       else if (answers.mainmenu.indexOf('Credits') > -1){
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

module.exports = {
    mainMenu:mainMenu,
    searchMenu:searchMenu
}
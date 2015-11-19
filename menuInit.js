var inquirer = require('inquirer');

// var createContact = require('./new-contact-menu');

function mainMenu(cb) {

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
    cb(answers.mainmenu);
  });
}
module.exports = mainMenu;

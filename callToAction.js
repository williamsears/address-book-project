// initializes the whole project

var mainMenu = require('./menuInit');
var createContact = require('./new-contact-menu');
var search = require('./search-menu');

function main() {
    mainMenu(function(choice) {
        if (choice === "Create new entry") {
            createContact.create(function() {
                main();
            });
        }
        else if (choice === "Search the directory") {
            console.log("search");
            search(function() {
                main();
            });
        }
    });
}
main();
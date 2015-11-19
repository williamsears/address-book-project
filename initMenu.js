// This initializes the menu prompt. 

var createContact = require('./new-contact-menu');

var menu = require('node-menu');

var TestObject = function() {
    var self = this;
    self.fieldA = 'FieldA';
    self.fieldB = 'FieldB';
}
 
TestObject.prototype.printFieldA = function() {
    console.log(this.fieldA);
}
 
TestObject.prototype.printFieldB = function(arg) {
    console.log(this.fieldB + arg);
}
 
var testObject = new TestObject();

menu.addDelimiter('-', 68, ' Welcome to Address Book ')
menu.addDelimiter('-', 68, ' What would you like to do? ')
    .addItem(
        'Create New Contact', 
        function() {
            createContact.create();
        })
    .addItem(
        "Search Menu",
        testObject.printFieldA,
        testObject)
    .addItem('Quit',
    function() {
        process.stdin.end();
        process.exit();
    })
    .addItem('Credits', function() {
        console.log("This program was written by William Sears & Nickolas Bakolias")
    });
    menu.addDelimiter('*', 68, " Address Book 1.0.0 ")
.start();

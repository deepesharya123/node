const fund = require('./notes');
const validator  = require('validator')

console.log(validator.isEmail("deee@gmail.com")+" this was checking the email to be valid or not ")
console.log(fund("HELLO "))
console.log(validator.isURL("www.googlecom")+" this was checking the validation of url")



const chalk = require('chalk')
const yargs = require('yargs');
const getNotes = require('./notes.js');

const command = process.argv[2];

yargs.version('1.1.0');


yargs.command({
    command:'add',
    describe:"for adding a note",
    bulder:{
        title:{
            describe:"Mote title",
            demandOption:true,
            type:'string'
        }
    },
    handler:function (argv){
        console.log('Title is : ',argv.title)
    }
})

// for removing command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log("removing the command")
    }
})

yargs.command({
    command:'read',
    describe:"for reading the note",
    handler:function(){
        console.log("Reading the data ")
    }
})

yargs.command({
    command:'list',
    describe:"this will list up the command in the order",
    handler: function(){
        console.log("liste up the data")
    }
})

yargs.parse()
// console.log(yargs.argv)

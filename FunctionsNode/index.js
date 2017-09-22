const yargs = require('yargs')
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

////////////// Functions //////////////
/* 

add
delete
read
list
deleteall

*/

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add','Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list','Lists all the notes',{
	})
	.command('read','Read a note',{
		title: titleOptions
	})
	.command('delete','delete one',{
		title: titleOptions
	})
	.command('All-remove','delete all in the file',{
		//Not necesary	
	})
	.help()
	.argv;

let command = argv._[0];

if (command === "add") {
	console.log(command);
	notes.addNote(argv.title,argv.body);

} else if (command === "list") {
	console.log(command);
	let allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} notes(s), `);
	allNotes.forEach(note => {
		notes.logNote(note);
	});
} else if (command === "read") {
	console.log(command);
	let test = notes.getNote(argv.title);
	if (test){
		notes.logNote(test);
	}else{
		console.log("Title not found");
	}
	
} else if (command === "delete") {
	console.log(command);
	notes.removeone(argv.title);
	console.log(`Delete ${argv.title} `);
}

 else if (command === "All-remove"){

	console.log(command);
	notes.allremove(argv.title);
	console.log(`Delete all `);

}


else{
	console.log("Command not found");
}

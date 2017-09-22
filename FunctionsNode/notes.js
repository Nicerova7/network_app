console.log("Init module");

const fs = require('fs');

let fetchNotes = () => {
	try{
		let noteString = fs.readFileSync("notes-data.json");
		return JSON.parse(noteString);
	}catch(error){
		return [];
	}
}

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes))
};

let addNote = (title,body) => {
	
	let notes = fetchNotes();
	let note = {
		title : title,
		body : body
	};

	let duplicatesNotes = notes.filter((n) => n.title === title );

	if(duplicatesNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
	}

};

let removeone = (title) => {
	
	let notes = fetchNotes();
	let duplicatesNotes = notes.filter((n) => n.title !== title );
	fs.writeFileSync('notes-data.json',JSON.stringify(duplicatesNotes));

};

let allremove =()=>{

	fs.writeFileSync('notes-data.json',"");
	
};

let getAll =() =>{
	return fetchNotes();
};

let getNote = (title) =>{

	let notes = fetchNotes();

	let filteredNote = notes.filter(n => n.title === title);
	return filteredNote[0];
};

let logNote =(note) =>{
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}


module.exports = {
	addNote,
	getAll,
	getNote,
	logNote,
	removeone,
	allremove
};

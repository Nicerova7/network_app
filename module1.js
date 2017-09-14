console.log("Module 1")

var notes = [15,13,'n',14];

function enter(){
	for(i = 0; i<notes.length; i++) console.log("Enter note: " +notes[i]);
}

module.exports ={
	notes,
	enter
};

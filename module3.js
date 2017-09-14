var test=require('./module2');

var Note2=test.Notes;

var min = Note2[0];
var aux = 0;

function DeleteNote(){
	for( i=1 ; i<Note2.length; i++) if( min>Note2[i]){
						min = Note2[i];
						aux = i;
					}

}

DeleteNote();


console.log('Removed note: '+Note2[aux]);

module.exports ={
	
	Note2,
	aux
};

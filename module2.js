var test=require('./module1');

test.enter();

var Notes=test.notes;

function isLetter(s){
	return /^[a-zA-Z()]$/.test(s);
}

function CheckNote( ){
	for(i = 0; i < Notes.length;i++){
		if(isLetter(Notes[i])) Notes[i] = Math.round(Math.random()*20);
	}
   
}
CheckNote();

test.enter(); 

module.exports ={
	Notes
};


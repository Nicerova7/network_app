var test=require('./module3');
var http = require("http");

var Notenow =test.Note2;
var Aux = test.aux;
var ac = 0;

function Prom(){
	for ( i = 0; i<Notenow.length; i++) if(i!=Aux) ac = ac+Notenow[i];
	ac = ac/3;
}

Prom();
console.log('El promedio es '+ac);

//Conection to server

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	for ( i = 0; i<Notenow.length; i++) if(i!=Aux){
					response.write("Note: "+Notenow[i]+"\n");
				}
	response.write("\n \nProm: "+ac);	
	response.end();
	}).listen(8880);



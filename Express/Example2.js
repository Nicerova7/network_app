var Seneca = require('seneca')
var Web = require("seneca-web")
var Express =require('express')
var seneca = Seneca();
var server = Express();

var config={
	routes:{
		prefix: "/",
		pin: "role:api,cmd:*",
		map:{
			bazinga:{
			GET : true
			}
		}
	}
};

var config2={
	routes:{
		prefix: "/",
		pin: "role:api,cmd:*",
		map:{
			encriptado:{
			GET : true
			}
		}
	}
};

seneca.use(Web,{adapter:require('seneca-web-adapter-express'),context:server})
seneca.act("role:web",config)
seneca.act("role:web",config2)
seneca.add("role:api,cmd:bazinga",bazinga)
seneca.add("role:api,cmd:encriptado",encriptado)

server.listen(3000)


function bazinga(argv,done){

	done(null,{titulo: 'LOS DADOS ETERNOS',
		   linea1: 'Dios mío, estoy llorando el ser que vivo;',
		   linea2: 'me pesa haber tomádote tu pan;',
		   linea3: 'pero este pobre barro pensativo no es costra fermentada a tu costado',
		   linea4: 'tú no tienes Marías que se van!'
			});
}

//Encrypted
function encriptado(argv,done){

	done(null,{titulo: 'L0S D4D0S 3T3RN0S',
		   linea1: 'D10s m10, 3st0y ll0r4nd0 3l s3r qu3 v1v0;',
		   linea2: 'm3 p3s4 h4b3r t0m4d0t3 t5 p4n;',
		   linea3: 'p3r0 3st3 p0br3 b4rr0 p3ns4t1v0 n0 3s c0str4 f3rm3nt4d4 4 t5 c0st4d0',
		   linea4: 't5 n0 t13n3s M4r14s qu3 s3 v4n!'
			});
}

// Cesar Vallejo's Poem - Peru


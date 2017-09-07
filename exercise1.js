Alumnos = [
	{ Alumno: 'Cesar', Apellido: 'Vega', Codigo: '20141223E', ciclo: 2 },
	{ Alumno: 'Mario', Apellido: 'Montoya', Codigo:'20132123E', ciclo: 3 },
	{ Alumno: 'Fiorella', Apellido: 'Valdes', Codigo: '20131257F', ciclo: 3 },
	{ Alumno: 'Carlos',   Apellido: 'Flores', Codigo: '20141113G', ciclo: 2 },
	{ Alumno: 'Josselyn', Apellido: 'Quispe', Codigo: '20146229D', ciclo: 4 },
	{ Alumno: 'Jose', Apellido: 'Cueto', Codigo: '20141522M', ciclo: 4 },
	{ Alumno: 'Caty', Apellido: 'Vilca', Codigo: '20151002N', ciclo: 2 }
];



var numeros = Alumnos.length;
var array = new Array();

var cont = 0;

function Esta(x,y){

	for( k = 0; k<y.length ; k++){ if( x == y[k]) return false; }
	return true;
}

var indarray = 0;

for (i = 0; i< numeros ; i++){
	cont = 0;
	
	if( Esta(Alumnos[i].ciclo,array) ){ 
	array[indarray] = Alumnos[i].ciclo; 
	cont = cont+1; 
	for ( j = i+1; j < numeros ; j++){ 
		if( array[indarray] == Alumnos[j].ciclo) cont = cont+1;	
	}
	indarray = indarray+1;
	console.log("hay "+cont+" de "+Alumnos[i].ciclo+" ciclo"); 
							 
	}
}


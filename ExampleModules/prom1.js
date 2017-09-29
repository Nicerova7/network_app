var sumaAsync = (a,b) => {
	return new Promise((resolve,reject) => {
		setTimeout(()=> {
			//Check variable type
			if(typeof a === 'number' && typeof b === 'number'){
				// case positive
				resolve(a+b);
			}else {
				// other case
				reject('Arguments must be numbers');
			}
		},1500);
	})
}

module.exports ={
	
	sumaAsync
};




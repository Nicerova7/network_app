var test=require('./prom1');
var test2=require('./prom2');

test.sumaAsync(7,7)
	.then((res) => {
		console.log('Result: ', res )
		return test.sumaAsync(res,20);
	})
	
	.catch((errorMessage) => {
		console.log('Error: ', errorMessage )
});


test2.geocodeAddress('19146').then((location) => {
	console.log(JSON.stringify(location,undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
	auth: {
		user: 'admin',
		password: 'admin'
	}
});

const dbName = 'prueba';
const viewUrl = '_design/primera/_view/primera'
const viewUrl2 = '_design/segunda/_view/segunda'
const viewUrl3 = '_design/tercera/_view/tercera'

couch.listDatabases().then(function(dbs){
	console.log(dbs);
});

const app =  express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/primera', function(req,res){
	couch.get(dbName, viewUrl).then(
	function(data, headers, status){
		console.log(data.data.rows);
		res.render('index',{
			prueba:data.data.rows
		});
	},
	function(err){
		res.send(err);
	
	});
});

app.get('/segunda', function(req,res){
	couch.get(dbName, viewUrl2).then(
	function(data, headers, status){
		console.log(data.data.rows);
		res.render('index',{
			prueba:data.data.rows
		});
	},
	function(err){
		res.send(err);
	
	});
});

app.get('/tercera', function(req,res){
	couch.get(dbName, viewUrl3).then(
	function(data, headers, status){
		console.log(data.data.rows);
		res.render('index2',{
			prueba:data.data.rows
		});
	},
	function(err){
		res.send(err);
	
	});
});


app.listen(3000,function(){
	console.log('Server Started On Port 3000');
});


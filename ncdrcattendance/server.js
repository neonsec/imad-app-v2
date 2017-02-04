var bodyparser = require('body-parser')
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var _= require('lodash');
var mongoose = require('mongoose');
var app = express();
app.use(bodyparser.urlencoded({ extended: false })) 
app.use(bodyparser.json());
mongoose.Promise = global.Promise;
app.use(express.static('public'));
app.use(morgan());
app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'ui','index.html'))
})
app.get('/dist/js/bootstrap.js',(req,res)=>{
	res.sendFile(path.join(__dirname,'ui','dist','js','bootstrap.js'))
})
app.get('/dist/css/bootstrap.css',(req,res)=>{
	res.sendFile(path.join(__dirname,'ui','dist','css','bootstrap.css'))
})
app.get('/dist/bootstrap-clockpicker.min.css',(req,res)=>{
	res.sendFile(path.join(__dirname,'ui','dist','bootstrap-clockpicker.min.css'))
})
app.get('/dist/bootstrap-clockpicker.min.js',(req,res)=>{
	res.sendFile(path.join(__dirname,'ui','dist','bootstrap-clockpicker.min.js'))
})
app.get('/dist/js/jquery-3.1.1.min.js',(req,res)=>{
	res.sendFile(path.join(__dirname,'ui','dist','jquery-3.1.1.min.js'))
})
app.get('/dist/fonts/glyphicons-halflings-regular.ttf',(req,res)=>{
	res.sendFile(path.join(__dirname,'ui','dist','fonts','glyphicons-halflings-regular.ttf'))
})
app.get('/dist/fonts/glyphicons-halflings-regular.woff',(req,res)=>{
	res.sendFile(path.join(__dirname,'ui','dist','fonts','glyphicons-halflings-regular.woff'))
})
app.get('/dist/fonts/glyphicons-halflings-regular.woff2',(req,res)=>{
	res.sendFile(path.join(__dirname,'ui','dist','fonts','glyphicons-halflings-regular.woff2'))
})

mongoose.connect('mongodb://localhost:27017/ncdrc_att',(err)=>{
	if(err)
		console.log("Mongodb is connected, error: ",err);
	console.log("MongoDb successfully connected");
})
var userSchema = mongoose.Schema({
	name: String,
	teamname: String,
	email: String,
	intime: String,
	outtime: String

});
var User = mongoose.model('User',userSchema);
// var user = new User({
// 	name: "Fahid",
// 	teamname: "Intrusion",
// 	email: "fahidroid@gmail.com",
// 	intime: "18:00",
// 	outtime: "19:00"

// })
// user.save().then((doc)=>{
// 	console.log(doc)
// },(err)=>{
// 	console.log(err)
// })

app.post('/newentry',(req,res)=>{
	var out = _.split(req.body.outtime,':',3)
	
		var outtimeString = out[0]+":"+out[1];
		console.log(outtimeString);
		var user = new User({
		name: req.body.name,
		teamname: req.body.teamname,
		intime: new Date(),
		outtime: outtimeString
		
	})
	user.save().then((docs)=>{
		console.log(docs)
		res.send("<h1> Your attendance is marked </h1>");
	},(err)=>{
		console.log(err);
	})

})

app.listen(3000,()=>{
	console.log("Server is started in port 3000")
})

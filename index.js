var express = require('express')
var app = express()

const multer = require('multer');

/**
 * setting up the templating view engine
 */ 
 app.engine('html', require('ejs').renderFile);
 app.set('view engine', 'html');

/**
 * import routes/index.js
 * import routes/users.js
 */ 
var index = require('./routes/index')
var users = require('./routes/users')


 
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));


// const upload = multer({
// 	dest: 'uploads/' // this saves your file into a directory called "uploads"
//   });

app.use('/', index)
app.use('/users', users)

app.listen(3000, function(){
	console.log('Server running at port 3000: http://127.0.0.1:3000')
})

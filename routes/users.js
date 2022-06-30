var express = require('express')
var app = express()

const path = require('path')

const con = require('../config/db.config')

const multer = require("multer");
const imageStorage = multer.diskStorage({
    destination: 'uploads/', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
    }
});

const imageUpload = multer({
	storage: imageStorage,
	limits: {
	  fileSize: 1000000 
	}
}) 
// SHOW LIST OF USERS
app.get('/', function (req, res, next) {
	con.query('SELECT * FROM user ORDER BY id DESC', function (err, rows, fields) {
		if (err) {
			req.flash('error', err)
			res.render('user/list', {
				title: 'User List',
				data: ''
			})
		} else {
			res.render('user/list', {
				title: 'User List',
				data: rows
			})
		}
	})

})

// SHOW ADD USER FORM
app.get('/add', function (req, res) {
	message=''
	res.render('user/add', {
		title: 'Add New User',
		message:''
	})
})

// ADD NEW USER POST ACTION
app.post('/add',imageUpload.single("userImg"), function (req, res,) {
	var requestData = req.body;
	var name = requestData.name;
	console.log(name)
	var email = requestData.email;
	var contact = requestData.contact;
	var state = requestData.state;
	var city = requestData.city;
	var hobbies = []
	var hobby = requestData.hobby;
	hobbies.push(hobby)
	var hobbie = hobbies.join(',')

	var books = []
	var favouriteBook = requestData.book;
	books.push(favouriteBook)
	var fav_book = books.join(',')

	var salary = requestData.salary;
	var image = req.file.filename
	var sql = "INSERT INTO user (name,email,contact,state,city,hobbies,book,salary,image) VALUES ('" + name + "','" + email + "','" + contact + "' ,'" + state + "','" + city + "','" + hobbie + "','" + fav_book + "','" + salary + "','"+image+"')";
	con.query(sql, function (err) {
		if (err) throw err
		res.render('user/add', {
			title: 'Add New User',
			message:"add user successfully"
		})
	})
})

module.exports = app

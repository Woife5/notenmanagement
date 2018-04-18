const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')


app.use(express.static('public'))
app.use(bodyParser.json())

const con = mysql.createConnection({
	host: 'twv.energyfussl.at',
	port: '3306',
  user: 'Wolfg_nmgmt',
  password: 'sX3$ma12',
  database: 'Wolfgang_nmgmt',
	dateStrings: true
})

con.connect(function(err){
	if (err) throw err
})

app.listen(8008, function () {
  console.log('Webserver listening on port 8008!')
})

app.get('/api/classes',function(req, res){
	con.query('SELECT * FROM classes ORDER BY class ASC', function(err, result, fields){
		if(err) throw err
		res.json(result)
	})
})

app.get('/api/students', function(req, res){
	con.query('SELECT firstname, lastname FROM schueler ORDER BY lastname, firstname', function(err, result, fields){
		if(err) throw err
		res.json(result)
	})
})

app.get('/api/students/:class', function(req, res){
	let klasse = req.params.class
	con.query('SELECT firstname, lastname FROM schueler JOIN classes ON classes.ID = schueler.classfk WHERE class = "'+klasse+'" ORDER BY lastname, firstname', function(err, result, fields){
		if(err) throw err
		res.json(result)
	})
})

app.get('/api/classes/:class',function(req, res){
  let klasse = req.params.class
	con.query('SELECT results.tfk as testkey, AVG(grade) as avggrade, type, subject, maxpoints, date FROM results JOIN schueler JOIN tests JOIN classes ON results.tfk = tests.ID AND results.sfk = schueler.ID AND schueler.classfk = classes.ID where classes.class ="'+klasse+'" GROUP BY results.tfk', function(err, result, fields){
		if(err) throw err
		res.json(result)
	})
})

app.get('/api/test/:tid',function(req, res){
  let testid = req.params.tid
	con.query('SELECT grade, points, comment, firstname, lastname, type, subject, maxpoints, date, class FROM results JOIN schueler JOIN tests JOIN classes ON results.tfk = tests.ID AND results.sfk = schueler.ID AND schueler.classfk = classes.ID WHERE tests.ID ="'+testid+'"', function(err, result, fields){
		if(err) throw err
		res.json(result)
	})
})

app.get('/api/student/:student', function(req, res){
	let student = req.params.student
	console.log('Schueler: '+student)
	if(student.includes(' ')){
		let firstname = student.split(' ').slice(0, -1).join(' ') // Alle Vornamen, von StackOverflow
		let lastname = student.split(' ').slice(-1).join(' ') // Nachname, von StackOverflow
		con.query('SELECT * FROM schueler JOIN tests JOIN results ON results.tfk = tests.ID AND results.sfk = tests.ID where lastname LIKE "%'+lastname+'%" AND firstname LIKE "%'+firstname+'%"', function(err, result, fields){
			if(err) throw err
			res.json(result)
			return
		})
	}else{
		con.query('SELECT * FROM schueler schueler JOIN tests JOIN results ON results.tfk = tests.ID AND results.sfk = tests.ID where firstname LIKE "%'+student+'%" OR lastname LIKE "%'+student+'%"', function(err, result, fields){
			if(err) throw err
			res.json(result)
			return
		})
	}
})

app.post('/api/save',function(req, res){
	if(!req.body){
		res.status(200).json({'error':'no data','errordescription':'Im Body wurden keine Daten übergeben.'})
	}
})

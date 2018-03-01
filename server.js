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

app.get('/api/class/:class',function(req, res){
  let klasse = req.params.class
  res.send('Klasse: '+klasse)
})

app.get('/api/test/:tid',function(req, res){
  let testid = req.params.tid
  res.send('Test ID: '+testid)
})

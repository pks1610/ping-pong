const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Import DB Connection file
const mySqlConnection = require('./connection');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


app.all('/*', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

// POST game data to DB
app.post('/postGameData', function (req, res) {
	const { body: { playerOne, playerTwo, playerOneScore, playerTwoScore, winner, difference }} = req;
	var sql = `INSERT INTO game (playerOne, playerTwo, playerOneScore, playerTwoScore, winner, difference) VALUES ('${playerOne}', '${playerTwo}', ${playerOneScore}, ${playerTwoScore}, '${winner}', ${difference})`;  
	mySqlConnection.query(sql, (err, result) => {
		if(err) throw err;
		res.send(result);
	});
});

// Server Start
app.listen(3000, function () {
	console.log('Ping Pong Game listening on port 3000!');
});
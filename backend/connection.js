const mysql = require('mysql');

// DB create connection data
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'pratik',
	password: '1307',
	database: 'mydb',
	multipleStatements: true
});

// DB connecttion
connection.connect((err) => {
	if(!err){
		console.log('connection established');
		var sql = 'CREATE TABLE IF NOT EXISTS game (playerOne VARCHAR(255), playerTwo VARCHAR(255), playerOneScore INT(255), playerTwoScore INT(255), winner VARCHAR(255), difference INT(255))';
		connection.query(sql, function (err) {
			if (err) throw err;
		});
	}else{
		console.log(err);
	}
});

module.exports = connection;
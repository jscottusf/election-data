let state = 'North Carolina';
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootpass',
    database: 'election_db'
});

connection.connect(function(error) {
    if (error) throw error
    console.log('connected');
    readData();
});

function readData() {
    console.log("Selecting all data...\n");
    connection.query("SELECT * FROM 2020_general_election", function(err, response) {
        if (err) throw err;
        console.log('-----------------------------');
        for (var i = 0; i < 100; i+=2) {
            var pollingData = [
                response[i].state,
                response[i].pollster,
                response[i].answer + ' | ' + response[i + 1].answer,
                response[i].pct + ' | ' + response[i + 1].pct,
                '--------------------------------'
            ].join('\n');
            console.log(pollingData);
        }
        
        connection.end();
    });
}

function stateData() {
    console.log("Selecting all data...\n");
    connection.query("SELECT * FROM 2020_general_election WHERE state =?",
    [state],
     function(err, response) {
        if (err) throw err;
        console.log('-----------------------------');
        for (var i = 0; i < 50; i+=2) {
            var pollingData = [
                response[i].state,
                response[i].pollster,
                response[i].answer + ' | ' + response[i + 1].answer,
                response[i].pct + ' | ' + response[i + 1].pct,
                '--------------------------------'
            ].join('\n');
            console.log(pollingData);
        }
        
        connection.end();
    });
}




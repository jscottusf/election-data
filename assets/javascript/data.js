var mysql = require('mysql');
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
    getElectionData();
});

let polls = [];
let pollingData;


function getElectionData() {
    console.log("Selecting all data...\n");
    connection.query("SELECT * FROM 2020_general_election", function(err, response) {
        if (err) throw err;
        console.log('-----------------------------');
        for (var i = 0; i < response.length; i++) {
            var state = response[i].state;
            if (!state) {
                state = 'National Poll';
            }
            var pollster = response[i].pollster;
            var candidate = response[i].answer;
            var pct = response[i].pct;
            pollingData = {"state": state, "pollster": pollster, "candidate": candidate, "pct": pct};
            polls.push(pollingData);  
        }
        console.log(polls);
        connection.end();
    });
}

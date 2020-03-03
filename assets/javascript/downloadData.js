const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream("president_polls.csv");
const request = http.get("http://projects.fivethirtyeight.com/polls-page/president_primary_polls.csv", function(response) {
  response.pipe(file);
  console.log(response);
});

request();

const states = {
    "AL" : {"name": "Alabama", "pvi": "R+14", "ECval": 9},
    "AK" : {"name": "Alaska", "pvi": "R+9", "ECval": 3},
    "AZ" : {"name": "Arizona", "pvi": "R+5", "ECval": 11},
    "AR" : {"name": "Arkansas", "pvi": "R+15", "ECval": 6},
    "CA" : {"name": "California", "pvi": "D+12", "ECval": 55},
    "CO" : {"name": "Colorado", "pvi": "D+1", "ECval": 9},
    "CT" : {"name": "Connecticut", "pvi": "D+6", "ECval": 7},
    "DE" : {"name": "Deleware", "pvi": "D+6", "ECval": 3},
    "circle60" : {"name": "District of Columbia", "pvi": "D+30", "ECval": 3},
    "FL" : {"name": "Florida", "pvi": "R+2", "ECval": 29},
    "GA" : {"name": "Georgia", "pvi": "R+5", "ECval": 16},
    "HI" : {"name": "Hawaii", "pvi": "D+18", "ECval": 4},
    "ID" : {"name": "Idaho", "pvi": "R+19", "ECval": 4},
    "IL" : {"name": "Illinois", "pvi": "D+7", "ECval": 20},
    "IN" : {"name": "Indiana", "pvi": "R+9", "ECval": 11},
    "IA" : {"name": "Iowa", "pvi": "R+3", "ECval": 6},
    "KS" : {"name": "Kansas", "pvi": "R+13", "ECval": 6},
    "KY" : {"name": "Kentucky", "pvi": "R+15", "ECval": 8},
    "LA" : {"name": "Louisiana", "pvi": "R+11", "ECval": 8},
    "ME" : {"name": "Maine", "pvi": "D+3", "ECval": 4},
    "MD" : {"name": "Maryland", "pvi": "D+12", "ECval": 10},
    "MA" : {"name": "Massachusetts", "pvi": "D+12", "ECval": 11},
    "MI" : {"name": "Michigan", "pvi": "D+1", "ECval": 16},
    "MN" : {"name": "Minnesota", "pvi": "D+1", "ECval": 10},
    "MS" : {"name": "Mississippi", "pvi": "R+9", "ECval": 6},
    "MO" : {"name": "Missouri", "pvi": "R+9", "ECval": 10},
    "MT" : {"name": "Montana", "pvi": "R+11", "ECval": 3},
    "NE": {"name": "Nebraska", "pvi": "R+14", "ECval": 5},
    "NV": {"name": "Nevada", "pvi": "D+1", "ECval": 6},
    "NH" : {"name": "New Hampshire", "pvi": "D+1", "ECval": 4},
    "NJ" : {"name": "New Jersey", "pvi": "D+7", "ECval": 14},
    "NM" : {"name": "New Mexico", "pvi": "D+3", "ECval": 5},
    "NY" : {"name": "New York", "pvi": "D+12", "ECval": 29},
    "NC" : {"name": "North Carolina", "pvi": "R+3", "ECval": 15},
    "ND" : {"name": "North Dakota", "pvi": "R+17", "ECval": 3},
    "OH" : {"name": "Ohio", "pvi": "R+3", "ECval": 18},
    "OK" : {"name": "Oklahoma", "pvi": "R+20", "ECval": 7},
    "OR" : {"name": "Oregon", "pvi": "D+5", "ECval": 7},
    "PA" : {"name": "Pennsylvania", "pvi": "D+1", "ECval": 20},
    "RI" : {"name": "Rhode Island", "pvi": "D+10", "ECval": 4},
    "SC" : {"name": "South Carolina", "pvi": "R+8", "ECval": 9},
    "SD" : {"name": "South Dakota", "pvi": "R+14", "ECval": 3},
    "TN" : {"name": "Tennessee", "pvi": "R+14", "ECval": 11},
    "TX" : {"name": "Texas", "pvi": "R+8", "ECval": 38},
    "UT" : {"name": "Utah", "pvi": "R+20", "ECval": 6},
    "VT" : {"name": "Vermont", "pvi": "D+15", "ECval": 3},
    "VA" : {"name": "Virginia", "pvi": "D+1", "ECval": 13},
    "WA" : {"name": "Washington", "pvi": "D+7", "ECval": 12},
    "WV" : {"name": "West Virginia", "pvi": "R+19", "ECval": 5},
    "WI" : {"name": "Wisconsin", "pvi": "R+1", "ECval": 10},
    "WY" : {"name": "Wyoming", "pvi": "R+25", "ECval": 3}
};

//saving in case i mess this up
// function getNationalData(dem) {
//     if (!dem) {
//       dem = "Biden";
//     }
//     nationalPolls;
//     var opponentTotal = 0;
//     var opponentAverage = 0;
//     var trumpTotal = 0;
//     var trumpAverage = 0;
//     var pollCount = 0;
//     var displayCount = 0;
//       for (var i = 0; i < nationalPolls.length; i++) {
//         if (nationalPolls[i].answer === "Trump" && nationalPolls[i - 1].answer === dem) {
//           var trump = nationalPolls[i].answer;
//           var trumpNum = parseFloat(nationalPolls[i].pct);
//           var opponent = nationalPolls[i-1].answer;
//           var opponentNum = parseFloat(nationalPolls[i-1].pct);
//           var pollsterName = nationalPolls[i].display_name;
//           pollCount++;
//           displayCount++
//           opponentTotal += opponentNum;
//           trumpTotal += trumpNum;
//           if (displayCount < 5) {
//             var pollDiv = $('<div>');
//             var pollsterDiv = $('<div>' + pollsterName + '</div>');
//             var pollResultDiv = $('<div>' + opponent + ' ' + opponentNum + ' | ' + trump + ' ' + trumpNum + '</div><hr>');
//             $(pollDiv).append(pollsterDiv, pollResultDiv);
//             $('#polls').append(pollDiv);
//           }
//         }
//       }
//       opponentAverage = opponentTotal / pollCount;
//       opponentAverage = opponentAverage.toFixed(2)+"%";
//       trumpAverage = trumpTotal / pollCount;
//       trumpAverage = trumpAverage.toFixed(2)+"%";
//       var natAverageDiv = $('<div>');
//       var headDiv = $('<h4>National Average</h4>')
//       var pollAverageDiv = $('<div>' + opponent + ': ' + opponentAverage + ' | ' + trump + ': ' + trumpAverage + '</div><hr><h4>Recent Polls:</h4><hr>');
//       $(natAverageDiv).append(headDiv, pollAverageDiv);
//       $('#polls').prepend(natAverageDiv);
//       console.log(opponent + ' | ' + trump);
//       console.log(opponentAverage + ' | ' + trumpAverage);
//       $('#demName').empty();
//       $('#demName').append(dem + ' ');
//     }

// function sortData() {
//   //console.log(polls);
//   for (var i = 0; i < allPolls.length; i++) {
//     if (allPolls[i].state === "") {
//       allPolls[i].state += "National"
//       nationalPolls.push(allPolls[i]);
//     }
//     else {
//       statePolls.push(allPolls[i]);
//     }
//   }
//   //console.log(nationalPolls);
//   //console.log(statePolls);
// }
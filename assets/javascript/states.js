const states = {
    "AL" : {"name": "Alabama", "pvi": "R+14", "ECval": 9, "arr": 0},
    "AK" : {"name": "Alaska", "pvi": "R+9", "ECval": 3, "arr": 1},
    "AZ" : {"name": "Arizona", "pvi": "R+5", "ECval": 11, "arr": 2},
    "AR" : {"name": "Arkansas", "pvi": "R+15", "ECval": 6, "arr": 3},
    "CA" : {"name": "California", "pvi": "D+12", "ECval": 55, "arr": 4},
    "CO" : {"name": "Colorado", "pvi": "D+1", "ECval": 9, "arr": 5},
    "CT" : {"name": "Connecticut", "pvi": "D+6", "ECval": 7, "arr": 6},
    "DE" : {"name": "Deleware", "pvi": "D+6", "ECval": 3, "arr": 7},
    "circle60" : {"name": "District of Columbia", "pvi": "D+30", "ECval": 3, "arr": 8},
    "FL" : {"name": "Florida", "pvi": "R+2", "ECval": 29, "arr": 9},
    "GA" : {"name": "Georgia", "pvi": "R+5", "ECval": 16, "arr": 10},
    "HI" : {"name": "Hawaii", "pvi": "D+18", "ECval": 4, "arr": 11},
    "ID" : {"name": "Idaho", "pvi": "R+19", "ECval": 4, "arr": 12},
    "IL" : {"name": "Illinois", "pvi": "D+7", "ECval": 20, "arr": 13},
    "IN" : {"name": "Indiana", "pvi": "R+9", "ECval": 11, "arr":140},
    "IA" : {"name": "Iowa", "pvi": "R+3", "ECval": 6, "arr": 15},
    "KS" : {"name": "Kansas", "pvi": "R+13", "ECval": 6, "arr":16},
    "KY" : {"name": "Kentucky", "pvi": "R+15", "ECval": 8, "arr": 17},
    "LA" : {"name": "Louisiana", "pvi": "R+11", "ECval": 8, "arr": 18},
    "ME" : {"name": "Maine", "pvi": "D+3", "ECval": 4, "arr": 19},
    "MD" : {"name": "Maryland", "pvi": "D+12", "ECval": 10, "arr": 20},
    "MA" : {"name": "Massachusetts", "pvi": "D+12", "ECval": 11, "arr": 21},
    "MI" : {"name": "Michigan", "pvi": "D+1", "ECval": 16, "arr": 22},
    "MN" : {"name": "Minnesota", "pvi": "D+1", "ECval": 10, "arr": 23},
    "MS" : {"name": "Mississippi", "pvi": "R+9", "ECval": 6, "arr": 24},
    "MO" : {"name": "Missouri", "pvi": "R+9", "ECval": 10, "arr": 25},
    "MT" : {"name": "Montana", "pvi": "R+11", "ECval": 3, "arr": 26},
    "NE": {"name": "Nebraska", "pvi": "R+14", "ECval": 5, "arr": 27},
    "NV": {"name": "Nevada", "pvi": "D+1", "ECval": 6, "arr": 28},
    "NH" : {"name": "New Hampshire", "pvi": "D+1", "ECval": 4, "arr": 29},
    "NJ" : {"name": "New Jersey", "pvi": "D+7", "ECval": 14, "arr": 30},
    "NM" : {"name": "New Mexico", "pvi": "D+3", "ECval": 5, "arr": 31},
    "NY" : {"name": "New York", "pvi": "D+12", "ECval": 29, "arr": 32},
    "NC" : {"name": "North Carolina", "pvi": "R+3", "ECval": 15, "arr": 33},
    "ND" : {"name": "North Dakota", "pvi": "R+17", "ECval": 3, "arr": 34},
    "OH" : {"name": "Ohio", "pvi": "R+3", "ECval": 18, "arr": 35},
    "OK" : {"name": "Oklahoma", "pvi": "R+20", "ECval": 7, "arr": 36},
    "OR" : {"name": "Oregon", "pvi": "D+5", "ECval": 7, "arr": 37},
    "PA" : {"name": "Pennsylvania", "pvi": "D+1", "ECval": 20, "arr": 38},
    "RI" : {"name": "Rhode Island", "pvi": "D+10", "ECval": 4, "arr": 39},
    "SC" : {"name": "South Carolina", "pvi": "R+8", "ECval": 9, "arr": 40},
    "SD" : {"name": "South Dakota", "pvi": "R+14", "ECval": 3, "arr": 41},
    "TN" : {"name": "Tennessee", "pvi": "R+14", "ECval": 11, "arr": 42},
    "TX" : {"name": "Texas", "pvi": "R+8", "ECval": 38, "arr": 43},
    "UT" : {"name": "Utah", "pvi": "R+20", "ECval": 6, "arr": 44},
    "VT" : {"name": "Vermont", "pvi": "D+15", "ECval": 3, "arr": 45},
    "VA" : {"name": "Virginia", "pvi": "D+1", "ECval": 13, "arr": 46},
    "WA" : {"name": "Washington", "pvi": "D+7", "ECval": 12, "arr": 47},
    "WV" : {"name": "West Virginia", "pvi": "R+19", "ECval": 5, "arr": 48},
    "WI" : {"name": "Wisconsin", "pvi": "R+1", "ECval": 10, "arr": 49},
    "WY" : {"name": "Wyoming", "pvi": "R+25", "ECval": 3, "arr": 50}
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

// function setStateColors() {
//     var leanD = '#7fb9f3';
//     var likelyD = '#6494c4';
//     var safeD = '#5175ac';
//     var leanR = '#ffc2b5';
//     var likelyR = '#fe9987';
//     var safeR = '#fe6a59';
//     var demEC = 0;
//     var repEC = 0;
//     for (var key in states) {
//       var pvi = states[key].pvi.split('+');
//       var party = pvi[0];
//       var lean = parseFloat(pvi[1]);
//       if (party === "R" && lean <=2) {
//         $('#' + key + '').css('fill', leanR);
//         repEC += states[key].ECval;
//       }
//       else if (party === "R" && lean > 2  && lean <= 5) {
//         $('#' + key + '').css('fill', likelyR);
//         repEC += states[key].ECval;
//       }
//       else if (party === "R" && lean > 5) {
//         $('#' + key + '').css('fill', safeR);
//         repEC += states[key].ECval;
//       }
//       else if (party === "D" && lean <=2) {
//         $('#' + key + '').css('fill', leanD);
//         demEC += states[key].ECval;
//       }
//       else if (party === "D" && lean > 2  && lean <= 5) {
//         $('#' + key + '').css('fill', likelyD);
//         demEC += states[key].ECval;
//       }
//       else if (party === "D" && lean > 5) {
//         $('#' + key + '').css('fill', safeD);
//         demEC += states[key].ECval;
//       }  
//     }
//     $('#DEMcount').empty();
//     $('#DEMcount').append(demEC);
//     $('#GOPcount').empty();
//     $('#GOPcount').append(repEC);
//   }
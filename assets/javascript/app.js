// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqjLNRonSRsP1VbZAxpx9rDnfv3NuDwAc",
  authDomain: "election-data-2020.firebaseapp.com",
  databaseURL: "https://election-data-2020.firebaseio.com",
  projectId: "election-data-2020",
  storageBucket: "election-data-2020.appspot.com",
  messagingSenderId: "627040919383",
  appId: "1:627040919383:web:d569ee8fcdaae97cbb6812"
};
let database;
let nationalPolls = [];
let electoralCollege = [];
let allPolls;
let polls = [];
let statePolls = [];
states;
let demName = "Biden";
let pollType = "National";
let click;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
database = firebase.database();

function updateElectionData() {
  $.ajax({
      url: 'https://projects.fivethirtyeight.com/polls-page/president_polls.csv',
      async: false,
      success: function(csvd) {
          data = $.csv.toObjects(csvd);
      },
      dataType: 'text',
      complete: function() {
        allPolls = data;
        sortData();
      }
  })
}

function sortData() {
  //console.log(polls);
  for (var i = 0; i < allPolls.length; i++) {
    if (allPolls[i].state === "") {
      allPolls[i].state += "National";
      nationalPolls.push(allPolls[i]);
    }
    else {
      statePolls.push(allPolls[i]);
    }
  }
}

let State = function(key, states) {
  this.ab = key;
  this.name = states[key].name;
  this.pvi = states[key].pvi;
  this.bidenTotal = 0;
  this.trumpBidenTotal = 0;
  this.bidenPollCount = 0;
  this.bidenAverage = function() {
    bidenAverage = this.bidenTotal / this.bidenPollCount;
    bidenAverage = bidenAverage.toFixed(2)+"%";
    return bidenAverage;
  };
  this.trumpBidenAverage = function() {
    trumpBidenAverage = this.trumpBidenTotal / this.bidenPollCount;
    trumpBidenAverage = trumpBidenAverage.toFixed(2)+"%";
    return trumpBidenAverage;
  };
  this.sandersTotal = 0;
  this.trumpSandersTotal = 0;
  this.sandersPollCount = 0;
  this.sandersAverage = function() {
    sandersAverage = this.sandersTotal / this.sandersPollCount;
    sandersAverage = sandersAverage.toFixed(2)+"%";
    return sandersAverage;
  };
  this.trumpSandersAverage = function() {
    trumpSandersAverage = this.trumpSandersTotal / this.sandersPollCount;
    trumpSandersAverage = trumpSandersAverage.toFixed(2)+"%";
    return trumpSandersAverage;
  };
}

function esimateOutcome() {
  for (var key in states) {
    var state = states[key].name;
    state = new State(key, states);
    electoralCollege.push(state);
  }
  for (var i = 0; i < electoralCollege.length; i++) {
    for (var j = 0; j < statePolls.length; j++) {
      if (electoralCollege[i].name === statePolls[j].state) {
        if (statePolls[j].answer === "Trump" && statePolls[j - 1].answer === "Biden") {
          electoralCollege[i].trumpBidenTotal += parseFloat(statePolls[j].pct);
          electoralCollege[i].bidenTotal += parseFloat(statePolls[j-1].pct);
          electoralCollege[i].bidenPollCount++
        }
        if (statePolls[j].answer === "Trump" && statePolls[j - 1].answer === "Sanders") {
          electoralCollege[i].sandersBidenTotal += parseFloat(statePolls[j].pct);
          electoralCollege[i].sandersTotal += parseFloat(statePolls[j-1].pct);
          electoralCollege[i].sandersPollCount++;
        }
      }
    }
  }
  console.log(electoralCollege[33].bidenAverage() + ' | ' + electoralCollege[33].trumpBidenAverage());
}

function appendData(dem, state) {
  polls = [];
  for (var i = 0; i < allPolls.length; i++) {
    if (allPolls[i].state === state) {
      polls.push(allPolls[i]);
    }
  }
  var opponentTotal = 0;
  var opponentAverage = 0;
  var trumpTotal = 0;
  var trumpAverage = 0;
  var pollCount = 0;
  var displayCount = 0;
  if (polls.length > 0) {
    for (var i = 0; i < polls.length; i++) {
      if (polls[i].answer === "Trump" && polls[i - 1].answer === dem) {
        var trump = polls[i].answer;
        var trumpNum = parseFloat(polls[i].pct);
        var opponent = polls[i-1].answer;
        var opponentNum = parseFloat(polls[i-1].pct);
        var pollsterName = polls[i].display_name;
        var state = polls[i].state;
        pollCount++;
        displayCount++
        opponentTotal += opponentNum;
        trumpTotal += trumpNum;
        if (displayCount < 7) {
          var pollDiv = $('<div>');
          var pollsterDiv = $('<div>' + pollsterName + '</div>');
          var pollResultDiv = $('<div>' + opponent + ' ' + opponentNum + ' | ' + trump + ' ' + trumpNum + '</div><hr>');
          $(pollDiv).append(pollsterDiv, pollResultDiv);
          $('#polls').append(pollDiv);
        }
      }
    }
  }
  else {
      $('#polls').html('<div>No polling data available yet</div>')
  }
  if (polls.length > 0) {
    opponentAverage = opponentTotal / pollCount;
    opponentAverage = opponentAverage.toFixed(2)+"%";
    trumpAverage = trumpTotal / pollCount;
    trumpAverage = trumpAverage.toFixed(2)+"%";
    var natAverageDiv = $('<div>');
    var headDiv = $('<h4>' + state + ' Average</h4>')
    var pollAverageDiv = $('<div>' + opponent + ' ' + opponentAverage + ' | ' + trump + ' ' + trumpAverage + '</div><hr><h4>Recent Polls:</h4><hr>');
  }
  else {
    var pvi = states[click].pvi.split('+');
    var party = pvi[0];
    var lean = parseFloat(pvi[1]);
    if (party === 'R') {
      trumpAverage = (50 + lean);
      opponentAverage = (50 - lean);
    }
    else {
      trumpAverage = (50 - lean);
      opponentAverage = (50 + lean);
    }
    var natAverageDiv = $('<div>');
    var headDiv = $('<h4>' + state + ' Projected Outcome Based on Partisan Lean</h4>')
    var pollAverageDiv = $('<div>' + dem + ' ' + opponentAverage + ' | Trump ' + trumpAverage + '</div><hr><h4>Recent Polls:</h4><hr>');
  }
  
  $(natAverageDiv).append(headDiv, pollAverageDiv);
  $('#polls').prepend(natAverageDiv);
  $('#demName').empty();
  $('#demName').append(dem + ' ');
  }
  

function setStateColors() {
  var leanD = '#7fb9f3';
  var likelyD = '#6494c4';
  var safeD = '#5175ac';
  var leanR = '#ffc2b5';
  var likelyR = '#fe9987';
  var safeR = '#fe6a59';
  var demEC = 0;
  var repEC = 0;
  for (var key in states) {
    var pvi = states[key].pvi.split('+');
    var party = pvi[0];
    var lean = parseFloat(pvi[1]);
    if (party === "R" && lean <=2) {
      $('#' + key + '').css('fill', leanR);
      repEC += states[key].ECval;
    }
    else if (party === "R" && lean > 2  && lean <= 5) {
      $('#' + key + '').css('fill', likelyR);
      repEC += states[key].ECval;
    }
    else if (party === "R" && lean > 5) {
      $('#' + key + '').css('fill', safeR);
      repEC += states[key].ECval;
    }
    else if (party === "D" && lean <=2) {
      $('#' + key + '').css('fill', leanD);
      demEC += states[key].ECval;
    }
    else if (party === "D" && lean > 2  && lean <= 5) {
      $('#' + key + '').css('fill', likelyD);
      demEC += states[key].ECval;
    }
    else if (party === "D" && lean > 5) {
      $('#' + key + '').css('fill', safeD);
      demEC += states[key].ECval;
    }  
  }
  $('#DEMcount').empty();
  $('#DEMcount').append(demEC);
  $('#GOPcount').empty();
  $('#GOPcount').append(repEC);

}

$("path, circle").hover(function(e) {
  //$(this).data('info').empty();
  var state = $(this).attr('id');
  var stateName = states[state].name;
  var partisanLean = states[state].pvi;
  //console.log(state + ' | ' + partisanLean);
  var infoDiv = $('<div>');
  var stateNameDiv = $('<div>State: ' + stateName + '</div>');
  var ecDiv = $('<div>Electoral Votes: ' + states[state].ECval + '</div>');
  var partisanLeanDiv = $('<div>Partisan Lean: ' + partisanLean + '</div>');
  $(infoDiv).append(stateNameDiv, partisanLeanDiv, ecDiv);
  $('#info-box').css('display','block');
  $('#info-box').html(infoDiv);
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});


var infobox= document.getElementById('info-box');

window.onmousemove = function (e) {
  var x = e.clientX,
  y = e.clientY;
  infobox.style.top = (y - 90) + 'px';
  infobox.style.left = (x - 90) + 'px';
};

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}

//on form click
$('#go').on('click', function(event) {
  event.preventDefault();
  //scroll down to #breweries <div>
  $('html, body').animate({
      scrollTop: $("#demName").offset().top - 10
 }, 500);
});

$('path').on('click', function(event) {
  event.preventDefault();
  $('#polls').empty();
  click = $(this).attr('id');
  pollType = states[click].name;
  appendData(demName, pollType);
})

$('.dropdown-item').on('click', function(event) {
  event.preventDefault();
  demName = $(this).attr('id');
  $('#polls').empty();
  appendData(demName, pollType);
})

$('#National-Polls').on('click', function(event) {
  event.preventDefault();
  $('#polls').empty();
  pollType = "National"
  appendData(demName, pollType);
})

setStateColors();
updateElectionData();
esimateOutcome();
appendData(demName, pollType);
//console.log(statePolls);
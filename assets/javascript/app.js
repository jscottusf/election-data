// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDqjLNRonSRsP1VbZAxpx9rDnfv3NuDwAc",
//   authDomain: "election-data-2020.firebaseapp.com",
//   databaseURL: "https://election-data-2020.firebaseio.com",
//   projectId: "election-data-2020",
//   storageBucket: "election-data-2020.appspot.com",
//   messagingSenderId: "627040919383",
//   appId: "1:627040919383:web:d569ee8fcdaae97cbb6812"
// };
// let database;
let polls;
let pollingData = "National Polls";
states;
// Initialize Firebase

// firebase.initializeApp(firebaseConfig);
// database = firebase.database();

function updateElectionData() {
  $.ajax({
      url: 'http://projects.fivethirtyeight.com/polls-page/president_polls.csv',
      async: false,
      success: function(csvd) {
          data = $.csv.toObjects(csvd);
      },
      dataType: 'text',
      complete: function() {
          polls = JSON.stringify(data, null, 2);
          console.log(polls);
          //console.log(data);
      }
  })
}

function getPollingData() {
  for (var i = 0; i < polls.length; i++) {
    if (!polls[i].state) {
      console.log('national polls');
    }
  }
}
//fivethirtyeight += states[key].ECval;

function setStateColors() {
  var leanD = 'd1d8f5';
  var likelyD = '5175ac';
  var safeD = '056caa';
  var leanR = 'f4907e';
  var likelyR = 'f87565';
  var safeR = 'c62523';
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

setStateColors();
//updateElectionData();
//getPollingData();

$("path, circle").hover(function(e) {
  //$(this).data('info').empty();
  var state = $(this).attr('id');
  var stateName = states[state].name;
  var partisanLean = states[state].pvi;
  console.log(state + ' | ' + partisanLean);
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

$('path').on('click', function() {
  var state = $(this).attr('id');
  console.log(state);
})

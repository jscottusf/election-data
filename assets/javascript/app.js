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
let polls;
partisanLean;
states;
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
database = firebase.database();

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

console.log(partisanLean);
//updateElectionData();

$("path, circle").hover(function(e) {
  //$(this).data('info').empty();
  var state = $(this).attr('id');
  var stateName = states[state];
  //console.log(state + stateName);
  var infoDiv = $('<div>');
  var stateNameDiv = $('<div>State: ' + stateName + '</div>');
  //var newDiv = $('<div>BLAH BLAH BLAH</div>')
  var partisanLeanDiv = $('<div>Partisan Lean: ' + partisanLean[stateName] + '</div>');
  $(infoDiv).append(stateNameDiv, partisanLeanDiv);
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

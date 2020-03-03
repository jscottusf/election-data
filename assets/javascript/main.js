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
// Initialize Firebase
states;
firebase.initializeApp(firebaseConfig);
database = firebase.database();

function pullData() {
  $.ajax({
      url: 'http://projects.fivethirtyeight.com/polls-page/president_polls.csv',
      async: false,
      success: function(csvd) {
          data = $.csv.toObjects(csvd);
      },
      dataType: 'text',
      complete: function() {
          var polls = JSON.stringify(data, null, 2);
          console.log(polls);
      }
  })
}

pullData();

$("path, circle").hover(function(e) {
  var state = $(this).attr('id');
  console.log(state);
  appendStateData(state);
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-200);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/0.5);
  
  console.log()
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}

function appendStateData(state) {
  var ref = state;
  state = states[ref];
  console.log(state);
    
}

$('path').on('click', function() {
  var state = $(this).attr('id');
  console.log(state);
})

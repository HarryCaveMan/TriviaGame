//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.

window.onload = function() {

  //  Click events are done for us:
  board.write($("h1"),"Math Trivia",0,100);
  $("#title").click(game.start);
  $("#reset").click(game.reset);
};

var board = {
  
  right:$("#right"),
  wrong:$("#wrong"),
  numRight:$("#numRight"),
  numWrong:$("#numWrong"),

  write:function (target, message, index, interval) {   
    if (index < message.length) {
      target.append(message[index++]);
      setTimeout(function () { board.write(target, message, index, interval); }, interval);
    }
  }
}

//  Variable that will hold our setInterval that runs the timer
var intervalId;

//prevents the clock from being sped up unnecessarily
var inGame = false;
var clockRunning = false;

//  Our game object.
var game = {

  questions:[],
  answers:[],
  time: 3,
  right: 0,
  wrong:0,

  reset: function() {

    game.time = 3;
    game.right = 0;
    game.wrong = 0;

  },

  start: function() {

      if (!inGame) {
       intervalId=setInterval(game.count,1000);
        clockRunning= !clockRunning;
      }

      setTimeout(function(){
        board.write(board.right,"Right: ",100);
        board.write(board.wrong,"Wrong: ",100);
        board.write(board.numRight,"0",100);
        board.write(board.numWrong,"0",100);
        console.log("it's board.write");
      },3000);

  },

  count: function() {
      while(game.time>0){
      game.time--;
      var displayTime=game.timeConverter(game.time);
      $('#timer').text(displayTime);
      }
      $("#timer").empty();
        },

  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
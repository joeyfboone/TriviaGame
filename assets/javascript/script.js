//var i=0;
var select_answer;
var clicked_id;
var counter_start = 30;
var result_time = 6;
var number = counter_start;
var losses = 0;
var wins = 0;
var no_answer = 0;
var MyQuestion = [{
    question: "What show had a talking car?",
    gif: "https://media.tenor.com/images/0de1530891bb6656145252e790c27bbe/tenor.gif",
    info: "Answer is A - Knight Rider. Starring David Hasslehoff.",
    answers: {
        a:"Knight Rider",
        b:"Baywatch",
        c:"Saved By The Bell",
        d:"Friends"
    },
    correctAnswer: "a",
},
{
    question: "In the Baywatch Spinoff called Baywatch Night, what was Mitch's occupation?",
    gif: "http://68.media.tumblr.com/tumblr_m4r2rhNsi31qb7sd5o1_400.gif",
    info: "Answer is B - Mitch was a Private Investigator",
    answers: {
        a:"Consultant",
        b:"Private Investigator",
        c:"Security Guard",
        d:"Lifeguard Instructor"
    },
    correctAnswer: "b"
},
{
    question: "In the 2017 movie Baywatch, David Hasslehoff made a cameo. What was his occupation?",
    gif: "https://68.media.tumblr.com/cbf82c3cac470916e9c9b1da76604d07/tumblr_opowaxCo4m1wn30bno1_500.gif",
    info: "Answer is C - He worked in a cell phone store.",
    answers: {
        a:"Used Car Salesman",
        b:"Private Investigator",
        c:"Cell Phone Salesman",
        d:"Police Officer"
    },
    correctAnswer: "c"
},
]
function stop() {
    number = counter_start;
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  console.log("stop");
}



function between(){
    stop()
    console.log("Here"+i);
    $("#answer_buttons").hide();
    $("#gif").html('<img src="'+ MyQuestion[i].gif + '" width="200">');
    console.log("Where is my gif "+MyQuestion[i].gif)
    runbetween(result_time=5);
 
}
function runbetween() {  
      console.log("Runbetween"+i);
    intervalId = setInterval(decrementbetween, 1000);
}

  //  The decrement function.
  function decrementbetween() {
    console.log("decrementbetween"+i)
    //  Decrease number by one.
    console.log("result_time"+result_time)
    result_time=result_time-1;
    console.log("result_time"+result_time)

    //  Show the number in the #show-number tag.
    $("#timer").html("<h2>"+"Next Question in: " + result_time + "</h2>");

    if (result_time == 0) { console.log("result_time is 0"+result_time)
        
        
       stop();
       play(i==i++);}
    
    }

function reply_click(clicked_id)
{
    console.log(clicked_id);
    select_answer = clicked_id;
    console.log(select_answer);
}

$("#answer_buttons").hide();
$("#timer").hide();
    

$("#start").on("click", function() {
    console.log("start")
    $("#start").hide();
     play(i=0);
})

        function play(){console.log("play"+i)
        run();
        
            
        
  //      for (var i = 0; i < MyQuestion.length; i++) {
 //          if(number > 0){
            console.log(MyQuestion[i])
 //          }
            $("#gif").html("");
            $("#info").html("");
            $("#question").html("Question " + (i+1) + ": "+ MyQuestion[i].question); 
            $("#answers").html("A " + ": "+ MyQuestion[i].answers.a+"<br>"+ "B " + ": "+ MyQuestion[i].answers.b+"<br>"+"C " + ": "+ MyQuestion[i].answers.c+"<br>"+"D " + ": "+ MyQuestion[i].answers.d+"<br>")
            $("#timer").show();
            $("#answer_buttons").show();

            $("#answer_buttons").on("click", function() {
               console.log("answer made")
      
               function reply_click(clicked_id)
               {
                   console.log(clicked_id);
               }

  
              if (select_answer===MyQuestion[i].correctAnswer){console.log("YEs")
                $("#info").html("You are correct! "+MyQuestion[i].info)
              between()
              wins == wins++


              ;

            }else{$("#info").html("You are incorrect! "+MyQuestion[i].info);
            losses == losses++;
            
        
            between()

        console.log(losses)}
            
               console.log(select_answer);

            })
            
            
            
        }
   



        function run() {
            intervalId = setInterval(decrement, 1000);
        }
      
          //  The decrement function.
          function decrement() {
            console.log("decrement");
            //  Decrease number by one.
            number--;
      
            //  Show the number in the #show-number tag.
            $("#timer").html("<h2>"+"Timer: " + number + "</h2>");
      
      
            //  Once number hits zero...
            if (number === 0) {console.log ("end")
            stop();
            $("#info").html("You ran out of time. "+MyQuestion[i].info);
            console.log(MyQuestion[i].info);

//            alert("You Ran out of time on that question. Click OK to Continue");
            no_answer == no_answer++;

            console.log(no_answer);
            between();
            
            }

            
      //        console.log(number);
            }

    //  The stop function


   //           $("#start").on("click", function() {
  //              $('#status').text('Status: In Progress')
  //              total_value = total_value + diamond_1_value;
  //                  console.log ("total value:" + total_value);
  //                  $("#total_value").html("Total Value: "+total_value);
  //                  $("#target_no").html("Target Number: "+random_target);
  ///                  test();
  //               })
            
            
           //          function play (){
  //              if (total_value < random_target) {}}}   


 // if (i=MyQuestion.length) {console.log(i+" "+" "+MyQuestion.length+" "+"END GAME")
 //   $("#start").show();
 function endgame()
 {  stop()
    $("#gif").html("");
    $("#info").html("");
    $("#question").html("Correct: "+wins+" Incorrect: "+losses+" Unanswered: "+no_answer); 
    $("#answers").html("")
    $("#timer").hide();
    $("#answer_buttons").hide();
    $("#start").show();
 }
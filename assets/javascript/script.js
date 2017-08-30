var counter_start = 5;
var number = counter_start;
var losses = 0;
var wins = 0;
var no_answer = 0;
var MyQuestion = [{
    question: "Question 1",
    info: "Here is the info for Question 1",
    answers: {
        a:"A Answer",
        b:"B Answer",
        c:"C Answer",
        d:"D Answer"
    },
    correctAnswer: "a",
},
{
    question: "Question 2",
    answers: {
        a:"A Answer 2",
        b:"B Answer",
        c:"C Answer",
        d:"D Answer"
    },
    correctAnswer: "b"
},
{
    question: "Question 3",
    answers: {
        a:"A Answer 3",
        b:"B Answer",
        c:"C Answer",
        d:"D Answer"
    },
    correctAnswer: "c"
},
]

$("#answer_buttons").hide();
    

$("#start").on("click", function() {
    console.log("start")
    $("#start").hide();
     play(i=0);
})

        function play(){
        run();

  //      for (var i = 0; i < MyQuestion.length; i++) {
 //          if(number > 0){
   console.log(MyQuestion[i])
 //          }
            $("#question").html("Question " + (i+1) + ": "+ MyQuestion[i].question); 
            $("#answers").html("A " + ": "+ MyQuestion[i].answers.a+"<br>"+ "B " + ": "+ MyQuestion[i].answers.b+"<br>"+"C " + ": "+ MyQuestion[i].answers.c+"<br>"+"D " + ": "+ MyQuestion[i].answers.d+"<br>")
            
            $("#answer_buttons").show();

             $("#answer_buttons").on("click", function() {
               console.log("answer made")
            })
            
            
            
        }
   



        function run() {
            intervalId = setInterval(decrement, 1000);
        }
      
          //  The decrement function.
          function decrement() {
      
            //  Decrease number by one.
            number--;
      
            //  Show the number in the #show-number tag.
            $("#timer").html("<h2>"+"Timer: " + number + "</h2>");
      
      
            //  Once number hits zero...
            if (number === 0) {console.log ("end")
            stop();
            alert("You Ran out of time on that question. Click OK to Continue");
            no_answer == no_answer++;
            console.log(no_answer);
            play(i==i++);
            }

            
              console.log(number);
            }

    //  The stop function
    function stop() {
                number = counter_start;
              //  Clears our intervalId
              //  We just pass the name of the interval
              //  to the clearInterval function.
              clearInterval(intervalId);
              console.log("stop");
            }

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

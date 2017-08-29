var number = 30;
var MyQuestion = [{
    question: "Question 1",
    answers: {
        a:"A Answer",
        b:"B Answer",
        c:"C Answer",
        d:"D Answer"
    },
    correctAnswer: "a"
},
{
    question: "Question 2",
    answers: {
        a:"A Answer",
        b:"B Answer",
        c:"C Answer",
        d:"D Answer"
    },
    correctAnswer: "b"
},
{
    question: "Question 3",
    answers: {
        a:"A Answer",
        b:"B Answer",
        c:"C Answer",
        d:"D Answer"
    },
    correctAnswer: "c"
},
]

$("#start").on("click", function() {
    console.log("start")
     play();
})

        function play (){
        run();
        var qtext = "";
        for (var i = 0; i < MyQuestion.length; i++) {
            console.log(MyQuestion[i]);
            qtext = MyQuestion.question;
            $("#question").html("qtext " + i + ": "+qtext);

        }
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
            if (number === 0) {console.log ("end")}

            
              console.log(number);
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

// global variables
//--------------------------------------------------------------------------
// arrays and variables holding data
var numb1 = Math.floor(Math.random()*11+1);
var numb2 = Math.floor(Math.random()*11+1);
var numb3 = Math.floor(Math.random()*11+1);
var numb4 = Math.floor(Math.random()*11+1);
var randomnumb = Math.floor(Math.random()*101+19);

// game counters
var wins = 0;
var losses = 0;
var usertotal = 0;



// functions
//--------------------------------------------------------------------------
// $(document).ready(function() {
  
// //   $(".btn").on("click",function(){
// //     usertotal = usertotal + numb1;
// //   $(".currentScore").text(usertotal);
// // })

// })
function check (){
  if (usertotal == randomnumb){
    wins ++;
    $(".wins").text(wins);
    reset ();
  }
  else if (usertotal > randomnumb){
    losses ++;
    $(".losses").text(losses);
    reset ();
  }
}
function reset (){
  usertotal = 0;
    $(".currentScore").text(usertotal);
    numb1 = Math.floor(Math.random()*11+1);
    numb2 = Math.floor(Math.random()*11+1);
    numb3 = Math.floor(Math.random()*11+1);
    numb4 = Math.floor(Math.random()*11+1);
    randomnumb = Math.floor(Math.random()*101+19);
    $(".randomNum").text(randomnumb);
}

$(".randomNum").text(randomnumb);

$(".red").on("click",function(){
  usertotal = usertotal + numb1;
  $(".currentScore").text(usertotal);
  check ();
  
})

$(".blue").on("click",function(){
  usertotal = usertotal + numb2;
  $(".currentScore").text(usertotal);
  check ();
  
})
$(".yellow").on("click",function(){
  usertotal = usertotal + numb3;
  $(".currentScore").text(usertotal); 
  check ();
  
})

$(".green").on("click",function(){
  usertotal = usertotal + numb4;
  $(".currentScore").text(usertotal);
  check ();

})

// if (usertotal == randomnumb){
//   console.log ("this works");

//   // wins ++;
//   // $(".wins").text(wins);
// }

// Event handlers
//--------------------------------------------------------------------------
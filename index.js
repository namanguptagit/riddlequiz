var readlineSync = require('readline-sync');
var userName=readlineSync.question("what's your name ? ");
var score=0;
console.log("welcome "+userName+" Let's play a riddle quiz .");
function play(question,answer)
{
  var userAnswer=readlineSync.question(question); 
  if(userAnswer==answer)
  {
    console.log("yes you are right!");
    score++;
  }
  else
  {
    console.log("no you are wrong!");
  }
    console.log("current score = "+ score);
}
var questions=[
  {
  question:"What is always in front of you but can’t be seen? ",
  answer:"future",
},
{
  question:"What can you break, even if you never pick it up or touch it?",
  answer:"promise",
},
{
  question:"I have branches, but no fruit, trunk or leaves. What am I?",
  answer:"bank",

},
{
  question:"What can you catch, but not throw?",
  answer:"cold",

},
{
  question:"What has to be broken before you can use it?",
  answer:"egg",

}
];
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("Final score is = "+score);
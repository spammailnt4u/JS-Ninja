//welcome the user
alert('Welcome to Quiz Ninja!');

var quiz = [
  ['What is Superman\'s real name?','Clarke Kent'],
  ['What is Wonderwoman\'s real name?','Dianna Prince'],
  ['What is Batman\'s real name?','Bruce Wayne']
];
var score = 0; //initializes score
for (var i=0,length=quiz.length;i<length;i++) {
  var answer = prompt(quiz [i] [0]);
  if (answer === quiz [i] [1]) {
    alert('Correct!');
    score++;
  }
  else {
    alert('Incorrect')
  }
}
alert('Your score is '+score);

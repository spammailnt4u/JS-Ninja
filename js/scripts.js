var quiz = [
  ['What is Superman\'s real name?','Clarke Kent'],
  ['What is Wonderwoman\'s real name?','Dianna Prince'],
  ['What is Batman\'s real name?','Bruce Wayne']
];
var score = 0; //initializes score

play(quiz);//whole function is hoisted

function play(quiz) {
  //main game loop
  for (var i=0, question, answer, max=quiz.length; i<max; i++) {
    question = quiz [i] [0];
    answer = ask(question);
    check(answer);
  }
  // end of main game loop
  gameOver();
  //defining necessary functions
  function ask(question) {
    return prompt(question);
  }
  function check(answer) {
    if (answer === quiz[i][1]) {
      alert('Correct!');
      score++;
    }
    else {
      alert('Incorrect!');
    }
  }
  function gameOver() {
    alert('Gamer over! You scored ' + score + ' points!')
  }
}

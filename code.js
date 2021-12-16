onEvent("start", "click", function( ) {
  setScreen("screen2");
  timedLoop(500, function() {
    setPosition("bug", randomNumber(1, 200), randomNumber(1, 145), randomNumber(1, 67), 100);
  });
});
var score = 0;
onEvent("bug", "click", function( ) {
  score = score + 1;
  playSound("assets/category_pop/puzzle_game_bonus_bubble_large_01.mp3", false);
  setText("score", score);
  if (score == 5) {
    setScreen("screen3");
    playSound("assets/category_achievements/melodic_win_1.mp3", false);
  }
});

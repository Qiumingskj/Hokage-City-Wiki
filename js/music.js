var playButton = document.getElementById('playButton');
playButton.addEventListener('click', function() {
  var audio = new Audio('song.mp3');
  audio.play();
});
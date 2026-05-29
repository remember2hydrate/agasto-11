var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function pauseVideo() {
  if (video.paused) {
    video.play();
    //btn.innerHTML = "Pause";
    
  } else {
    video.pause();
    //annotateVideo("▐▐");
    //btn.innerHTML = "Play";
  }
}

//$('#header').load('/components/nav.html');
//$('#footer').load('/components/footer.html');

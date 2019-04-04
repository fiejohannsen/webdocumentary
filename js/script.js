window.onload = function() {
  attachEventlisteners();
};

function attachEventlisteners() {
  // unmute video-interview
  var unmuteInterview = document.getElementById('unmute-interview');
  var interviewVideo = document.getElementById('video2');
  unmuteInterview.addEventListener('click', function() {
    unmuteInterview.style.display = 'none';
    interviewVideo.muted = false;
  });

  // unmute video-violinspil
  var unmuteViolinspil = document.getElementById('unmute-violinspil');
  var violinspilVideo = document.getElementById('video4');
  unmuteViolinspil.addEventListener('click', function() {
    unmuteViolinspil.style.display = 'none';
    violinspilVideo.muted = false;
  });

  // horizontal scroll loop eventlistener
  var horizontalWrapper = document.getElementById('section7');
  var whoKilledBambiClone = document.getElementById('whokilledbambi-CLONE');
  horizontalWrapper.addEventListener('scroll', function() {
    if (horizontalWrapper.scrollLeft > whoKilledBambiClone.offsetLeft - 50) {
      horizontalWrapper.scrollTo(0, 0);
    }
  });
}

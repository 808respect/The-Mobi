
// NAVIGATION-SECTION
function openNav() {
  document.getElementById("myNav").style.height = "100%";
};

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
};

window.onscroll = () => move();

//PROGRESS-BAR
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("whiteBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

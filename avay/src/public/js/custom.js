document.addEventListener("DOMContentLoaded", function() {
  //get slide
  var slides = document.getElementsByClassName("cs-experience");
  //get dot
  var dot = document.querySelectorAll(".show-pointer");
  //console.log(dot);
  setInterval(function() {
    for (let i = 0; i < dot.length; i++) {
      dot[i].addEventListener("click", function() {
        //remove all active
        for (let k = 0; k < dot.length; k++) {
          dot[k].classList.remove("active");
          //add active
          this.classList.add("active");
        }

        var btnAct = this;
        var local = 0;
        for (local = 0; (btnAct = btnAct.previousElementSibling); local++) {}
        for (let slide = 0; slide < slides.length; slide++) {
          slides[slide].classList.remove("active");
          slides[local].classList.add("active");
        }
      });
    }
  }, 1000);
});

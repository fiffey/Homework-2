
var imgs = document.querySelectorAll('.slider-1 .sliderContent div');
var prev = document.querySelector('.slider-1 .prev')
var next = document.querySelector('.slider-1 .next')
var sliderWraper = document.querySelector('.slider-1 .sliderContent')

var pos = 0;
var nbSlide = imgs.length;

prev.addEventListener('click', () => {
  pos = pos + 100;
  if (pos > 0) {
    sliderWraper.style.left = ((-nbSlide + 1) * 100) + 'vw';
    pos = (-nbSlide + 1) * 100;
  } else {
    sliderWraper.style.left = pos + 'vw';
  }
})

next.addEventListener('click', () => {
  pos = pos - 100;
  if (pos < ((-nbSlide + 1) * 100)) {
    sliderWraper.style.left = 0 + 'vw';
    pos = 0;
  } else {
    sliderWraper.style.left = pos + 'vw';
  }
})

document.onkeydown = leftOrRight;

function leftOrRight(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        pos = pos + 100;
        if (pos > 0) {
          sliderWraper.style.left = ((-nbSlide + 1) * 100) + 'vw';
          pos = (-nbSlide + 1) * 100;
        } else {
          sliderWraper.style.left = pos + 'vw';
        }
     }
     else if (e.keyCode == '39') {
        pos = pos - 100;
        if (pos < ((-nbSlide + 1) * 100)) {
          sliderWraper.style.left = 0 + 'vw';
          pos = 0;
        } else {
          sliderWraper.style.left = pos + 'vw';
        }
     }
}

document.getElementsByTagName("img").onClick = test;

function test() {
    console.log("aaaaaaaaaaaaaa")
}


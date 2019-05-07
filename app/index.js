// Load application styles
import 'styles/index.css';

var showingClass = "showing",
    changingClass = "changing";
var firstSlide = document.querySelector(".item:first-child");
var lastSlide = document.querySelector(".item:last-child");
var firstBotSlide = document.querySelector(".controls:first-child");
var lastBotSlide = document.querySelector(".controls:last-child");
var nextbtn = document.querySelector('#right_btn');
nextbtn.addEventListener("click",function(){nextSlider();nextBotSlider();});
var prevbtn = document.querySelector("#left_btn");
prevbtn.addEventListener("click",function(){prevSlider();prevBotSlider();})

function nextSlider(){
  var currentSlide = document.querySelector(`.${showingClass}`);
  if(currentSlide){
    var nextSlide = currentSlide.nextElementSibling;
    currentSlide.classList.remove(showingClass);
    if(nextSlide){
      nextSlide.classList.add(showingClass);
    }else{
      firstSlide.classList.add(showingClass);
    }
  }else{
    firstSlide.classList.add(showingClass);
  }
}
nextSlider();

function prevSlider(){
  var currentSlide = document.querySelector(`.${showingClass}`);
  if(currentSlide){
    var nextSlide = currentSlide.previousElementSibling;
    currentSlide.classList.remove(showingClass);
    if(nextSlide){
      nextSlide.classList.add(showingClass);
    }else{
      lastSlide.classList.add(showingClass);
    }
  }else{
    firstSlide.classList.add(showingClass);
  }
}

function nextBotSlider(){
  var currentBotSlider = document.querySelector(`.${changingClass}`);
  if(currentBotSlider){
    var nextBotSlide = currentBotSlider.nextElementSibling;
    currentBotSlider.classList.remove(changingClass);
    if(nextBotSlide){
      nextBotSlide.classList.add(changingClass);
    }else{
      firstBotSlide.classList.add(changingClass);
    }
  }else{
    firstBotSlide.classList.add(changingClass);
  }
}
nextBotSlider();

function prevBotSlider(){
  var currentBotSlider = document.querySelector(`.${changingClass}`);
  if(currentBotSlider){
    var nextBotSlide = currentBotSlider.previousElementSibling;
    currentBotSlider.classList.remove(changingClass);
    if(nextBotSlide){
      nextBotSlide.classList.add(changingClass);
    }else{
      lastBotSlide.classList.add(changingClass);
    }
  }else{
    firstBotSlide.classList.add(changingClass);
  }
}

setInterval(function(){nextSlider();nextBotSlider();},1000);


function loadResume() {
  var el = document.getElementById('resume');
  
  $(function(){
          $("#resume").load("resume.html");
        });
  //el.
}

function navigateClick() {
  window.console.log("navigate clicked...");
  //apply the needed class for animation
  var el_navigate = document.getElementById('navigate');
  var el_intro = document.getElementById('intro');
  var el_resume = document.getElementById('resume');

  if($(el_intro).hasClass("nav-home")){
    //We are going to shift the intro box to the left
    el_intro.className = "nav-left flyingLeft";
    //$("el_intro").addClass("flyingLeft");
    el_navigate.innerHTML="Home";
    
    $(el_resume).addClass("fadingIn");
    
  } else if($(el_intro).hasClass("nav-left")){
    //We are going to shift the intro box back home
    //$("el_intro").addClass("flyingRight");
    el_intro.className = "nav-home flyingRight";
    el_navigate.innerHTML="About";
    
    $(el_resume).addClass("fadingOut");
    
  } else {/*unexpected*/window.console.log("we shouldn't be here1");}
      
}

function animateStart() {
  var el = document.getElementById('resume');

  el.style.visibility = "visible";
}

function animateEnd() {
  window.console.log('animation completed...');
  
  var el = document.getElementById('resume');
  
  //Remove classes that perform the animation
  if($(el).hasClass('fadingIn')){
    //All done animating, so we can hide the element
    $(el).removeClass("fadingIn");
  }
  else if($(el).hasClass('fadingOut')){
    //All done animating, so we can hide the element
    el.style.visibility = "hidden";
    $(el).removeClass("fadingOut");
  } else{/*unexpected*/window.console.log("we shouldn't be here2");}
  
}

window.onload = function() {
  window.console.log("page loaded");
  
  //load in the resume information, hidden
  //$(function(){
  $("#resume").load("html/resume.html");
  //$("#resume").style.visibility="hidden";
  //});

  
  document.getElementById('navigate').addEventListener('click', navigateClick);
  document.getElementById('resume').addEventListener('animationend', animateEnd);
  document.getElementById('resume').addEventListener('animationstart', animateStart);
  
}


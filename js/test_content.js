/*var today = new Date(),
  hourNow = today.getHours(),
  greeting;

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

//document.write('<h3>' + greeting + '</h3>');
   
function updateButton() {
  'use strict';
  //declarations
  var el = document.getElementById('clickButn'),
    el2 = document.getElementById('fewt');
    
  
  el.innerHTML = "I've been clicked!";
  el2.textContent = "IT WAS CLICKED!";
}

function rev_button() {
  'use strict';
  var el = document.getElementById('switch_butn'),
    elements = document.getElementsByTagName('main'),
    text_color = "redText",
    newText,
    newEl;
  
  if (el.getAttribute('class') === 'redButn') {
    el.setAttribute('class', 'greenButn');
    text_color = 'greenText';
  } else {
    el.setAttribute('class', 'redButn');
    text_color = 'redText';
  }
  
  //el.innerHTML= "already clicked";
  document.getElementById('fewt').textContent = "clickeroo!";
  
  //Lets try adding a new button:
  
  if (elements.length > 0) {
    //lets append a new node to the end
    newText = document.createTextNode("I'm the new guy! (" + text_color + ") ");
    //newText.setAttribute('class', text_color);
    newEl = document.createElement('p').appendChild(newText);//.className=text_color;
    //newEl.innerHTML("I'm the newer guy!");
    
    //newEl.setAttribute('class', 'redText');//className=text_color;
    //newEl = document.createElement('h5');
    
    
    elements[0].appendChild(newEl);
  }
}
*/

/*
document.addEventListener('click', function () {
  'use strict';
  window.console.log('im here...');
});


document.getElementById('main').addEventListener('click', function() {
  window.console.log('main over here, yo');
});
  //addElement);
*/

/*var el = document.getElementById('main');
el.onclick = addElement;
*/
//window.onload = function() {
//  'use strict';
 
function addElement() {
  'use strict';
  window.console.log("trying to add an element...");
//this.appendChild(document.createElement('p').appendChild(document.createTextNode('me!')));
}

function mousey() {
  'use strict';
  window.console.log('mousey mouse over event');
  
}

window.onload = function () {
  'use strict';
  
  window.console.log("page loaded");
  
  var elLogin = document.getElementById('login');
  elLogin.onclick = addElement;

  //document.getElementById('main').onmouseover = mouseOver;
  document.getElementById('main').addEventListener('mouseover', mousey);
};






















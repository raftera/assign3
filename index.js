/*
 * Add your JavaScript to this file to complete the assignment.
 */

document.getElementById("create-twit-button").addEventListener("click", createTwit);

var author = '';
var content = '';

function createTwit(){
  console.log("==create twit clicked");
  var modal = 0;
  var modal = document.getElementsByClassName("hidden");
  for (var i = 0; i < modal.length; i+=1){
    modal[i].style.display = 'block';
  }
  //document.getElementsByClassName("hidden").style.display = "block";
}

document.getElementsByClassName("modal-close-button")[0].addEventListener("click", closeCreate);
document.getElementsByClassName("modal-cancel-button")[0].addEventListener("click", closeCreate);

function closeCreate() {
  console.log("==close twit creator clicked");
  var modal = document.getElementsByClassName("hidden");
  for (var i = 0; i < modal.length; i+=1){
  modal[i].style.display = 'none';
  }
  document.getElementById("twit-attribution-input").value = '';
  content = document.getElementById("twit-text-input").value = '';
  author = '';
  content = '';

}

function alert(){
//  if (document.get)

}

document.getElementsByClassName("modal-accept-button")[0].addEventListener("click", twitData);

function twitData(){
  if (!checkEmpty()){
  author = document.getElementById("twit-attribution-input").value;
  console.log(author);
  content = document.getElementById("twit-text-input").value;
  console.log(content);
 addTwit(content, author);
  author = '';
  content = '';
}
}

function checkEmpty(){
if (!document.getElementById("twit-attribution-input").value){
  console.log("==author field empty!");
  return true;
}

if (!document.getElementById("twit-text-input").value){
  console.log("==twit text field empty!");
  return true;
}

  return false;
}

function addTwit(content, author) {
  /*
  <article class="twit">
    <div class="twit-icon">
      <i class="fa fa-bullhorn"></i>
    </div>
    <div class="twit-content">
      <p class="twit-text">
        <--! Put the twit text entered by the user here. -->
      </p>
      <p class="twit-author">
        <a href="#"><--! Put the twit author entered by the user here. --></a>
      </p>
    </div>
  </article>
  */
  console.log("==creating new Twit");

  var newTwit = document.createElement("twit");
  var horn = document.createElement('twit-icon');
  horn.classList.add("fas");
  horn.classList.add("fa-bullhorn");
  horn.style["font-size"] = "24px";
  newTwit.appendChild(horn);

  cont = document.createTextNode(content);
  autht = document.createTextNode(author);

  var text = document.createElement("twit-content");
  text.style["flex"] = "1 1 80%";
  text.style["margin-left"] = "10px";

  var ttext = document.createElement("twit-text");
  //ttext.style['margin-top'] = "8px";
//  ttext.style['text-align'] = "right";
  //ttext.style["font-weight"] = "bold";
  ttext.style.flex = "1 1 80%";
  ttext.style["margin-left"] = "10px";
  ttext.style["font-family"] = "Roboto, Helvetica, sans-serif";
  ttext.appendChild(cont);

  text.appendChild(ttext);


  var authtext = document.createElement("twit-author");
//  authtext.style["margin-top"] = "8px";
//  authtext.style['text-align'] = "right";
  authtext.style["font-weight"] = "bold";
  authtext.style["font-family"] = "Roboto, Helvetica, sans-serif";
  authtext.style["text-align"] = "right";
  authtext.style["padding-left"] = "60%";
  authtext.style["padding-top"] = "45px";
  authtext.style.position = "absolute";
  authtext.appendChild(autht);

  text.appendChild(authtext);


  newTwit.appendChild(text);

newTwit.style.flex = "0 1 28%"
newTwit.style.display = "flex";
newTwit.style.margin = "2px";
newTwit.style.padding = "20px";
newTwit.style.border = "1px solid #dadada";
newTwit.style["border-radius"] = "2px";
newTwit.style["background-color"] = "#fff";
newTwit.style.position = "relative";
newTwit.style.width = "400px";
newTwit.style.height = "65px";

  document.getElementsByClassName("twit-container")[0].appendChild(newTwit);


  closeCreate();

}



document.getElementById("navbar-search-button").addEventListener("click", searchTwits);


function searchTwits(){

  var holder;
  var twits = document.getElementsByClassName("twit-container");
  var target = document.getElementById("navbar-search-input").value.toLowerCase();
  console.log("==searching twits for " + target);
  var twits = document.getElementsByClassName("twit");
  for (var i = 0; i < twits.length; i+=1){
    holder = document.getElementsByClassName("twit")[i].textContent.toLowerCase();
    if (holder.search(target) === -1){
      //  holder.parentNode.removeChild(holder);
     document.getElementsByClassName("twit")[i].style.display = "none";
    }

  }
  
}

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
  var newTwit = document.createElement('article');
  newTwit.classList.add('twit')

  var img = document.createElement('div');
  img.classList.add("");


}

/*
 * Add your JavaScript to this file to complete the assignment.
 */

var maketwit = document.querySelector('create-twit-button');
maketwit.addEventListener('click', function()){
  console.log("== Make twit button was clicked")
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
  var newTwit = document.createElement('article');
  newTwit.classList.add('twit')

  var img = document.createElement('div');
  img.classList.add("")
}

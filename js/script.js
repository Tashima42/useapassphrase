'use strict';

// Cryptographic replacement for Math.random()
function randomNumberBetweenZeroAndOne() {
  var crypto = window.crypto || window.msCrypto;
  return crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
}

function generatePassword(numberOfWords) {
  numberOfWords = parseInt(numberOfWords);

  // Empty array to be filled with wordlist
  var generatedPasswordArray = [];


  // Grab a random word, push it to the password array
  for (var i = 0; i < numberOfWords; i++) {
      var index = Math.floor(randomNumberBetweenZeroAndOne() * 12494)
      generatedPasswordArray.push(wordlist[index]);
  }

  return generatedPasswordArray.join(' ');
}

function setStyleFromWordNumber(passwordField, numberOfWords) {
  var baseSize = '30';
  var newSize = baseSize * (4/numberOfWords);
  passwordField.setAttribute('style', 'font-size: ' + newSize + 'px;');
}

var selectField = document.getElementById('passphrase_select');
var passwordField = document.getElementById('passphrase');
var button = document.querySelector('.btn-generate');

// Initially run it upon load
passwordField.setAttribute('value', generatePassword(4));

// Listen for a button click
button.addEventListener('click', function() {
  var numberOfWords = selectField.options[selectField.selectedIndex].value;
  passwordField.value = generatePassword(numberOfWords);
  setStyleFromWordNumber(passwordField, numberOfWords);
});

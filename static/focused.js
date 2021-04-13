var unfocused = 0;

window.onfocus = function() {
	document.body.style.backgroundColor = "#baffc9"; 
  document.getElementById("focusstate").innerHTML = "you're focused on me!"

};

window.onblur = function() {
 	document.body.style.backgroundColor = "#ffb3ba";
  document.getElementById("focusstate").innerHTML = "you're not focused on me :("
  unfocused += 1;
  document.getElementById("counter").innerHTML = String(unfocused)+" times"

};
// https://www.obfuscator.io/
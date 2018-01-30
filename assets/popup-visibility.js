// add hidden input to detect extension
function addInput() {
  var body = document.getElementsByTagName('body');
  var input = document.createElement("input");
  input.setAttribute("type", "hidden");
  input.setAttribute("name", "has-start-ext");
  input.setAttribute("value", "true");
  document.body.appendChild(input);
}

// add input on load
document.addEventListener("DOMContentLoaded", function(event) {
    addInput()
});

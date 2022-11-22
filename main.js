function submit() {
  //type on the right after '=' is asigned to the left before '='
  //var = variable
  //datainput due to no id
  var input = document.querySelector("[data-input]");
  var value = input.value;
  var ul = document.querySelector("[data-list]");
  var li = document.createElement("li");
  li.textContent = value;
  ul.appendChild(li);
   //Below .value = "" is empty meaning clears text. Clears the value
  document.querySelector("[data-input]").value = "";
}

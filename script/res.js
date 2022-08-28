function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple responses
  if (input == "hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else if (input == "yes") {
    return "true";
  } else if (input == "A") {
    return "A";
  } else if (input == "B") {
    return "B";
  } else if (input == "a") {
    return "a";
  } else if (input == "b") {
    return "b";
  } else {
    return "Try asking something else!";
  }
}

document.getElementById("logOut").addEventListener("click",function(){
  window.location.href="index.html"
})

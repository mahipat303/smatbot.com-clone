var coll = document.getElementsByClassName("collapsible");

document.getElementById("button_text").innerText = "Survey Bot";
document.getElementById("Avatar").src =
  "https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/avatar1.png";
function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage = "We are always here to help you😊";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// ============================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>============>>>>>>>>>>>>>>>

setTimeout(function () {
  botResponse = "Hey, thanks for using Smatbot!!";
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}, 2000);

setTimeout(function () {
  botResponse = "Can I have two minutes?";
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}, 3000);

setTimeout(function () {
  botResponse = "A Small survey on smatbot.";
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}, 4000);

setTimeout(function () {
  botResponse = "A Small survey on smatbot.";
  let botHtml =
    '<p class="botText"><img src="https://media.tenor.com/images/09952fbb1eddab9d4e6e9a992d6ed08a/tenor.gif" alt=""></p>';
  $("#chatbox").append(botHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}, 5000);

setTimeout(function () {
  botResponse = "YES or NO";
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}, 6000);

function after() {
  setTimeout(function () {
    botResponse = "Thanks!! Let's start then";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 2000);

  setTimeout(function () {
    botResponse = "How did you hear about us?";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 3000);

  setTimeout(function () {
    botResponse = "A :- Google";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 4000);

  setTimeout(function () {
    botResponse = "B :- Referal";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 5000);
}

function after2() {
  setTimeout(function () {
    botResponse = "Great!!";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 2000);

  setTimeout(function () {
    botResponse = "How long have you known about Chatbots?";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 3000);

  setTimeout(function () {
    botResponse = "a :- < 1 year";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 4000);

  setTimeout(function () {
    botResponse = "b :- > 1 year";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 5000);
}

function after3() {
  setTimeout(function () {
    botResponse = "Great!!";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 2000);

  setTimeout(function () {
    botResponse = "Thank You For Your Time";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 3000);

  setTimeout(function () {
    botResponse = "Have a Nice Day!!";
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 4000);
}

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  if (botResponse == "true") {
    after();
    return;
  } else if (botResponse == "A" || botResponse == "B") {
    after2();
    return;
  } else if (botResponse == "b" || botResponse == "a") {
    after3();
    return;
  }
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// ============================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "I love Code Palace!";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("Heart clicked!");
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});

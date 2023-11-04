//300px - 22 chars -> 13.45px per char

var score = 0;
var time = 0;
var maxTime = null;
var intervalId = null;

function createEmojiGrid(columns, rows, emoji1, emoji2, charsize) {
  const x = document.getElementById("ec");
  const px = String(columns * charsize) + "px";
  x.style.width = px;
  const rand = Math.round(Math.random() * (rows * columns - 1));
  let text = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i * columns + j == rand) {
        text += "<span id='icon'>" + emoji2 + "</span>";
      } else {
        text += "<span>" + emoji1 + "</span>";
      }
    }
  }
  x.innerHTML = text;
}

function setUp() {
  // Get the selected emoji pair from the dropdown
  var selectedEmoji = document.getElementById("emojiSelect").value.split(",");

  // Get the values for rows and columns
  var rows = parseInt(document.getElementById("rows").value);
  var columns = parseInt(document.getElementById("columns").value);

  // Get the value for maxTime
  maxTime = parseInt(document.getElementById("maxTime").value);

  // Call the createEmojiGrid function with the selected emoji values
  createEmojiGrid(columns, rows, selectedEmoji[0], selectedEmoji[1], 13.45);

  var distinctIcon = document.getElementById("icon");
  distinctIcon.addEventListener("click", function () {
    distinctIcon.className = "green";
  });
  distinctIcon.addEventListener("dblclick", (event) => {
    setUp();
    score += 1;
    document.getElementById("score").innerText =
      "your score is: " + score.toString();
  });
}

function increaseTimer() {
  console.log("hello");
  time += 1;
  document.getElementById("time").innerText =
    "Time elapsed: " + time.toString();
  if (time == maxTime) {
    const x = document.getElementById("ec");
    x.innerHTML =
      "<div style='font-size: 2em; display: table; margin: 0 auto;'><span>😞</span></div>";
    clearInterval(intervalId);
  }
}

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    setUp();
    //restore player values
    score = 0;
    time = 0;
    document.getElementById("time").innerText = "Time elapsed: " + "0";
    document.getElementById("score").innerText = "your score is: " + "0";
    //start timer
    intervalId = setInterval(increaseTimer, 1000);
  });

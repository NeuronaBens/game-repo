function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function createRandomCircle(elem) {
  // Create a div element
  var circle = document.createElement("div");

  // Set a class for styling
  circle.className = "random-circle";

  // Generate random size between 50 and 200 pixels
  var size = Math.floor(Math.random() * 150) + 50;
  circle.style.width = size + "px";
  circle.style.height = size + "px";

  // Get viewport dimensions
  var maxX = window.innerWidth - size;
  var maxY = window.innerHeight - size;

  // Generate random position within the viewport
  var x = Math.floor(Math.random() * maxX);
  var y = Math.floor(Math.random() * maxY);
  circle.style.left = x + "px";
  circle.style.top = y + "px";

  // Generate random color
  var color = getRandomColor();
  circle.style.backgroundColor = color;

  // Append the circle to the body
  elem.appendChild(circle);
  return circle;
}

function reset(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}

function game(maxtime = 20) {
  // Get the target element
  var mainDiv = document.getElementById("main");

  // Reset main div
  reset(mainDiv);

  // Initialize variables
  var startTime = new Date().getTime();
  var endTime = startTime + maxtime * 1000; // 30 seconds

  // Update the score
  var score = 0;
  var scoreElement = document.getElementById("score");
  scoreElement.innerHTML = "Score: " + score;

  // Function to create a random circle
  function createAndAppendCircle() {
    var circle = createRandomCircle(mainDiv);

    // Double click event listener for the circle
    circle.addEventListener("dblclick", function () {
      // Increment the score
      score++;
      scoreElement.innerHTML = "Score: " + score;

      // Remove the clicked circle
      mainDiv.removeChild(circle);

      // Create a new circle
      createAndAppendCircle();
    });
  }

  // Start the game by creating the first circle
  createAndAppendCircle();

  // Timer function
  function updateTimer() {
    var currentTime = new Date().getTime();

    // Calculate the remaining time
    var remainingTime = Math.max(0, endTime - currentTime);

    // Update the timer display
    var timerElement = document.getElementById("timer");
    timerElement.innerHTML = "Time: " + (remainingTime / 1000).toFixed(1) + "s";

    // Check if the game is over
    if (remainingTime === 0) {
      // End the game
      alert("Game Over! Your final score is: " + score);

      // Reset main div and clear the timer display
      reset(mainDiv);
      timerElement.innerHTML = "Time: 0.0s";
    } else {
      // Continue updating the timer
      requestAnimationFrame(updateTimer);
    }
  }

  // Start the timer
  updateTimer();
}

//300px - 22 chars -> 13.45px per char

function createEmojiGrid(columns, rows, emoji1, emoji2, charsize) {
  const x = document.getElementById("ec");
  const px = String(columns * charsize) + "px";
  x.style.width = px;
  const rand = Math.round(Math.random() * (rows * columns - 1));
  let text = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i * columns + j == rand) {
        text += emoji2;
      } else {
        text += emoji1;
      }
    }
  }
  x.innerText = text;
}

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    // Get the selected emoji pair from the dropdown
    var selectedEmoji = document.getElementById("emojiSelect").value.split(",");

    // Get the values for rows and columns
    var rows = parseInt(document.getElementById("rows").value);
    var columns = parseInt(document.getElementById("columns").value);

    // Call the createEmojiGrid function with the selected emoji values
    createEmojiGrid(columns, rows, selectedEmoji[0], selectedEmoji[1], 13.45);
  });

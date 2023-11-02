//300px - 22 chars -> 13.6px per char

function createEmojiGrid(columns, rows, emoji1, emoji2) {
  const x = document.getElementById("ec");
  const px = String(columns * 13.45) + "px";
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
    // Get the values from the input fields
    var rows = parseInt(document.getElementById("rows").value);
    var columns = parseInt(document.getElementById("columns").value);
    var emoji1 = document.getElementById("emoji1").value;
    var emoji2 = document.getElementById("emoji2").value;

    // Call the createEmojiGrid function with the provided values
    createEmojiGrid(columns, rows, emoji1, emoji2);
  });

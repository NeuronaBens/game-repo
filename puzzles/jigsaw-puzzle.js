function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  var rotateEventListener;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

    // Add event listener for "keydown" event to rotate the element on pressing "r"
    rotateEventListener = function (event) {
      if (event.key === "r") {
        // Rotate the element by 90 degrees
        var currentRotation = elmnt.style.transform || "rotate(0deg)";
        var currentAngle = parseInt(currentRotation.match(/\d+/)[0]);
        var newAngle = (currentAngle + 90) % 360;
        elmnt.style.transform = `rotate(${newAngle}deg)`;
      }
    };

    document.addEventListener("keydown", rotateEventListener);
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;

    // Remove the "keydown" event listener for "r" key
    document.removeEventListener("keydown", rotateEventListener);
  }
}

function createTable(rows, columns) {
  const table = document.getElementById("game-table");
  table.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("td");
      const div = document.createElement("div");
      div.className = "td";
      cell.appendChild(div);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

let TableWidth = 10;
let TableHieght = 10;
const PercentageOfViewport = 50;
// Usage example:
createTable(TableWidth, TableHieght); // This will create a nxm table

//pieces creation
let pieces = 0;
function createPieces(fourByFourGrid, color) {
  const piece = document.createElement("table");
  piece.className = "piece";
  piece.style.width = `${(PercentageOfViewport * 4) / TableWidth}vh`;
  piece.style.height = `${(PercentageOfViewport * 4) / TableHieght}vh`;
  piece.innerHTML = "";
  piece.id = `piece-${pieces}`;
  pieces += 1;
  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      if (fourByFourGrid[i][j] > 0) {
        row.innerHTML += `<td class='visible-tile ${color}'></td>`;
      } else {
        row.innerHTML += `<td class='invisible-tile'></td>`;
      }
    }
    piece.appendChild(row);
  }
  document.getElementById("game-container").appendChild(piece);
  dragElement(piece);
}

//pieces
createPieces(
  [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  "red"
);
createPieces(
  [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  "green"
);
createPieces(
  [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  "red"
);
createPieces(
  [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  "green"
);

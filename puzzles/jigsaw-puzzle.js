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
function createPieces4x4(fourByFourGrid, color) {
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
function createPieces3x3(threeByThreeGrid, color) {
  const piece = document.createElement("table");
  piece.className = "piece";
  piece.style.width = `${(PercentageOfViewport * 3) / TableWidth}vh`;
  piece.style.height = `${(PercentageOfViewport * 3) / TableHieght}vh`;
  piece.innerHTML = "";
  piece.id = `piece-${pieces}`;
  pieces += 1;
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      if (threeByThreeGrid[i][j] > 0) {
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
function createPieces2x2(twoByTwoGrid, color) {
  const piece = document.createElement("table");
  piece.className = "piece";
  piece.style.width = `${(PercentageOfViewport * 2) / TableWidth}vh`;
  piece.style.height = `${(PercentageOfViewport * 2) / TableHieght}vh`;
  piece.innerHTML = "";
  piece.id = `piece-${pieces}`;
  pieces += 1;
  for (let i = 0; i < 2; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      if (twoByTwoGrid[i][j] > 0) {
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
function createPieces1x1(oneByOneGrid, color) {
  const piece = document.createElement("table");
  piece.className = "piece";
  piece.style.width = `${(PercentageOfViewport * 1) / TableWidth}vh`;
  piece.style.height = `${(PercentageOfViewport * 1) / TableHieght}vh`;
  piece.innerHTML = "";
  piece.id = `piece-${pieces}`;
  pieces += 1;
  for (let i = 0; i < 1; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 1; j++) {
      if (oneByOneGrid[i][j] > 0) {
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
function createPieces4x2(fourByTwoGrid, color) {
  const piece = document.createElement("table");
  piece.className = "piece";
  piece.style.width = `${(PercentageOfViewport * 2) / TableWidth}vh`;
  piece.style.height = `${(PercentageOfViewport * 4) / TableHieght}vh`;
  piece.innerHTML = "";
  piece.id = `piece-${pieces}`;
  pieces += 1;
  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      if (fourByTwoGrid[i][j] > 0) {
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

class PieceManager {
  constructor() {}
  static createRedPiece() {
    createPieces3x3(
      [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      "red"
    );
    return 5; //size
  }
  static createGreenPiece() {
    createPieces3x3(
      [
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      "green"
    );
    return 4;
  }
  static createBluePiece() {
    createPieces2x2(
      [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      "blue"
    );
    return 4;
  }
  static createPurplePiece() {
    createPieces1x1(
      [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      "purple"
    );
    return 1;
  }
  static createLimePiece() {
    createPieces3x3(
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      "lime"
    );
    return 5;
  }
  static createYellowPiece() {
    createPieces4x2(
      [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
      ],
      "yellow"
    );
    return 5;
  }
  static createPinkPiece() {
    createPieces4x2(
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
      ],
      "pink"
    );
    return 5;
  }
  static createOrangePiece() {
    createPieces4x4(
      [
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0],
      ],
      "orange"
    );
    return 6;
  }
  static createBlackPiece() {
    createPieces4x4(
      [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
      ],
      "black"
    );
    return 10;
  }
  static createRandomPiece(maxValue) {
    // Define a mapping of piece creation functions to their sizes
    const pieceCreationFunctions = [
      { func: PieceManager.createRedPiece, size: 5 },
      { func: PieceManager.createGreenPiece, size: 4 },
      { func: PieceManager.createBluePiece, size: 4 },
      { func: PieceManager.createPurplePiece, size: 1 },
      { func: PieceManager.createLimePiece, size: 5 },
      { func: PieceManager.createYellowPiece, size: 5 },
      { func: PieceManager.createPinkPiece, size: 5 },
      { func: PieceManager.createOrangePiece, size: 15 },
      { func: PieceManager.createBlackPiece, size: 50 },
    ];

    // Filter functions that produce pieces within the acceptable size range
    const validFunctions = pieceCreationFunctions.filter(
      (item) => item.size <= maxValue
    );

    if (validFunctions.length === 0) {
      throw new Error("No valid piece can be created with the given maxValue.");
    }

    // Randomly select a piece creation function from the valid ones
    const randomFunctionIndex = Math.floor(
      Math.random() * validFunctions.length
    );
    const createFunction = validFunctions[randomFunctionIndex].func;

    // Call the selected piece creation function to create a piece
    return createFunction();
  }

  static createRandomPiecesWithSum(maxSum) {
    if (maxSum <= 0) {
      throw new Error("maxSum should be a positive number");
    }

    const createdPieces = [];
    let currentSum = 0;

    while (currentSum < maxSum) {
      // Calculate the remaining available size to stay within maxSum
      const remainingSize = maxSum - currentSum;

      // Create a random piece with a size not exceeding the remaining available size
      const pieceSize = PieceManager.createRandomPiece(remainingSize);

      // Add the piece to the result array and update the current sum
      createdPieces.push(pieceSize);
      currentSum += pieceSize;
    }

    return createdPieces;
  }
}

PieceManager.createRandomPiecesWithSum(100);

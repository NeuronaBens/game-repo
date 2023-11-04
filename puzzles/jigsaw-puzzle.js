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

// Usage example:
createTable(10, 10); // This will create a 3x3 table with the specified structure

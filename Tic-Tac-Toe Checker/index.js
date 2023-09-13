const arr = [
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0],
];

const checkArray = (array) => {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++)
      if (array[i][j] === 0) {
        result = false;
        break;
      }
  }
  return result;
};

const checkWin = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (
      array[i][0] === array[i][1] &&
      array[i][1] === array[i][2] &&
      array[i][0] !== 0
    ) {
      return array[i][0];
    }
    if (
      array[0][i] === array[1][i] &&
      array[1][i] === array[2][i] &&
      array[0][i] !== 0
    ) {
      return array[0][i];
    }
  }
  if (
    (array[0][0] === array[1][1] && array[1][1] === array[2][2]) ||
    (array[0][2] === array[1][1] && array[1][1] === array[2][0])
  ) {
    if (array[i][0] !== 0) {
      return array[1][1];
    }
  }
};

function isSolved(board) {
  let result = 0;
  const check = checkArray(board);
  const win = checkWin(board);
  return result;
  // TODO: Check if the board is solved!
}

//wzorzec
function checkTicTacToe(board) {
  // Sprawdzamy, czy plansza jest ukończona (czy są jeszcze puste miejsca)
  let isBoardFull = true;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === 0) {
        isBoardFull = false;
        break;
      }
    }
  }

  // Sprawdzamy wygrane w poziomie, pionie i na ukos
  for (let i = 0; i < 3; i++) {
    // Sprawdzamy poziomo i pionowo
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== 0
    ) {
      return board[i][0]; // Wygrana w poziomie
    }
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[0][i] !== 0
    ) {
      return board[0][i]; // Wygrana w pionie
    }
  }

  // Sprawdzamy wygrane na ukos
  if (
    (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
    (board[0][2] === board[1][1] && board[1][1] === board[2][0])
  ) {
    if (board[1][1] !== 0) {
      return board[1][1]; // Wygrana na ukos
    }
  }

  // Jeśli plansza jest pełna, to jest to remis (kocia gra)
  if (isBoardFull) {
    return 0;
  }

  // Jeśli nie ma wygranej ani remisu, gra jest nierozstrzygnięta
  return -1;
}

//   // Przykład użycia funkcji
//   const board = [
//     [0, 0, 1],
//     [0, 1, 2],
//     [2, 1, 0]
//   ];

//   const result = checkTicTacToe(board);
//   console.log(result); // Wynik zostanie wyświetlony w konsoli

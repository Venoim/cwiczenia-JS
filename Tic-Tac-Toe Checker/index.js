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

const checkWin = (array, check) => {
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
    if (array[1][1] !== 0) {
      return array[1][1];
    }
  }
  if (check) {
    return 0;
  }
  return -1;
};

function isSolved(board) {
  let check = checkArray(board);
  console.log(check);
  const win = checkWin(board, check);
  console.log(win);
  return win;
}

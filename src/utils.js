export const move = (board, index, isMinimaxMode) => {
  const tempBoard = [...board];
  tempBoard[index] = "X";
  if (isMinimaxMode) {
    return [...minimax(tempBoard)];
  }
  return [...makeRandomMove(tempBoard, "O")];
};

export const isValidMove = (board, index) => {
  return board[index] === "";
};

export const getWinningIndexes = (board) => {
  // check horizontals
  if (
    board[0] === board[1] &&
    board[1] === board[2] &&
    (board[0] === "X" || board[0] === "O")
  ) {
    return [0, 1, 2];
  } else if (
    board[3] === board[4] &&
    board[4] === board[5] &&
    (board[3] === "X" || board[3] === "O")
  ) {
    return [3, 4, 5];
  } else if (
    board[6] === board[7] &&
    board[7] === board[8] &&
    (board[6] === "X" || board[6] === "O")
  ) {
    return [6, 7, 8];
  }
  // check verticals
  if (
    board[0] === board[3] &&
    board[3] === board[6] &&
    (board[0] === "X" || board[0] === "O")
  ) {
    return [0, 3, 6];
  } else if (
    board[1] === board[4] &&
    board[4] === board[7] &&
    (board[1] === "X" || board[1] === "O")
  ) {
    return [1, 4, 7];
  } else if (
    board[2] === board[5] &&
    board[5] === board[8] &&
    (board[2] === "X" || board[2] === "O")
  ) {
    return [2, 5, 8];
  }

  // check diagonals
  if (
    board[0] === board[4] &&
    board[4] === board[8] &&
    (board[0] === "X" || board[0] === "O")
  ) {
    return [0, 4, 8];
  } else if (
    board[2] === board[4] &&
    board[4] === board[6] &&
    (board[2] === "X" || board[2] === "O")
  ) {
    return [2, 4, 6];
  }

  return null;
};

export const getAvailableMoves = (board) => {
  return board
    .map((value, index) => (value !== "X" && value !== "O" ? index : null))
    .filter((value) => value !== null);
};

export const initBoard = (isComputerFirst) => {
  const board = Array(9).fill("");
  if (isComputerFirst) {
    return [...makeRandomMove(board, "O")];
  }

  return [...board];
};

export const makeRandomMove = (board, symbol) => {
  const tempBoard = [...board];
  const availableMoves = getAvailableMoves(tempBoard);
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  tempBoard[availableMoves[randomIndex]] = symbol;
  return [...tempBoard];
};

export const minimax = (board) => {
  return [...board];
};

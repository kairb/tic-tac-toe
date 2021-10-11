import { getAvailableMoves, makeRandomMove, initBoard } from "./utils";

describe("getAvailableMoves", () => {
  it("should find available moves", () => {
    expect(getAvailableMoves(["", "", ""])).toEqual([0, 1, 2]);
    expect(getAvailableMoves(["X", "", ""])).toEqual([1, 2]);
    expect(getAvailableMoves(["X", "X", ""])).toEqual([2]);
    expect(getAvailableMoves(["X", "X", "O"])).toEqual([]);
    expect(getAvailableMoves(["", "X", "O"])).toEqual([0]);
    expect(getAvailableMoves(["", "", "O"])).toEqual([0, 1]);
    expect(getAvailableMoves(["", "", "O", "", ""])).toEqual([0, 1, 3, 4]);
  });
});

describe("makeRandomMove", () => {
  it("should make a random move", () => {
    expect(makeRandomMove(["O", "O", ""], "X")).toEqual(["O", "O", "X"]);
    expect(makeRandomMove(["", "O", "O"], "X")).toEqual(["X", "O", "O"]);
    expect(makeRandomMove(["O", ""], "X")).toEqual(["O", "X"]);
    expect(makeRandomMove([""], "X")).toEqual(["X"]);
    expect(makeRandomMove([], "X")).toEqual([]);
  });
});

describe("init board", () => {
  it("should return board with 9 empty squares when player goes first", () => {
    const board = initBoard(false);
    expect(board.length).toBe(9);
    board.forEach((v) => expect(v).toBe(""));
  });

  it("should return board with 8 empty squares when computer goes first", () => {
    const board = initBoard(true);
    expect(board.length).toBe(9);
    let totalEmpty = 0;
    let totalOs = 0;
    board.forEach((v) => (v === "" ? (totalEmpty += 1) : (totalOs += 1)));

    expect(totalEmpty).toBe(8);
    expect(totalOs).toBe(1);
  });
});

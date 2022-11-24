import "./bingoCard.css";
const createCard = () => {
  let grid: number[][] = [[], [], [], [], []];
  // Pick 5 numbers 'B' (1 to 15)
  // 5 x 'I' (16-30)
  // 4 x 'N' (31-45) + 1 free
  // 5 x 'G" (46-60)
  // 5 x 'O' (61-75)

  for (let i = 0; i < 5; i++) {
    const bucket: number[] = [...Array(15)].map((x, idx) => idx + 1 + i * 15);
    console.log({ bucket });
    for (let j = 0; j < 5; j++) {
      const iRand = Math.floor(Math.random() * bucket.length);
      grid[i][j] = bucket.splice(iRand, 1)[0];
    }
  }
  grid[2][2] = -1;
  console.log(grid);
  return grid;
};
export default function BingoCard() {
  const grid = createCard();
  return (
    <div className="bingo-root">
      {grid.map((col,idx) => (
        <div className="bingo-col">
          <div className="bingo-letter">{"BINGO"[idx]}</div>
          {col.map((x) => <div className="bingo-num"><p>{x !== -1 ? x : '☃️'}</p></div>)}
        </div>
      ))}
    </div>
  );
}

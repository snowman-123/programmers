// S > E 배열좌표
//

function solution(wallpaper) {
  let row = [];
  let col = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        row.push(i);
        col.push(j);
      }
    }
  }

  //   console.log(row);
  //   console.log(col);
  let rowMax = 50,
    rowMin = 0;
  let colMax = 50,
    colMin = 0;

  rowMax = Math.max(...row);
  rowMin = Math.min(...row);
  colMax = Math.max(...col);
  colMin = Math.min(...col);
  console.log([rowMin, colMin, rowMax + 1, colMax + 1]);
  return [rowMin, colMin, rowMax + 1, colMax + 1];
}

solution([".#...", "..#..", "...#."]);
//다른풀이1
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
//다른 풀이2
function solution(wallpaper) {
  let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
  // x1 => min i
  // x2 => max i
  // y1 => min idx
  // y2 => max idx
  wallpaper.forEach((paper, i) => {
    if (paper.includes("#")) {
      x1 = Math.min(x1, i);
      y1 = Math.min(y1, paper.indexOf("#"));
      x2 = Math.max(x2, i);
      y2 = Math.max(y2, paper.lastIndexOf("#"));
    }
  });
  return [x1, y1, x2 + 1, y2 + 1];
}

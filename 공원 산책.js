//다시는 좌표와 배열을 혼동해서 쓰지 말것
// https://chamdom.blog/pg1-172928/
function solution(park, routes) {
  const dir = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  const maxX = park.length;
  const maxY = park[0].length;
  let start;
  for (let i = 0; i < maxX; i++) {
    for (let j = 0; j < maxY; j++) {
      if (park[i][j] == "S") {
        start = [i, j];
      }
    }
  }
  console.log(maxX, maxY);
  routes.forEach((val, idx) => {
    let [d, n] = val.split(" ");
    n = Number(n);
    let [moveX, moveY] = start;
    let a = 0;
    while (a < n) {
      moveX += dir[d][0];
      moveY += dir[d][1];
      if (
        moveX < 0 ||
        moveX >= maxX ||
        moveY < 0 ||
        moveY >= maxY ||
        park[moveX][moveY] == "X"
      )
        break;
      a++;
    }
    if (a == n) start = [moveX, moveY];
  });

  console.log(start);
  return start;
}

solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]);

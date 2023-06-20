//map 객체 사용
function solution(players, callings) {
  let runmap = {};
  players.forEach((val, idx) => {
    runmap[players[idx]] = idx;
  });
  //   console.log(runmap);
  callings.forEach((val, idx) => {
    let index = runmap[val]; // 3
    let temp = players[index - 1]; // poe
    runmap[val]--;
    runmap[temp]++;
    players[index - 1] = val;
    players[index] = temp;
  });
  //   console.log(players);
  return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);

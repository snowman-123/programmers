function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0);

  while (bridge.length) {
    bridge.shift();
    if (truck_weights.length) {
      //지나갈 트럭이존재하면
      const weightSum = bridge.reduce((acc, v) => acc + v, 0);
      // console.log(weightSum);
      if (weightSum + truck_weights[0] <= weight) {
        //트럭의 무게가 다리를 지나갈 수 있으면
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
    console.log(time);
    time++;
  }
  return time;
}

solution(2, 10, [7, 4, 5, 6]);

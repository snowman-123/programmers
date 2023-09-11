function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0);
  let weight = 0;
  while (truck_weights) {
    weight = weight - bridge.shift();
    if (bridge.length) {
    }
  }
  return time;
}

solution(2, 10, [7, 4, 5, 6]);

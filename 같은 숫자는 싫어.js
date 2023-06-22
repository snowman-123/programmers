function solution(arr) {
  return arr.filter((val, idx) => {
    return val != arr[idx + 1];
  });
}

solution([1, 1, 3, 3, 0, 1, 1]);

function solution(nums) {
  var answer = 0;
  let numLength = nums.length / 2;
  let arr = new Set(nums);
  arr = [...arr];

  if (arr.length > numLength) return numLength;
  else return arr.length;
}

solution([3, 1, 2, 3]);

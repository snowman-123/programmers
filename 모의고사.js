function solution(answers) {
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answer = [];
  let a1a = answers.filter((v, i) => v === a1[i % a1.length]).length;
  let a2a = answers.filter((v, i) => v === a2[i % a2.length]).length;
  let a3a = answers.filter((v, i) => v === a3[i % a3.length]).length;
  let max = Math.max(a1a, a2a, a3a);
  if (a1a === max) {
    answer.push(1);
  }
  if (a2a === max) {
    answer.push(2);
  }
  if (a3a === max) {
    answer.push(3);
  }
  return answer;
}

solution([1, 3, 2, 4, 2]); // [1,2,3]

// 12345 12345 반복
// 21 22 23 24 25 반복
// 33 11 22 44 55 반복

function solution(priorities, location) {
  let answer = 0;
  const arr = priorities.map((val, idx) => {
    return { val, idx };
  });
  while (arr.length) {
    const q = arr.shift();

    if (arr.some((v, i) => v.val > q.val)) {
      arr.push(q);
    } else {
      answer++;
      if (q.idx === location) break;
    }
  }

  return answer;
}

solution([1, 1, 9, 1, 1, 1], 0); // 5

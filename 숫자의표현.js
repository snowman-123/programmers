//n을 연속된 수로 나누는 방법

function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
    //약수이고 홀수인 경우
  }

  return answer;
}

console.log(solution(15));

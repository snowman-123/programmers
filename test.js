// 십진수 숫자 배열
const decimalNumbers = [5, 10, 15, 20];

// 각 숫자를 이진수로 변환하여 새 배열 생성 및 출력
const binaryNumbers = decimalNumbers.map((decimal) => {
  (decimal >>> 0).toString(2);
});

// 결과 출력
console.log("십진수:", decimalNumbers);
console.log("이진수:", binaryNumbers);
const mapy = [...Array(10)].fill(0);
console.log(mapy);

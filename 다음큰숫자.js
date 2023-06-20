let n = 78;
n = n.toString(2);
let count = 0;
for (i of n) {
  if (i === "1") count++;
}
let n2 = 2**parseInt(n.length);
let arr = [];
let sum = [];
for(let i=1; i<n2; i++){
    //n2의 약수
    if( n2 % i ===0) arr.push(i);
}

f

console.log(count);
console.log(n);

// 1001110
// 1010011
// 1 2 4 8 16....
// 1개수만큼의 2진수를 다 구하고 다음거넣자.
// 만약 1111인 경우 하나늘리고 10111

// 0011 의 이진수 다 구하기 16의 약수들의 합.
// 1 2 4 8

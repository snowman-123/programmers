let s = "(()(";
const stack = [];
let pop;
let result = 1;
for (let i = 0; i < s.length; i++) {
  if (s[i] === "(") stack.push(s[i]);
  else {
    // ")" 인경우
    if (stack.length === 0) {
      result = 0;
    }
    stack.pop();
  }
}

console.log(result);

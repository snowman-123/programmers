function combinations(n, r) {
  if (n == r || r == 0) {
    return 1;
  } else {
    r = r < n - r ? n - r : r;
    return permutations(n, r) / factorial(r);
  }
}
function permutations(n, r) {
  let factorial = 1;
  if (n >= r) {
    // 예외&& n !== 0 && r !== 0
    while (r--) {
      factorial *= n--;
    }
    return factorial;
  } else return 1;
}
function factorial(n) {
  let f = 1;
  while (n) {
    f *= n--;
  }
  return f;
}

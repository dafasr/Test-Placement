function OkYes(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      result.push("OKYES");
    } else if (i % 3 === 0) {
      result.push("OK");
    } else if (i % 4 === 0) {
      result.push("YES");
    } else {
      result.push(i);
    }
  }

  return result.join(" ");
}

console.log(OkYes(15));

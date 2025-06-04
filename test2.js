function triangleA(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${i}`.repeat(i));
  }
}

function triangleB(n) {
  for (let i = 0; i < n; i++) {
    let result = [];
    for (let j = 1; j <= i + 1; j++) {
      result.unshift(j);
    }
    console.log(result.join(""));
  }
}

function triangleC(n) {
  let arr = [];
  let total = 1;
  let status = "naik";
  for (let i = 0; i < (n * (n + 1)) / 2; i++) {
    if (total == 1) {
      arr.push(total);
      total++;
      status = "naik";
    } else if (total == 5) {
      arr.push(total);
      total--;
      status = "turun";
    } else {
      if (status == "naik") {
        arr.push(total);
        total++;
      } else {
        arr.push(total);
        total--;
      }
    }
  }
  // console.log(arr);
  total = 0;
  for (let i = 0; i < n; i++) {
    let result = [];
    for (let j = 0; j <= i; j++) {
      result.push(arr[total++]);
    }
    console.log(result.join(""));
  }
}
function squareD(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
  }

  let num = 1;
  for (let j = 0; j < n; j++) {
    if (j % 2 === 0) {
      for (let i = 0; i < n; i++) {
        matrix[i][j] = num++;
      }
    } else {
      for (let i = n - 1; i >= 0; i--) {
        matrix[i][j] = num++;
      }
    }
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += matrix[i][j] + "\t";
    }
    result += "\n";
  }
  console.log(result);
}

// triangleA(5);
// triangleB(5);
// triangleC(5);
squareD(5);

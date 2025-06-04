function processArray(arr) {
  const arrFilter = [];
  for (const number of arr) {
    if (number % 3 !== 0) {
      arrFilter.push(number);
    }
  }

  const result = [];
  let i = 0;
  let j = arrFilter.length - 1;
  while (i <= j) {
    if (arrFilter[i] > arrFilter[j]) {
      result.push(arrFilter[j]);
      j--;
    } else {
      result.push(arrFilter[i]);
      i++;
    }
  }

  return result;
}

const arr = [12, 9, 13, 6, 10, 4, 7, 2];

console.log(processArray(arr));

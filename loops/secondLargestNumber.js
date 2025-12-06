let arr = [4];

function secondLargest(arr) {
//check array have atleast length 2
  if (arr.length < 2) {
    return null;
  }

  let firstLagrest = -Infinity;
  let secondLargest =-Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLagrest) {
      secondLargest = firstLagrest;
      firstLagrest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLagrest) {//checks a duplicate value
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let res = secondLargest(arr);
console.log(res);

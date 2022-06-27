function runProgram(input) {
  // Write code here
  input = input.split("\n");
  var [n, k] = input[0].split(" ").map(Number);
  var arr = input[1].split(" ").map(Number);
  var pivot = find_pivot(arr);
  var ans = solve(arr, k, 0, pivot);
  if (ans == -1) {
    ans = solve(arr, k, pivot + 1, arr.length - 1);
  }
  console.log(ans);
}
function find_pivot(arr) {
  if (arr.length == 1) {
    return 0;
  }

  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = l + parseInt((r - l) / 2);

    if (l < mid && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }

    if (mid < r && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (arr[l] >= arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}
function solve(arr, k, l, r) {
  while (l <= r) {
    let mid = l + parseInt((r - l) / 2);

    if (arr[mid] == k) {
      return mid;
    }

    if (arr[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

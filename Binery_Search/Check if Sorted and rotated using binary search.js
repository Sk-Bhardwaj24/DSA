//using simple technique
function runProgram(input) {
  // Write code here
  input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  if (n == 1) {
    console.log("YES");
    return;
  } else {
    solve(n, arr);
  }
}
function solve(n, arr) {
  var count = 0;
  for (var i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) {
      count++;
    }
  }
  if (count == 1) {
    if (arr[0] < arr[n - 1]) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  } else {
    console.log("NO");
  }
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
//using binery search still takes O(n) time complexity bcz we have to search on
// both side of pivot elements
function runProgram(input) {
  // Write code here
  input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  solve(n, arr);
}
function solve(n, arr) {
  var l = 0;
  var r = n - 1;
  while (l <= r) {
    var mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == arr[r]) {
      r--;
    } else if (arr[mid] > arr[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  // console.log(l);
  let pivot = l;
  for (var j = 0; j < pivot - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      console.log("NO");
      return;
    }
  }
  for (var k = pivot + 1; k < n - 1; k++) {
    if (arr[k] > arr[k + 1]) {
      console.log("NO");
      return;
    }
  }
  if (pivot > 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
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

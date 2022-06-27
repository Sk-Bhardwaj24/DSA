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

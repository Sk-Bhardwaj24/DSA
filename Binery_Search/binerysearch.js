function iterative(n, k, arr) {
  var l = 0;
  var r = n - 1;

  while (l <= r) {
    var mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === k) {
      console.log("1");
      return;
    } else if (arr[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  console.log("-1");
  return;
}

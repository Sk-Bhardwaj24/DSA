function upperbound(n, k, arr) {
  var l = 0;
  var r = n - 1;
  var ans = -1;
  while (l <= r) {
    var mid = l + Math.floor((r - l) / 2);

    //if arr[mid]==k

    //if arr[mid]>k
    if (arr[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
      ans = l;
    }

    //if arr[mid]<k
  }
  console.log(ans);
}
// recursive approach
function upperbound(k, arr, low, high) {
  if (low > high) {
    return low;
  }
  var mid = low + Math.floor((high - low) / 2);
  if (arr[mid] === k) {
    return upperbound(k, arr, mid + 1, high);
  } else if (arr[mid] < k) {
    return upperbound(k, arr, mid + 1, high);
  } else {
    return upperbound(k, arr, low, mid - 1);
  }
}
// Note:this approach will give upper bound if no is present
//if no is not present then it will give where the should be inserted so as array should be sorted

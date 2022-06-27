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

//binery search using recursion
recursiveBinarySearch(arr, 0, n - 1, k);

function recursiveBinarySearch(array, low, high, element) {
  if (low > high) {
    console.log("-1");
    return;
  }
  let mid = low + parseInt((high - low) / 2);
  if (array[mid] == element) {
    console.log("1");
    return;
  }
  if (array[mid] > element) {
    return recursiveBinarySearch(array, low, mid - 1, element);
  }
  return recursiveBinarySearch(array, mid + 1, high, element);
}

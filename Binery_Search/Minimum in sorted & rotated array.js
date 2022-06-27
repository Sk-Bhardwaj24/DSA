//if element is not duplicate
function solve(n, arr) {
  var low = 0;
  var high = n - 1;
  while (low < high) {
    var mid = low + Math.floor((high - low) / 2);

    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return arr[low];
}
//if element is duplicate
function solve(n, arr) {
  var low = 0;
  var high = n - 1;
  while (low <= high) {
    var mid = low + Math.floor((high - low) / 2);
    //  console.log(low,high,mid);
    if (arr[mid] == arr[high]) {
      high--; //this is for if array have duplicate item
    } else if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return arr[low]; //high became high-1
}

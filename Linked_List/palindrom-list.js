// Palindrome List Ended
// Description

// Given a singly linked list, determine if it is a palindrome.
// No need to take any input, You'll be given the pointer to the head of the linked list,Complete the function belowand return true if it's a palindrome and false if otherwise.

// Input
// This is a function complete problem.

// Refer to sample input for understanding

// The first line contains the number of nodes (n)

// Next n lines contains the nodes of the linked list.

// n <= 1000

// list[i] <= 1000

// Output
// Complete the function

// Sample Input 1

// 3
// 1
// 2
// 1
// Sample Output 1

// true
// *************************************************
const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var isPalindrome = function (head) {
  var cur = head;
  var arr = [];
  while (cur !== null) {
    arr.push(cur.data);
    cur = cur.next;
  }
  var line = "";
  var line2 = "";
  for (var i = 0; i < arr.length; i++) {
    line += arr[i];
  }
  for (i = arr.length - 1; i >= 0; i--) {
    line2 += arr[i];
  }
  if (line === line2) {
    return true;
  }
  return false;
};

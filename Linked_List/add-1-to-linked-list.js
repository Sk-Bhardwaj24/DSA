// Add 1 to Linked List Ended
// Description

// A number is given represented in the form of a linked list. Add one to it.

// Input
// This is a function complete problem. You don't have to take the input just complete the function given.

// The sample test case is given only for your understanding.

// Output
// Return head of linked list which is the new number after incrementing one.

// Sample Input 1

// 4
// 2 3 1 3
// Sample Output 1

// 2314
// Hint

// In the sample test case, the number represented by the linked list is 2->3->1->3 is 2313. After adding one the number becomes 2314, as given in the output.

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var addOneToLinkedList = function (head) {
  let revh = rev(head);

  let carry = 1;
  let cur = revh;

  while (carry > 0 && cur != null) {
    let cur_data = cur.data;
    cur.data = (cur_data + carry) % 10;
    carry = parseInt((cur_data + carry) / 10);

    cur = cur.next;
  }

  let new_head = rev(revh);

  if (carry > 0) {
    let new_node = new LinkedListNode(carry);
    new_node.next = new_head;
    new_head = new_node;
  }

  return new_head;
};

function rev(head) {
  let new_head = null;
  let arr = [];
  let cur = head;

  while (cur != null) {
    arr.push(cur);
    cur = cur.next;
  }

  new_head = arr.pop();
  cur = new_head;

  while (arr.length > 0) {
    let temp = arr.pop();
    cur.next = temp;
    cur = temp;
  }

  cur.next = null;

  return new_head;
}
